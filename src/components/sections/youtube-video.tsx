import { Reveal } from "#components/reveal";

export function YoutubeVideo() {
  return (
    <section className="wrapper border-t px-5 py-14 sm:px-10 sm:py-24 md:tick-left md:tick-right">
      <Reveal className="flex flex-col items-center gap-10">
        <h2 className="max-w-2xl text-center text-3xl font-medium tracking-tight text-balance sm:text-5xl">
          Keycloakify from the point of view of a React developer
        </h2>
        {/* YouTube needs both scripts and same-origin, a sandbox would add nothing here */}
        {/* oxlint-disable-next-line react/iframe-missing-sandbox */}
        <iframe
          src="https://www.youtube.com/embed/BPAayGPmQZI?si=oM4tzn4vEszwW8Ye"
          title="Keycloakify from the point of view of a React developer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="aspect-video w-full max-w-5xl rounded-xl border shadow-lg"
        />
      </Reveal>
    </section>
  );
}
