

const forestImages = [
  { src: "/images/forestview.png", alt: "Forest Environment — Main View" },
  { src: "/images/forest.png", alt: "Forest Environment — Overview" },
  { src: "/images/forest1.png", alt: "Forest Environment — View 1" },
  { src: "/images/forest2.png", alt: "Forest Environment — View 2" },
  { src: "/images/forest3.png", alt: "Forest Environment — View 3" },
  { src: "/images/forestlighting.png", alt: "Forest Environment — Lighting Study" },
  { src: "/images/forestpath.png", alt: "Forest Environment — Forest Path" },
  { src: "/images/forestpathhhh.png", alt: "Forest Environment — Path Detail" },
  { src: "/images/foresttopview.png", alt: "Forest Environment — Top View" },
  { src: "/images/blockout.png", alt: "Forest Environment — Blockout" },
];

export default function ForestProjectPage() {
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
          FOREST ENVIRONMENT<span>.</span>
        </h1>
        <p className="detail-intro">
          An immersive 3D forest environment exploring natural forms,
          atmosphere, lighting, and environmental storytelling.
        </p>

        <div className="detail-meta">
          <div>
            <p className="eyebrow">DISCIPLINE</p>
            <p>Environment Design</p>
          </div>
          <div>
            <p className="eyebrow">SOFTWARE</p>
            <p>Unreal Engine · Blender</p>
          </div>
          <div>
            <p className="eyebrow">PROJECT TYPE</p>
            <p>3D Environment</p>
          </div>
        </div>
      </section>

      <section className="model-gallery">
        <div className="model-gallery-heading">
          <p className="eyebrow">ENVIRONMENT VIDEO</p>
          <span>01 VIDEO</span>
        </div>

        <div className="forest-video-frame">
          <video
            src="/videos/forest.mp4"
            controls
            playsInline
            preload="metadata"
          />
        </div>

        <div className="model-gallery-heading">
          <p className="eyebrow">PROJECT GALLERY</p>
          <span>{String(forestImages.length).padStart(2, "0")} IMAGES</span>
        </div>

        <div className="model-grid">
          {forestImages.map((image, index) => (
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
