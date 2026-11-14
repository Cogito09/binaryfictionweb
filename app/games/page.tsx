import Link from "next/link";

// Retain the old URL while keeping all projects on the main scroll page.
export default function Games() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/#games" />
      <main className="legal-width">
        <h1>Our games have a new home.</h1>
        <Link className="text-link" href="/#games">
          Explore the game collection →
        </Link>
      </main>
    </>
  );
}
