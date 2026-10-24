
const renders = [
  {
    title: "Perfume Product Render",
    image: "/images/perfume%20render.png",
    description: "Product visualization, materials, and lighting",
    number: "01",
  },
  {
    title: "Automotive Render",
    image: "/images/bmw_model.jpeg",
    description: "Automotive presentation and composition",
    number: "02",
  },
  {
    title: "Automotive Detail",
    image: "/images/bmw_model4.jpeg",
    description: "Surface, form, and lighting study",
    number: "03",
  },
  {
    title: "Automotive Model View",
    image: "/images/bmwmodel2.jpeg",
    description: "Vehicle modeling and form exploration",
    number: "04",
  },
  {
    title: "Automotive Presentation",
    image: "/images/bmwmodel5.jpeg",
    description: "Additional vehicle render and presentation",
    number: "05",
  },
];


export default function RendersPage() {
  return (
    <main className="project-detail-page">
      <header className="detail-header">
        <a href="/" className="detail-logo">
          PALAK ANEJA<span>®</span>
        </a>
        <a href="/#categories" className="detail-back">
          ← BACK TO PORTFOLIO
        </a>
      </header>

      <section className="detail-hero">
        <p className="eyebrow">SELECTED WORK · COLLECTION 02</p>
        <h1>
          RENDERS<span>.</span>
        </h1>
        <p className="detail-intro">
          A collection of finished 3D visuals exploring materials,
          lighting, composition, and presentation.
        </p>
      </section>

      <section className="model-gallery">
        <div className="model-gallery-heading">
          <p className="eyebrow">THE COLLECTION</p>
          <span>{String(renders.length).padStart(2, "0")} PROJECTS</span>
        </div>

        <div className="model-grid">
          {renders.map((render) => (
            <article className="model-card" key={render.number}>
              <div className="model-image">
                <img src={render.image} alt={render.title} />
                <span>{render.number}</span>
              </div>
              <div className="model-info">
                <h2>{render.title}</h2>
                <p>{render.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="detail-footer">
        <a href="/#categories">← RETURN TO PORTFOLIO</a>
        <span>3D ARTIST PORTFOLIO</span>
      </footer>
    </main>
  );
}
