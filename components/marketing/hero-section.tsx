import { TextEffect } from "@/components/ui/text-effect";
import { SOCIAL_LINKS } from "@/constants/links";
import Image from "next/image";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import Link from "next/link";

export default function HeroSectionTwo() {
  return (
    <>
      <main className="overflow-hidden bg-background">
        <div
          aria-hidden
          className="absolute inset-0 isolate opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <Wrapper>
          <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
            />

            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <Container>
                  <div className="relative isolate mx-auto w-max rounded-full">
                    {/* Gradient border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-neutral-700 to-neutral-900 p-[1px]" />

                    {/* Inner pill */}
                    <div className="relative rounded-full bg-[#181818]/60 px-2 py-1.5">
                      <p className="text-sm text-white">Full Stack Developer</p>
                    </div>
                  </div>
                </Container>

                {/* PROFILE IMAGE */}
                <Container>
                  <div className="relative mx-auto mt-8 h-32 w-32 md:h-40 md:w-40">
                    <Image
                      src="/profileImg.jpg"
                      alt="Suhas Choppala"
                      fill
                      priority
                      className="rounded-lg object-cover ring-2 ring-white/10 shadow-lg"
                    />
                  </div>
                </Container>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mx-auto mt-8 max-w-4xl text-balance !leading-[1.25] text-center text-4xl md:text-5xl font-semibold tracking-tight"
                >
                  Hi, I'm
                </TextEffect>
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mx-auto mt-4 max-w-4xl text-balance !leading-[1.25] text-center text-5xl md:text-6xl font-semibold tracking-tight"
                >
                  Suhas Choppala
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground text-lg"
                >
                  Crafting exceptional digital experiences with modern
                  technologies and pixel-perfect design.
                </TextEffect>

                <Container className="mt-4 flex flex-col items-center justify-center gap-2 md:flex-row">
                  <div className="mt-4 flex justify-center gap-4 lg:justify-start">
                    {SOCIAL_LINKS.map(({ name, link, icon: Icon }) => (
                      <Link
                        key={name}
                        href={link}
                        target={name !== "mail" ? "_blank" : undefined}
                        className="p-2 text-muted-foreground transition hover:text-foreground"
                      >
                        <Icon size={20} />
                      </Link>
                    ))}
                  </div>
                </Container>
              </div>
            </div>
          </div>
        </Wrapper>
      </main>
    </>
  );
}
