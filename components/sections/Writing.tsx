import { writingTopics } from "@/lib/data"

const categories = ["Architecture", "Privacy", "Systems", "Edge / Cloud", "Privacy", "DX"]

export function Writing() {
  return (
    <section id="writing" className="section section-bk">
      <div className="container">
        <div className="section-header" data-slam>
          <p className="section-label">On My Mind</p>
          <h2 className="section-title">Topics I&apos;m<br />developing.</h2>
        </div>

        <div style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <ol className="writing-list" data-slam data-slam-delay="0.06">
            {writingTopics.map((topic, i) => (
              <li key={topic} className="writing-item">
                <span className="writing-idx">0{i + 1}</span>
                <span className="writing-topic">{topic}</span>
                <span className="writing-tag">{categories[i] ?? "Essay"}</span>
                <span className="writing-arrow">→</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
