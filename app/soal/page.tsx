import { LogoutButton } from "@/app/components/logout-button";
import Link from "next/link";

export default function SoalPage() {
  return (
    <>
      <header className="container page-top">
        <Link href="/">← Home</Link>
        <p>Arena Soal &gt; Matematika</p>
        <div className="top-actions">
          <p>XP <strong>60%</strong></p>
          <LogoutButton />
        </div>
      </header>

      <main className="container soal-layout">
        <aside className="panel sidebar">
          <h3>Filter Arena</h3>
          <button className="chip active">Matematika</button>
          <button className="chip">Kimia</button>
          <button className="chip">Fisika</button>
          <hr />
          <button className="chip">Basic</button>
          <button className="chip active">Intermediate</button>
          <button className="chip">Advance</button>
        </aside>

        <section className="panel question-panel">
          <div className="question-head">
            <div>
              <h2>Paket: Aljabar Dasar</h2>
              <p>Soal 7 / 20</p>
            </div>
            <div className="timer">18:42</div>
          </div>

          <article className="question-box panel-soft">
            <p>Jika 2x + 3 = 11, maka nilai x adalah ...</p>
            <div className="option-grid">
              <button>(A) 2</button>
              <button>(B) 3</button>
              <button className="selected">(C) 4</button>
              <button>(D) 5</button>
            </div>
          </article>

          <div className="action-row">
            <button className="btn btn-ghost">Soal Sebelumnya</button>
            <button className="btn btn-secondary">Tandai Ragu</button>
            <button className="btn btn-primary">Soal Berikutnya</button>
          </div>
        </section>
      </main>
    </>
  );
}
