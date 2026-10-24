
const images = [
  {
    title: "Main Model",
    image: "/images/hogwarts/hogmodel.jpeg",
    number: "01",
  },
  {
    title: "Side View",
    image: "/images/hogwarts/hogwarts%20model.jpeg",
    number: "02",
  },
  {
    title: "Model Details",
    image: "/images/hogwarts/hogwarts1%20model.jpeg",
    number: "03",
  },
  {
    title: "Final Render",
    image: "/images/hogwarts/hogwartsmodel.jpeg",
    number: "04",
  },
];

export default function HogwartsExpressPage() {
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
        <p className="eyebrow">3D MODELING · PROJECT 01</p>
        <h1>
          HOGWARTS EXPRESS<span>.</span>
        </h1>
        <p className="detail-intro">
          A detailed 3D modeling study exploring the form,
          structure, and presentation of the Hogwarts Express.
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
                <h2>{item.title}</h2>
                <p>Hogwarts Express · 3D Artwork</p>
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
