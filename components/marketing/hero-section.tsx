import { TextEffect } from "@/components/ui/text-effect";
import { SOCIAL_LINKS } from "@/constants/links";
import Image from "next/image";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import Link from "next/link";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";

export default function HeroSection() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <ShootingStars />
      <StarsBackground />
      <Wrapper>
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
              <Container>
                <div className="mx-auto w-max rounded-full bg-card px-3 py-1.5 border">
                  <p className="text-sm text-card-foreground">
                    Full Stack Developer
                  </p>
                </div>
              </Container>

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
                className="mx-auto mt-8 max-w-4xl text-balance text-center text-4xl md:text-5xl font-semibold tracking-tight text-foreground"
              >
                Hi, I'm
              </TextEffect>

              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="mx-auto mt-4 max-w-4xl text-balance text-center text-5xl md:text-6xl font-semibold tracking-tight text-foreground"
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
                <div className="mt-4 flex justify-center gap-4">
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
  );
}
