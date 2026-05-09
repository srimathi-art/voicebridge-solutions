import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import {
  Mic,
  MicOff,
  Video as VideoIcon,
  VideoOff,
  PhoneOff,
  Hand,
  MessageSquare,
  Users,
  Copy,
  Languages,
  Sparkles,
  Send,
  Maximize,
} from "lucide-react";
import { toast } from "sonner";
import type { RealtimeChannel } from "@supabase/supabase-js";

export const Route = createFileRoute("/room/$roomId")({
  head: ({ params }) => ({ meta: [{ title: `Room ${params.roomId} — S2V Connect` }] }),
  component: Room,
});

const ICE_SERVERS = {
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "stun:stun1.l.google.com:19302" },
  ],
};

type ChatMsg = { id: string; from: string; text: string; ts: number };

function Room() {
  const { roomId } = Route.useParams();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const pcRef = useRef<RTCPeerConnection | null>(null);
  const channelRef = useRef<RealtimeChannel | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);
  const clientIdRef = useRef<string>(Math.random().toString(36).slice(2, 10));

  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [hand, setHand] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showPeople, setShowPeople] = useState(false);
  const [captions, setCaptions] = useState(true);
  const [signMode, setSignMode] = useState(false);
  const [chat, setChat] = useState<ChatMsg[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [peerConnected, setPeerConnected] = useState(false);
  const [peers, setPeers] = useState<string[]>([]);
  const [captionText, setCaptionText] = useState("");

  // Auth gate
  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [user, loading, navigate]);

  // Setup media + signaling
  useEffect(() => {
    if (!user) return;
    let cancelled = false;

    const setup = async () => {
      // 1. local media
      let stream: MediaStream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      } catch (err) {
        toast.error("Camera/mic access denied");
        console.error(err);
        return;
      }
      if (cancelled) {
        stream.getTracks().forEach((t) => t.stop());
        return;
      }
      localStreamRef.current = stream;
      if (localVideoRef.current) localVideoRef.current.srcObject = stream;

      // 2. peer connection
      const pc = new RTCPeerConnection(ICE_SERVERS);
      pcRef.current = pc;
      stream.getTracks().forEach((t) => pc.addTrack(t, stream));

      pc.ontrack = (ev) => {
        if (remoteVideoRef.current && ev.streams[0]) {
          remoteVideoRef.current.srcObject = ev.streams[0];
          setPeerConnected(true);
        }
      };

      pc.onicecandidate = (ev) => {
        if (ev.candidate) {
          channelRef.current?.send({
            type: "broadcast",
            event: "ice",
            payload: { from: clientIdRef.current, candidate: ev.candidate },
          });
        }
      };

      pc.onconnectionstatechange = () => {
        if (pc.connectionState === "disconnected" || pc.connectionState === "failed") {
          setPeerConnected(false);
        }
      };

      // 3. realtime channel
      const channel = supabase.channel(`room:${roomId}`, {
        config: { presence: { key: clientIdRef.current } },
      });
      channelRef.current = channel;

      const sendOffer = async () => {
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        channel.send({
          type: "broadcast",
          event: "offer",
          payload: { from: clientIdRef.current, sdp: offer },
        });
      };

      channel
        .on("broadcast", { event: "offer" }, async ({ payload }) => {
          if (payload.from === clientIdRef.current) return;
          await pc.setRemoteDescription(new RTCSessionDescription(payload.sdp));
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          channel.send({
            type: "broadcast",
            event: "answer",
            payload: { from: clientIdRef.current, to: payload.from, sdp: answer },
          });
        })
        .on("broadcast", { event: "answer" }, async ({ payload }) => {
          if (payload.to !== clientIdRef.current) return;
          if (!pc.currentRemoteDescription) {
            await pc.setRemoteDescription(new RTCSessionDescription(payload.sdp));
          }
        })
        .on("broadcast", { event: "ice" }, async ({ payload }) => {
          if (payload.from === clientIdRef.current) return;
          try {
            await pc.addIceCandidate(new RTCIceCandidate(payload.candidate));
          } catch (e) {
            console.warn("ICE add failed", e);
          }
        })
        .on("broadcast", { event: "chat" }, ({ payload }) => {
          setChat((c) => [...c, payload as ChatMsg]);
        })
        .on("presence", { event: "sync" }, () => {
          const state = channel.presenceState();
          const ids = Object.keys(state);
          setPeers(ids);
        })
        .on("presence", { event: "join" }, async ({ key }) => {
          if (key === clientIdRef.current) return;
          // existing client initiates offer to newcomer
          await sendOffer();
        });

      await channel.subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
          await channel.track({
            user_id: user.id,
            name: (user.user_metadata?.full_name as string) || user.email || "Guest",
            joined_at: Date.now(),
          });
        }
      });
    };

    setup();

    return () => {
      cancelled = true;
      pcRef.current?.close();
      pcRef.current = null;
      localStreamRef.current?.getTracks().forEach((t) => t.stop());
      localStreamRef.current = null;
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
        channelRef.current = null;
      }
    };
  }, [user, roomId]);

  // Mock live captions when captions on
  useEffect(() => {
    if (!captions) return setCaptionText("");
    const lines = [
      "Hello everyone, can you hear me?",
      "AI captions are now active in this room.",
      "Sign-to-voice is translating gestures in real time.",
      "Switching to Hindi — नमस्ते सभी को।",
    ];
    let i = 0;
    setCaptionText(lines[0]);
    const t = setInterval(() => {
      i = (i + 1) % lines.length;
      setCaptionText(lines[i]);
    }, 3500);
    return () => clearInterval(t);
  }, [captions]);

  const toggleMic = () => {
    const track = localStreamRef.current?.getAudioTracks()[0];
    if (track) {
      track.enabled = !track.enabled;
      setMicOn(track.enabled);
    }
  };

  const toggleCam = () => {
    const track = localStreamRef.current?.getVideoTracks()[0];
    if (track) {
      track.enabled = !track.enabled;
      setCamOn(track.enabled);
    }
  };

  const endCall = () => {
    pcRef.current?.close();
    localStreamRef.current?.getTracks().forEach((t) => t.stop());
    if (channelRef.current) supabase.removeChannel(channelRef.current);
    navigate({ to: "/dashboard" });
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Meeting link copied");
  };

  const sendChat = () => {
    if (!chatInput.trim() || !user) return;
    const msg: ChatMsg = {
      id: Math.random().toString(36).slice(2),
      from: (user.user_metadata?.full_name as string) || user.email || "Guest",
      text: chatInput.trim(),
      ts: Date.now(),
    };
    channelRef.current?.send({ type: "broadcast", event: "chat", payload: msg });
    setChat((c) => [...c, msg]);
    setChatInput("");
  };

  const fullscreen = () => {
    document.documentElement.requestFullscreen?.().catch(() => {});
  };

  if (loading || !user) {
    return <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">Loading…</div>;
  }

  return (
    <div className="flex h-screen flex-col bg-black/60 text-foreground">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-3 border-b border-white/5 bg-black/40 px-4 py-3 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-brand glow" />
          <div>
            <p className="text-xs text-muted-foreground">Room</p>
            <p className="font-mono text-sm">{roomId}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-full glass px-3 py-1 text-xs sm:inline-flex">
            <span className={`h-2 w-2 rounded-full ${peerConnected ? "bg-emerald-400 animate-pulse-glow" : "bg-amber-400"}`} />
            {peerConnected ? "Connected" : "Waiting for peers…"}
          </span>
          <button onClick={copyLink} className="inline-flex items-center gap-1.5 rounded-xl glass px-3 py-1.5 text-xs hover:glow-soft">
            <Copy size={12} /> Invite
          </button>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative flex flex-1 overflow-hidden">
        <div className="relative flex-1 p-4">
          <div className={`grid h-full gap-3 ${peerConnected ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
            {/* Remote */}
            {peerConnected && (
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-violet-900/40 to-blue-900/40">
                <video ref={remoteVideoRef} autoPlay playsInline className="h-full w-full object-cover" />
                <div className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-1 text-xs backdrop-blur">Peer</div>
              </div>
            )}

            {/* Local */}
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-fuchsia-900/30 to-indigo-900/30">
              <video ref={localVideoRef} autoPlay playsInline muted className="h-full w-full object-cover" />
              {!camOn && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-sm text-muted-foreground">
                  Camera off
                </div>
              )}
              <div className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-1 text-xs backdrop-blur">
                You {!micOn && "(muted)"}
              </div>
              {hand && (
                <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-2 py-1 text-xs text-amber-300 backdrop-blur">
                  <Hand size={12} /> Hand raised
                </div>
              )}
              {signMode && (
                <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-300 backdrop-blur">
                  <Sparkles size={12} /> Sign-to-Voice
                </div>
              )}
            </div>
          </div>

          {/* Captions */}
          {captions && captionText && (
            <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center px-4">
              <div className="max-w-2xl rounded-2xl bg-black/70 px-5 py-3 text-center text-sm backdrop-blur-xl">
                <span className="mr-2 inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300">
                  <Languages size={10} /> Live
                </span>
                {captionText}
              </div>
            </div>
          )}
        </div>

        {/* Chat panel */}
        {showChat && (
          <aside className="hidden w-80 flex-col border-l border-white/5 bg-black/40 p-4 backdrop-blur md:flex">
            <h4 className="font-semibold">Chat</h4>
            <div className="mt-3 flex-1 space-y-2 overflow-y-auto pr-1">
              {chat.length === 0 && <p className="text-xs text-muted-foreground">No messages yet.</p>}
              {chat.map((m) => (
                <div key={m.id} className="rounded-xl glass p-2 text-xs">
                  <p className="font-medium text-accent">{m.from}</p>
                  <p className="mt-0.5">{m.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-2">
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendChat()}
                placeholder="Send a message"
                className="flex-1 rounded-xl glass px-3 py-2 text-xs outline-none"
              />
              <button onClick={sendChat} className="rounded-xl bg-gradient-brand p-2 text-white">
                <Send size={14} />
              </button>
            </div>
          </aside>
        )}

        {/* People panel */}
        {showPeople && (
          <aside className="hidden w-72 flex-col border-l border-white/5 bg-black/40 p-4 backdrop-blur md:flex">
            <h4 className="font-semibold">Participants ({peers.length})</h4>
            <ul className="mt-3 space-y-2">
              {peers.map((p) => (
                <li key={p} className="flex items-center justify-between rounded-xl glass px-3 py-2 text-xs">
                  <span className="font-mono">{p === clientIdRef.current ? "You" : p.slice(0, 8)}</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>

      {/* Bottom controls */}
      <div className="border-t border-white/5 bg-black/40 px-4 py-3 backdrop-blur">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <ControlBtn active={micOn} onClick={toggleMic} icon={micOn ? Mic : MicOff} label="Mic" danger={!micOn} />
          <ControlBtn active={camOn} onClick={toggleCam} icon={camOn ? VideoIcon : VideoOff} label="Camera" danger={!camOn} />
          <ControlBtn active={hand} onClick={() => setHand((h) => !h)} icon={Hand} label="Raise" />
          <ControlBtn active={captions} onClick={() => setCaptions((c) => !c)} icon={Languages} label="Captions" />
          <ControlBtn active={signMode} onClick={() => setSignMode((s) => !s)} icon={Sparkles} label="Sign AI" />
          <ControlBtn active={showChat} onClick={() => { setShowChat((c) => !c); setShowPeople(false); }} icon={MessageSquare} label="Chat" />
          <ControlBtn active={showPeople} onClick={() => { setShowPeople((p) => !p); setShowChat(false); }} icon={Users} label="People" />
          <ControlBtn active={false} onClick={fullscreen} icon={Maximize} label="Full" />
          <button
            onClick={endCall}
            className="ml-2 inline-flex items-center gap-2 rounded-xl bg-red-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-600"
          >
            <PhoneOff size={16} /> End
          </button>
        </div>
      </div>
    </div>
  );
}

function ControlBtn({
  icon: Icon,
  label,
  active,
  danger,
  onClick,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  active: boolean;
  danger?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex flex-col items-center justify-center rounded-xl px-3 py-2 text-[10px] transition-all ${
        danger
          ? "bg-red-500/20 text-red-300 hover:bg-red-500/30"
          : active
          ? "bg-gradient-brand text-white glow-soft"
          : "glass hover:glow-soft"
      }`}
      aria-label={label}
    >
      <Icon size={18} />
      <span className="mt-0.5">{label}</span>
    </button>
  );
}
