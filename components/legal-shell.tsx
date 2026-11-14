import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import NavMenu from "@/components/navMenu";

export default function LegalShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavMenu />
      <main id="main-content" className="legal-page">
        <div className="legal-width">
          <Link className="legal-back" href="/">
            <ArrowLeft size={15} /> Back to Binary Fiction
          </Link>
          <div className="legal-document">{children}</div>
          <footer className="legal-footer">
            <Link href="/privacyPolicy/">Privacy Policy</Link>
            <Link href="/termsOfService/">Terms of Service</Link>
          </footer>
        </div>
      </main>
    </>
  );
}
