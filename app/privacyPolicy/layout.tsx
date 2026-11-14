import type { Metadata } from "next";
import LegalShell from "@/components/legal-shell";

export const metadata: Metadata = { title: "Privacy Policy — Binary Fiction" };

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LegalShell>{children}</LegalShell>;
}
