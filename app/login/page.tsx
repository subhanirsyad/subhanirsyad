"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = useMemo(() => {
    const redirect = searchParams.get("redirect");
    if (!redirect || !redirect.startsWith("/")) {
      return "/soal";
    }

    return redirect;
  }, [searchParams]);

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { message?: string }
          | null;
        setError(data?.message ?? "Login gagal. Coba lagi.");
        return;
      }

      router.push(redirectTo);
      router.refresh();
    } catch {
      setError("Terjadi gangguan jaringan. Coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container auth-layout">
      <section className="panel auth-art">
        <p className="eyebrow">[ PLAYER BASE ]</p>
        <h1>NexA Academy</h1>
        <p>Your next level, with NexA.</p>
      </section>

      <section className="panel auth-form">
        <h2>Login to Continue Mission</h2>
        <p>Pakai email untuk akses halaman soal dan try out.</p>
        <form onSubmit={onSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="kamu@email.com"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button className="btn btn-primary" type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Kirim Magic Link"}
          </button>
        </form>
        {error ? <p className="error-text">{error}</p> : null}
        <div className="row-links">
          <Link href="/">← Kembali ke home</Link>
          <Link href={redirectTo}>Demo masuk</Link>
        </div>
      </section>
    </main>
  );
}
