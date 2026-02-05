"use client";

export default function HeroSection() {
  return (
    <>
      <main>
        <section className="overflow-hidden">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-20">
            <div className="lg:flex lg:items-center">
              <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <div className="rounded-(--radius) bg-primary-foreground mx-auto flex w-fit items-center gap-2 border p-1 lg:ml-0">
                  <h3 className="text-sm">Full Stack Developer</h3>
                </div>

                <h1 className="mt-4 text-balance !leading-[1.25] tracking-tight text-4xl font-semibold md:text-5xl xl:text-5xl">
                  Suhas Choppala
                </h1>
                <p className="mt-2 text-base text-muted-foreground">
                  Crafting exceptional digital experiences with modern
                  technologies and pixel-perfect design.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
