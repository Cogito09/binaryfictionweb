import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/studio-art";

export default function NavMenu() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="page-width header-inner">
          <Link
            href="/#home"
            className="brand"
            aria-label="Binary Fiction home"
          >
            <BrandMark />
            <span>
              BINARY
              <br />
              FICTION<span className="brand-period">.</span>
            </span>
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/#games">Games</Link>
            <Link href="/#capabilities">What we do</Link>
            <Link href="/#collaborators" className="nav-collaborators">
              Collaborators <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
