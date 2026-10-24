
const images = [
  {
    title: "Front View",
    image: "/images/Wall-E/walle-front-view.png",
    category: "FINAL MODEL",
    number: "01",
  },
  {
    title: "Sunlit Village",
    image: "/images/Wall-E/walle-village-render.png",
    category: "ENVIRONMENT RENDER",
    number: "02",
  },
  {
    title: "Canyon Render",
    image: "/images/Wall-E/walle-canyon-render.png",
    category: "FINAL RENDER",
    number: "03",
  },
  {
    title: "Canyon Wireframe",
    image: "/images/Wall-E/walle-canyon-wireframe.png",
    category: "WIREFRAME",
    number: "04",
  },
  {
    title: "Technical Wireframe",
    image: "/images/Wall-E/walle-technical-wireframe.png",
    category: "MODELING BREAKDOWN",
    number: "05",
  },
  {
    title: "Maya Viewport",
    image: "/images/Wall-E/walle-maya-wireframe.png",
    category: "WORKFLOW",
    number: "06",
  },
  {
    title: "Wireframe Detail",
    image: "/images/Wall-E/walle-wireframe-detail.png",
    category: "MODELING DETAIL",
    number: "07",
  },
  {
    title: "Additional View",
    image: "/images/Wall-E/walle-extra-view.jpeg",
    category: "PROJECT VIEW",
    number: "08",
  },
];

export default function WallEPage() {
  return (
    <main className="project-detail-page">
      <header className="detail-header">
        <a href="/" className="detail-logo">
          PALAK ANEJA<span>®</span>
        </a>
        <a href="/models" className="detail-back">
          ← BACK TO 3D MODELS
        </a>
      </header>

      <section className="detail-hero">
        <p className="eyebrow">CHARACTER MODELING · PROJECT 02</p>
        <h1>
          WALL·E<span>.</span>
        </h1>
        <p className="detail-intro">
          A 3D character study exploring mechanical forms,
          surface detail, wireframe structure, and cinematic presentation.
        </p>
      </section>

      <section className="model-gallery">
        <div className="model-gallery-heading">
          <p className="eyebrow">PROJECT GALLERY</p>
          <span>{String(images.length).padStart(2, "0")} IMAGES</span>
        </div>

        <div className="model-grid">
          {images.map((item) => (
            <article className="model-card" key={item.number}>
              <div className="model-image">
                <img src={item.image} alt={item.title} />
                <span>{item.number}</span>
              </div>
              <div className="model-info">
                <p className="eyebrow">{item.category}</p>
                <h2>{item.title}</h2>
                <p>WALL·E · 3D Artwork</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="detail-footer">
        <a href="/models">← BACK TO ALL 3D MODELS</a>
        <span>PALAK ANEJA · 3D ARTIST</span>
      </footer>
    </main>
  );
}
