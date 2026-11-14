import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Diamond,
  Sparkles,
} from "lucide-react";
import NavMenu from "@/components/navMenu";
import GameProgress from "@/components/game-progress";
import { BrandMark, CubeWorld, HeroSculpture } from "@/components/studio-art";
import { collaborator, games, hero, services } from "@/lib/site-content";

export default function Home() {
  return (
    <>
      <NavMenu />
      <main id="main-content">
        <section
          className="hero section-dark"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="page-width hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" /> Independent minds. Infinite
                possibilities.
              </p>
              <h1 id="hero-title">
                Worlds worth
                <br />
                <em>getting lost in.</em>
              </h1>
              <p className="hero-description">{hero.description}</p>
              <a className="button button-mint" href="#games">
                Explore our games <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="visual-coordinate coordinate-top">
                BF / WORLD BUILDING
              </div>
              <HeroSculpture />
              <div className="visual-coordinate coordinate-bottom">
                <span className="small-cross">+</span> A little code. A whole
                new world.
              </div>
            </div>
          </div>
          <div className="page-width hero-bottom">
            <p>
              Dream big. <span>Move with purpose.</span>
            </p>
            <a href="#games">
              Scroll to discover <ArrowDown size={15} />
            </a>
            <span className="platforms">
              ANDROID <span>/</span> WEB <span>/</span> iOS
            </span>
          </div>
        </section>

        <section
          id="games"
          className="work-section"
          aria-labelledby="games-title"
        >
          <div className="page-width section-heading">
            <div>
              <p className="eyebrow">01 — Selected work</p>
              <h2 id="games-title">
                Small team.
                <br />
                <em>Entire worlds.</em>
              </h2>
            </div>
            <p>
              From our own adventures to the next game we build together. Keep
              scrolling. There&apos;s more to play.
            </p>
          </div>
          <div className="page-width work-layout">
            <GameProgress
              games={games.map(({ id, title, category }) => ({
                id,
                title,
                category,
              }))}
            />
            <div className="game-chapters">
              {games.map((game, index) => (
                <article
                  id={game.id}
                  className={`game-chapter game-${game.kind}`}
                  key={game.id}
                  aria-labelledby={`${game.id}-title`}
                >
                  <div className="game-artwork">
                    <div className="artwork-topline">
                      <span>
                        {String(index + 1).padStart(2, "0")} / {game.category}
                      </span>
                      <span>{game.status}</span>
                    </div>
                    {game.kind === "original" ? (
                      <CubeWorld />
                    ) : (
                      <div className="casino-concept" aria-hidden="true">
                        <div className="casino-orbit" />
                        <span className="casino-spark spark-one">✦</span>
                        <span className="casino-spark spark-two">✦</span>
                        <div className="casino-reels">
                          <span>7</span>
                          <span>
                            <Diamond strokeWidth={1.2} />
                          </span>
                          <span>7</span>
                        </div>
                        <span className="casino-concept-label">
                          THE NEXT CHAPTER
                        </span>
                      </div>
                    )}
                    <div className="artwork-caption">
                      <span>{game.artworkCaption}</span>
                      <span aria-hidden="true">↗</span>
                    </div>
                  </div>
                  <div className="game-information">
                    <div className="game-title-block">
                      <p className="eyebrow">{game.overline}</p>
                      <h3 id={`${game.id}-title`}>
                        {game.title}
                        <span className="title-period">.</span>
                      </h3>
                      <div className="tags">
                        {game.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="game-description">
                      <p>{game.description}</p>
                      {game.storeUrl ? (
                        <a
                          className="text-link"
                          href={game.storeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on Google Play <ArrowUpRight size={18} />
                        </a>
                      ) : (
                        <a className="text-link" href="#capabilities">
                          What we can build together <ArrowDown size={18} />
                        </a>
                      )}
                      {game.releaseNotes && (
                        <details className="release-notes">
                          <summary>
                            Release notes <span>December 19, 2023</span>
                          </summary>
                          <ul>
                            {game.releaseNotes.map((note) => (
                              <li key={note}>{note}</li>
                            ))}
                          </ul>
                        </details>
                      )}
                    </div>
                  </div>
                  {index < games.length - 1 && (
                    <a
                      className="next-chapter"
                      href={`#${games[index + 1].id}`}
                    >
                      <span>There&apos;s another side to our story</span>
                      <span>
                        Next project <ArrowDown size={16} />
                      </span>
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="capabilities"
          className="capabilities-section section-dark"
          aria-labelledby="capabilities-title"
        >
          <div className="page-width capabilities-layout">
            <div className="capabilities-intro">
              <p className="eyebrow">02 — Beyond our own games</p>
              <h2 id="capabilities-title">
                Your vision.
                <br />
                Our <em>craft.</em>
              </h2>
              <p>
                We develop our own mobile games. We also help other teams bring
                theirs to life — from the systems behind the scenes to the
                stories on screen.
              </p>
              <span className="studio-note">
                <BrandMark /> Built with intention. Made to resonate.
              </span>
            </div>
            <div className="service-list">
              {services.map((service, index) => (
                <div className="service" key={service.title}>
                  <span className="service-number">0{index + 1}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <ArrowUpRight size={20} aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
          <div className="page-width studio-statement">
            <Sparkles size={19} aria-hidden="true" />
            <p>{hero.statement}</p>
            <span>THE BINARY FICTION WAY</span>
          </div>
        </section>

        <section
          id="collaborators"
          className="collaborators-section"
          aria-labelledby="collaborators-title"
        >
          <div className="page-width collaborators-layout">
            <div>
              <p className="eyebrow">03 — The people behind the pixels</p>
              <h2 id="collaborators-title">
                Independent.
                <br />
                <em>Better together.</em>
              </h2>
              <p className="collaborators-description">
                Binary Fiction is an independent developer&apos;s vision,
                brought further by creative collaboration. Good games come from
                people who care about the details.
              </p>
            </div>
            <div className="collaborator">
              <div className="artist-avatar" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="collaborator-information">
                <p className="eyebrow">Creative collaborator / Game artist</p>
                <h3>{collaborator.name}</h3>
                <p>{collaborator.description}</p>
                {collaborator.portfolioUrl ? (
                  <a
                    className="text-link"
                    href={collaborator.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View portfolio <ArrowUpRight size={17} />
                  </a>
                ) : (
                  <span className="portfolio-placeholder">
                    Portfolio coming soon{" "}
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        <footer className="site-footer section-dark">
          <div className="page-width">
            <div className="footer-top">
              <Link href="/#home" className="brand">
                <BrandMark />
                <span>
                  BINARY
                  <br />
                  FICTION<span className="brand-period">.</span>
                </span>
              </Link>
              <p>
                A little imagination.
                <br />
                <em>Infinite possibilities.</em>
              </p>
              <a href="#home" className="back-to-top" aria-label="Back to top">
                <ArrowRight size={21} />
              </a>
            </div>
            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} Binary Fiction</span>
              <span>Independent game development</span>
              <div>
                <Link href="/privacyPolicy/">Privacy Policy</Link>
                <Link href="/termsOfService/">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
