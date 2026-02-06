import { Navbar } from "@/components/marketing/navbar";
import { NAV_LINKS } from "@/constants/links";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full grow relative">
      {children}
      <Navbar navItems={NAV_LINKS} />
    </main>
  );
}
