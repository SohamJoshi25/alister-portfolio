import Image from "next/image";

export default function HomePage() {
  return (
    <main className="text-neutral-900">
      
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 pt-28 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Text */}
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Alister Augustine
            </h1>

            <p className="mt-4 text-lg md:text-xl text-neutral-600">
              Storyteller · Journalist · Narrative Thinker
            </p>

            <p className="mt-8 text-lg leading-relaxed text-neutral-800">
              I believe in the power of honest words and meaningful narratives.
              My journey has moved through newsrooms, broadcast media,
              advertising, and creative communication — shaping how I observe
              people, places, and everyday realities.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-start md:justify-end">
            <Image
              src="/alister.png"
              alt="Portrait of Alister Augustine"
              width={384}
              height={480}
              className="rounded-sm object-cover grayscale"
              priority
            />
          </div>
        </div>
      </section>

    </main>
  );
}
