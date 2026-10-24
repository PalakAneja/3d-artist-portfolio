
"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Slum Environment",
    link: "/projects/slum",
    category: "Environment",
    software: "Maya · Substance 3D Painter · Unreal Engine",
    video: "/videos/slum.mp4",
    number: "01",
  },
  {
    title: "Forest Environment",
    link: "/forest",
    category: "Environment",
    software: "Unreal Engine · Blender",
    video: "/videos/forest.mp4",
    number: "02",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#home">
          PALAK ANEJA<span>®</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#work" onClick={() => setMenuOpen(false)}>WORK</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            CONTACT ↗
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">3D ARTIST · ENVIRONMENT DESIGN</p>
          <h1>WORLDS BEYOND REALITY<span>.</span></h1>
          <p className="hero-description">
            Building immersive environments, atmospheric worlds, and
            detailed 3D spaces.
          </p>
          <a className="text-link" href="#work">
            EXPLORE MY WORK <ArrowDown size={16} />
          </a>
        </div>

        <div className="hero-art-image">
          <video
            className="hero-video"
            src="/videos/slum.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
          <div className="hero-image-caption">
            ENVIRONMENT STUDY — 001
          </div>
        </div>

        <div className="hero-bottom">
          <span>3D ENVIRONMENTS / DIGITAL WORLDS</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A SELECTION OF MY WORK</p>
            <h2>SELECTED WORK<span>.</span></h2>
          </div>
          <span className="project-count">PROJECTS / 02</span>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <a
              className="project-card"
              key={project.number}
              href={project.link}
            >
              <div className="project-media">
                <video
                  className="project-video"
                  src={project.video}
                  muted
                  playsInline
                  preload="metadata"
                  controls
                />
                <span className="project-number">{project.number}</span>
              </div>

              <div className="project-details">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.software}</p>
                </div>
                <span className="project-category">
                  {project.category}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="category-section" id="categories">
        <div className="category-heading">
          <p className="eyebrow">EXPLORE MY ARTWORK</p>
          <h2>MORE OF MY WORK<span>.</span></h2>
          <p>Explore my 3D models and finished renders.</p>
        </div>

        <div className="category-grid">
          <a className="category-card" href="/models">
            <img
             src="/images/hogwarts/hogmodel.jpeg"
              alt="Hogwarts Express 3D model"
            />
            <div className="category-card-info">
              <div>
                <span>01 / COLLECTION</span>
                <h3>3D MODELS</h3>
              </div>
              <span className="category-arrow">↗</span>
            </div>
          </a>

          <a className="category-card" href="/renders">
            <img
              src="/images/perfume render.png"
              alt="Perfume product render"
            />
            <div className="category-card-info">
              <div>
                <span>02 / COLLECTION</span>
                <h3>RENDERS</h3>
              </div>
              <span className="category-arrow">↗</span>
            </div>
          </a>
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h2>
          CRAFTING PLACES<br />
          THAT TELL STORIES<span>.</span>
        </h2>

        <div className="about-bottom">
          <p>
            I’m a 3D artist focused on environment design, 3D modelling,
            materials, and creating immersive spaces. I enjoy turning
            visual ideas into detailed worlds with a strong sense of mood
            and place.
          </p>

          <div className="software-list">
            <span>01 — BLENDER</span>
            <span>02 — AUTODESK MAYA</span>
            <span>03 — UNREAL ENGINE</span>
            <span>04 — SUBSTANCE 3D PAINTER</span>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
        <h2>
          LET’S CREATE<br />
          SOMETHING <span>REAL.</span>
        </h2>

<a className="contact-link" href="mailto:palakaneja2@gmail.com">
  GET IN TOUCH <ArrowUpRight size={20} />
</a>

        <p className="contact-note">
          Available for 3D modeling and environment design opportunities.
        </p>
      </section>

      <footer className="site-footer">
        <a className="logo" href="#home">
          PALAK ANEJA<span>®</span>
        </a>
        <span>3D ARTIST PORTFOLIO</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
