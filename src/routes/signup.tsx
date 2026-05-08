import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Mail, Lock, User, Loader2, Phone, Languages } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Create account — S2V Connect" }] }),
  component: Signup,
});

function Signup() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("English");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) navigate({ to: "/dashboard" });
  }, [user, navigate]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
        data: { full_name: name, phone, language },
      },
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Account created! Check your email to verify.");
      navigate({ to: "/dashboard" });
    }
  };

  const onGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/dashboard` },
    });
    if (error) toast.error(error.message);
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="rounded-3xl glass-strong p-8 shadow-elevated">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-2xl bg-gradient-brand glow" />
            <h1 className="mt-5 font-display text-2xl font-bold">Create your account</h1>
            <p className="mt-1 text-sm text-muted-foreground">Inclusive meetings, powered by AI</p>
          </div>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground">Full name</label>
              <div className="mt-1 flex items-center gap-2 rounded-xl glass px-3 py-2.5 focus-within:ring-1 focus-within:ring-ring">
                <User size={16} className="text-muted-foreground" />
                <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Ada Lovelace" className="w-full bg-transparent text-sm outline-none" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Email</label>
              <div className="mt-1 flex items-center gap-2 rounded-xl glass px-3 py-2.5 focus-within:ring-1 focus-within:ring-ring">
                <Mail size={16} className="text-muted-foreground" />
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full bg-transparent text-sm outline-none" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Phone number</label>
              <div className="mt-1 flex items-center gap-2 rounded-xl glass px-3 py-2.5 focus-within:ring-1 focus-within:ring-ring">
                <Phone size={16} className="text-muted-foreground" />
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 90000 00000" className="w-full bg-transparent text-sm outline-none" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Password</label>
              <div className="mt-1 flex items-center gap-2 rounded-xl glass px-3 py-2.5 focus-within:ring-1 focus-within:ring-ring">
                <Lock size={16} className="text-muted-foreground" />
                <input type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" className="w-full bg-transparent text-sm outline-none" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Preferred language</label>
              <div className="mt-1 flex items-center gap-2 rounded-xl glass px-3 py-2.5 focus-within:ring-1 focus-within:ring-ring">
                <Languages size={16} className="text-muted-foreground" />
                <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full bg-transparent text-sm outline-none [&>option]:bg-[#151B34]">
                  {["English", "Tamil", "Malayalam", "Kannada", "Hindi"].map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
              </div>
            </div>

            <button disabled={loading} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand py-3 text-sm font-semibold text-primary-foreground glow disabled:opacity-60">
              {loading && <Loader2 size={16} className="animate-spin" />}
              Create account
            </button>
          </form>

          <div className="my-5 flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground">
            <span className="h-px flex-1 bg-white/10" /> or <span className="h-px flex-1 bg-white/10" />
          </div>
          <button onClick={onGoogle} className="inline-flex w-full items-center justify-center gap-2 rounded-xl glass py-2.5 text-sm font-medium hover:glow-soft">
            <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#fff" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4c-.2 1.3-.9 2.3-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z"/><path fill="#fff" opacity=".8" d="M12 22c2.7 0 5-.9 6.6-2.5l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4.1H3v2.6C4.7 19.8 8.1 22 12 22z"/><path fill="#fff" opacity=".6" d="M6.4 13.9c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9V7.5H3C2.4 8.9 2 10.4 2 12s.4 3.1 1 4.5l3.4-2.6z"/><path fill="#fff" opacity=".9" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8C16.9 2.9 14.7 2 12 2 8.1 2 4.7 4.2 3 7.5l3.4 2.6C7.2 7.6 9.4 5.9 12 5.9z"/></svg>
            Continue with Google
          </button>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-accent hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
