"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

type ProjectLink = { id: string; title: string; category: string };

export default function GameProgress({ games }: { games: ProjectLink[] }) {
  const [active, setActive] = useState(games[0]?.id);

  useEffect(() => {
    const chapters = games
      .map((game) => document.getElementById(game.id))
      .filter((element): element is HTMLElement => element !== null);
    let frame: number | null = null;
    const updateActive = () => {
      frame = null;
      const readingLine = window.innerHeight * 0.35;
      let current = chapters[0];
      for (const chapter of chapters) {
        if (chapter.getBoundingClientRect().top <= readingLine)
          current = chapter;
      }
      if (current) setActive(current.id);
    };
    // Read positions once per frame, including reverse and large scroll jumps.
    // Passive listeners leave native scrolling and anchor navigation intact.
    const scheduleUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateActive);
    };
    updateActive();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [games]);

  return (
    <aside className="game-progress">
      <nav aria-label="Game chapters">
        <p className="eyebrow">The collection</p>
        <ol>
          {games.map((game, index) => (
            <li key={game.id}>
              <a
                href={`#${game.id}`}
                aria-current={active === game.id ? "location" : undefined}
                onClick={() => setActive(game.id)}
              >
                <span className="progress-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="progress-copy">
                  <strong>{game.title}</strong>
                  <span>{game.category}</span>
                </span>
                <span className="progress-dot" />
              </a>
            </li>
          ))}
        </ol>
        <span className="progress-hint">
          Keep exploring <ArrowDown size={13} />
        </span>
      </nav>
    </aside>
  );
}
