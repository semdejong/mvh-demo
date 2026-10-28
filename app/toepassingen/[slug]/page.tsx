import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { content, getApplication } from "@/content";
import { photoBySrc, photosByCategory } from "@/lib/photos";
import PageIntro from "@/components/site/PageIntro";
import { CtaRow } from "@/components/site/Marks";
import Gallery from "@/components/media/Gallery";
import YoutubeFacade from "@/components/media/YoutubeFacade";

export function generateStaticParams() {
  return content.applications.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const app = getApplication(slug);
  if (!app) return { title: "Toepassing" };
  return { title: app.h1, description: app.description };
}

export default async function ApplicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getApplication(slug);
  if (!app) notFound();

  const gallery = app.category === "plugs" ? [] : photosByCategory(app.category);
  const example = photoBySrc("/img/vrije-vorm/vrije-vorm-01.jpg");
  const plugVideo = content.videos.find((video) => video.title === "Plug");
  const poster = plugVideo ? photoBySrc(plugVideo.poster) : undefined;
  const others = content.applications.filter((item) => item.slug !== app.slug);

  return (
    <>
      <PageIntro kicker={app.short} title={app.h1} lede={app.paragraphs[0]}>
        {app.paragraphs.slice(1).map((paragraph) => (
          <p key={paragraph} className="measure">
            {paragraph}
          </p>
        ))}
        <CtaRow />
      </PageIntro>

      <section data-section="galerij" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker" data-toolpath-node>
              FOTO
            </p>
            <div>
              <h2 className="display">Werk uit de werkplaats</h2>
              {app.slug === "plugs" ? (
                <div className="grid gap-6 mt-4">
                  <p className="measure">
                    Er zijn geen plugfoto’s op de huidige site. De video Plug laadt pas na een klik. De foto eronder is een voorbeeld van vrij gefreesd werk, geen plug.
                  </p>
                  {plugVideo && poster ? <YoutubeFacade videoId={plugVideo.id} title={plugVideo.title} poster={poster} /> : null}
                  {example ? (
                    <figure className="m-0 max-w-[420px]">
                      <Image
                        src={example.src}
                        alt={example.alt}
                        width={example.w}
                        height={example.h}
                        sizes="420px"
                        className="w-full h-auto border border-navy"
                        style={{ maxWidth: example.w }}
                      />
                      <figcaption className="caption">
                        Voorbeeld van vrij gefreesd werk, geen plug. {example.alt}
                      </figcaption>
                    </figure>
                  ) : null}
                </div>
              ) : (
                <div className="mt-4">
                  <Gallery photos={gallery} label={`Foto’s ${app.title}`} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section data-section="meer" className="section">
        <div className="wrap">
          <div className="section-grid">
            <p className="kicker">VERDER</p>
            <div>
              <h2 className="display">Andere toepassingen</h2>
              <ul className="index-list mt-4">
                {others.map((item) => (
                  <li key={item.slug} className="index-row">
                    <Link href={`/toepassingen/${item.slug}`}>
                      <span>
                        <strong>{item.title}</strong>
                        <p>{item.summary}</p>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CtaRow />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
