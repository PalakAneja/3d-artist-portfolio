
const slumImages = [
  { src: "/images/slum1.png", alt: "Slum environment — main render" },
  { src: "/images/slum2.png", alt: "Slum environment — alternate view" },
  { src: "/images/slum3.png", alt: "Slum environment — environment details" },
  { src: "/images/slum4.png", alt: "Slum environment — composition study" },
  { src: "/images/slum5.png", alt: "Slum environment — additional view" },
];

export default function SlumProjectPage() {
  return (
    <main className="project-detail-page">
      <header className="detail-header">
        <a href="/" className="detail-logo">
          PALAK ANEJA<span>®</span>
        </a>
        <a href="/#work" className="detail-back">
          ← BACK TO PORTFOLIO
        </a>
      </header>

      <section className="detail-hero">
        <p className="eyebrow">SELECTED WORK · ENVIRONMENT DESIGN</p>
        <h1>
          SLUM ENVIRONMENT<span>.</span>
        </h1>
        <p className="detail-intro">
          A detailed 3D environment exploring architecture, atmosphere,
          materials, and storytelling through environmental design.
        </p>

        <div className="detail-meta">
          <div>
            <p className="eyebrow">DISCIPLINE</p>
            <p>Environment Design</p>
          </div>
          <div>
            <p className="eyebrow">SOFTWARE</p>
            <p>Maya · Substance 3D Painter · Unreal Engine</p>
          </div>
          <div>
            <p className="eyebrow">PROJECT TYPE</p>
            <p>3D Environment</p>
          </div>
        </div>
      </section>

      <section className="model-gallery">
        <div className="model-gallery-heading">
          <p className="eyebrow">PROJECT GALLERY</p>
          <span>05 IMAGES</span>
        </div>

        <div className="model-grid">
          {slumImages.map((image, index) => (
            <article className="model-card" key={image.src}>
              <div className="model-image">
                <img src={image.src} alt={image.alt} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="model-info">
                <h2>{image.alt}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="detail-footer">
        <a href="/#work">← RETURN TO PORTFOLIO</a>
        <span>PALAK ANEJA · 3D ARTIST</span>
      </footer>
    </main>
  );
}
