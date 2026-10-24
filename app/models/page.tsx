
const projects = [
  {
    title: "Hogwarts Express",
    description: "Locomotive modeling, details and wireframes",
    image: "/images/hogwarts/hogwartsmodel.jpeg",
    number: "01",
    category: "HARD-SURFACE MODELING",
    link: "/hogwarts-express",
  },
  {
    title: "WALL·E",
    description: "Character modeling, materials and environment renders",
    image: "/images/Wall-E/walle-front-view.png",
    number: "02",
    category: "CHARACTER MODELING",
    link: "/wall-e",
  },
];

export default function ModelsPage() {
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
        <p className="eyebrow">SELECTED WORK · COLLECTION 01</p>
        <h1>3D MODELS<span>.</span></h1>
        <p className="detail-intro">
          Explore my 3D modeling projects, from detailed hard-surface
          assets to character modeling and material studies.
        </p>
      </section>

      <section
        className="model-gallery"
        style={{ width: "100%", maxWidth: "1200px", margin: "35px auto 70px" }}
      >
        <div className="model-gallery-heading">
          <p className="eyebrow">PROJECT COLLECTIONS</p>
          <span>02 PROJECTS</span>
        </div>

        <div
          className="model-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "24px",
            width: "100%",
            alignItems: "start",
          }}
        >
          {projects.map((project) => (
            <a
              className="model-card"
              href={project.link}
              key={project.number}
              style={{
                display: "block",
                width: "100%",
                minWidth: 0,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <div
                className="model-image"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 3",
                  overflow: "hidden",
                  background: "var(--panel)",
                  border: "1px solid var(--line)",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
                <span>{project.number}</span>
              </div>

              <div className="model-info">
                <p className="eyebrow">{project.category}</p>
                <h2>{project.title} ↗</h2>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="detail-footer">
        <a href="/#categories">← RETURN TO PORTFOLIO</a>
        <span>PALAK ANEJA · 3D ARTIST</span>
      </footer>
    </main>
  );
}
