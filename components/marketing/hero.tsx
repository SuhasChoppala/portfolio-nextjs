"use client";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/constants/links";

export default function HeroSection() {
  return (
    <main>
      <section className="overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center">
            {/* Text */}
            <div className="text-center lg:w-1/2 lg:text-left">
              <div className="mx-auto w-fit rounded border px-3 py-1 lg:mx-0">
                <h3 className="text-sm">Full Stack Developer</h3>
              </div>

              <h1 className="mt-4 text-lg md:text-4xl mb-4">Suhas Choppala</h1>

              <p className="mt-4 text-base text-muted-foreground">
                Crafting exceptional digital experiences with modern
                technologies and pixel-perfect design.
              </p>

              <div className="mt-4 flex justify-center gap-4 lg:justify-start">
                {SOCIAL_LINKS.map(({ name, link, icon: Icon }) => (
                  <a
                    key={name}
                    href={link}
                    target={name !== "mail" ? "_blank" : undefined}
                    rel={name !== "mail" ? "noopener noreferrer" : undefined}
                    aria-label={name}
                    className="p-2 text-muted-foreground transition hover:text-foreground"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative h-[160px] w-[160px]">
                <Image
                  src="/profileImg.jpg"
                  alt="Suhas Choppala"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
