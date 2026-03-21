import { LogoutButton } from "@/app/components/logout-button";
import Link from "next/link";

export default function TryOutPage() {
  return (
    <>
      <header className="container page-top">
        <Link href="/">← Home</Link>
        <p>Try Out Event</p>
        <div className="top-actions">
          <a href="#">Riwayat Hasil</a>
          <LogoutButton />
        </div>
      </header>

      <main className="container section-block">
        <div className="event-grid">
          <article className="event-card panel">
            <span className="pill open">OPEN</span>
            <h3>TO Mingguan #12</h3>
            <p>24 Maret 2026 • 120 menit • 500 peserta</p>
            <a className="btn btn-primary" href="#ujian">
              Ikut Try Out
            </a>
          </article>
          <article className="event-card panel">
            <span className="pill soon">SOON</span>
            <h3>TO Simulasi Final</h3>
            <p>29 Maret 2026 • 150 menit • 320 peserta</p>
            <a className="btn btn-ghost" href="#">
              Ingatkan Saya
            </a>
          </article>
        </div>

        <section id="ujian" className="panel exam-layout">
          <article className="panel-soft question-box">
            <h3>Soal 12 / 50</h3>
            <p>
              Sebuah benda bergerak lurus beraturan dengan kecepatan 10 m/s
              selama 5 detik. Jarak yang ditempuh adalah ...
            </p>
            <div className="option-grid">
              <button>(A) 20 m</button>
              <button>(B) 30 m</button>
              <button className="selected">(C) 50 m</button>
              <button>(D) 60 m</button>
            </div>
            <div className="action-row">
              <button className="btn btn-ghost">Prev</button>
              <button className="btn btn-secondary">Ragu</button>
              <button className="btn btn-primary">Next</button>
            </div>
          </article>

          <aside className="panel-soft status-side">
            <p className="timer big">01:22:10</p>
            <p>Nomor Soal</p>
            <div className="palette">
              <span className="done">01</span>
              <span className="done">02</span>
              <span>03</span>
              <span className="review">04</span>
              <span>05</span>
              <span className="done">06</span>
              <span>07</span>
              <span>08</span>
              <span className="review">09</span>
              <span>10</span>
            </div>
            <button className="btn btn-primary">Submit Final</button>
          </aside>
        </section>
      </main>
    </>
  );
}
