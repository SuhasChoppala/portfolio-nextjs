import { Navbar } from "@/components/marketing/navbar";
import { NAV_LINKS } from "@/constants/links";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full grow relative pb-10 md:pb-0 md:pt-24">
      <Navbar navItems={NAV_LINKS} />
      {children}
    </main>
  );
}
