import type { Metadata } from "next";
import LegalShell from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Terms of Service — Binary Fiction",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LegalShell>{children}</LegalShell>;
}
