import Image from "next/image";
import { ListChecks, Bookmark, Clock, Search, Music } from "lucide-react";

export default function NikkaLibrary() {
  const features = [
    {
      icon: ListChecks,
      text: "Guarda en ‘Quiero ver’, ‘Viendo’, ‘Visto’ o estados personalizados.",
    },
    {
      icon: Bookmark,
      text: "Añade notas y favoritos a tus episodios.",
    },
    {
      icon: Clock,
      text: "Registra hasta qué episodio/minuto llegaste y reanuda fácilmente.",
    },
    {
      icon: Search,
      text: "Encuentra rápido por tipo, tags, estado o puntuación.",
    },
    {
      icon: Music,
      text: "Añade momentos, fragmentos o canciones que te marcaron.",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-white flex items-center justify-center p-6">
      <main className="w-full max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-10">
        <header className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-500">
                <code className="font-bold">Nikka Library</code>
              </span>
            </h1>

            <p className="mt-3 text-sm sm:text-base text-slate-700 max-w-lg mx-auto md:mx-0 font-medium">
              Una bitacora digital para organiza tus series, episodios y momentos favoritos. Guarda
              estados, añade notas, y reanuda donde te quedaste.
            </p>

            <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
              <span className="inline-flex items-center gap-2 text-xs text-slate-600">
                <span
                  className="flex-none w-2 h-2 rounded-full bg-violet-700 animate-pulse"
                  aria-hidden="true"
                />
                <span className="sr-only">Estado:</span>
                <span className="text-lg font-semibold">Coming Soon</span>
              </span>
            </div>
          </div>

          <figure className="flex-none w-full md:w-80 rounded-lg overflow-hidden bg-slate-100">
            <Image
              src="/mejor.png"
              alt="Vista previa de Nikka Library — interfaz de usuario con lista de episodios"
              width={720}
              height={600}
              priority
              sizes="(max-width: 768px) 90vw, 320px"
              className="object-cover w-full h-48 md:h-56"
            />
            <figcaption className="sr-only">
              Imagen representativa de la app Nikka Library
            </figcaption>
          </figure>
        </header>

        <section className="mt-8 md:mt-10">
          <h2 className="sr-only">Características principales</h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-800 font-medium">
            {features.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="flex-none mt-1">
                  {/* Icono accesible: aria-hidden porque el texto ya describe la feature */}
                  <Icon
                    className="w-5 h-5 text-violet-600"
                    aria-hidden="true"
                  />
                </span>
                <span className="text-sm leading-6">{text}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-8 border-t pt-4 text-xs text-slate-500">
          <p>
            Diseñado con ♥ para organizar tu experiencia de ver series y vídeos.
          </p>
        </footer>
      </main>
    </div>
  );
}
