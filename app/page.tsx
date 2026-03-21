import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <header className="top-nav container">
        <Link className="brand" href="/">
          <span className="brand-badge">N</span>
          <span className="brand-text">NexA Academy</span>
        </Link>
        <nav>
          <a href="#arena">Arena Soal</a>
          <Link href="/tryout">Try Out</Link>
          <a href="#event">Event</a>
        </nav>
        <div className="nav-actions">
          <Link className="btn btn-ghost" href="/login">
            Login
          </Link>
          <Link className="btn btn-primary" href="/soal">
            Start Mission
          </Link>
        </div>
      </header>

      <main className="container">
        <section className="hero panel">
          <div>
            <p className="eyebrow">[ MAIN QUEST ]</p>
            <h1>
              Level Up Belajarmu, <span>dengan rasa main game.</span>
            </h1>
            <p className="lead">
              Platform bimbel TKA bernuansa retro biru: belajar materi, kerjakan
              soal, lalu taklukkan try out.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/soal">
                Start Mission
              </Link>
              <Link className="btn btn-secondary" href="/tryout">
                Lihat Try Out
              </Link>
            </div>
          </div>
          <div className="status-card panel-soft">
            <p>Daily XP</p>
            <div className="progress">
              <span style={{ width: "70%" }} />
            </div>
            <ul>
              <li>
                Streak: <strong>5 hari</strong>
              </li>
              <li>
                Level: <strong>Rookie Cadet</strong>
              </li>
              <li>
                Misi aktif: <strong>3 paket</strong>
              </li>
            </ul>
          </div>
        </section>

        <section id="arena" className="section-block">
          <div className="section-head">
            <h2>Pilih Arena Belajar</h2>
            <Link href="/soal">Lihat semua →</Link>
          </div>
          <div className="card-grid">
            {[
              ["Matematika", "120 soal • 12 paket"],
              ["Kimia", "95 soal • 9 paket"],
              ["Fisika", "88 soal • 8 paket"],
            ].map(([title, desc]) => (
              <article className="module-card" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link className="btn btn-secondary" href="/soal">
                  Masuk Arena
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="event" className="section-block">
          <div className="section-head">
            <h2>Event Try Out</h2>
          </div>
          <div className="event-grid">
            <article className="event-card">
              <span className="pill open">OPEN</span>
              <h3>Try Out Mingguan #12</h3>
              <p>24 Maret 2026 • 120 menit</p>
              <Link className="btn btn-primary" href="/tryout">
                Ikut Event
              </Link>
            </article>
            <article className="event-card">
              <span className="pill soon">SOON</span>
              <h3>Try Out Simulasi Final</h3>
              <p>29 Maret 2026 • 150 menit</p>
              <Link className="btn btn-ghost" href="/tryout">
                Lihat Detail
              </Link>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
