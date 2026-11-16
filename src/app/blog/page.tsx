import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { breadcrumbLd, buildMetadata, graph, webPageLd } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { posts } from "@/data/blog";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand } from "@/components/CtaBand";

const path = "/blog/";
const title = "Massage & Wellness Blog | TwincitySpa Rawalpindi";
const description =
  "Helpful, honest guides on massage and wellbeing from TwincitySpa in Bahria Town: benefits of massage, Thai vs Swedish, and choosing the right treatment.";
export const metadata = buildMetadata({ title, description, path, image: images.aromatherapyMassageCalmStudio });

const crumbs = [{ name: "Home", path: "/" }, { name: "Blog", path }];
const fmt = (d: string) => new Date(d + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function BlogIndex() {
  const blogLd = {
    "@type": "Blog",
    name: "TwincitySpa Massage & Wellness Blog",
    url: absoluteUrl(path),
    blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: absoluteUrl(`/blog/${p.slug}/`), datePublished: p.published })),
  };
  return (
    <>
      <JsonLd data={graph(webPageLd({ path, name: title, description, type: "CollectionPage" }), breadcrumbLd(crumbs), blogLd)} />
      <PageHero image={images.aromatherapyMassageCalmStudio} eyebrow="Journal" title="Massage and Wellness Blog" crumbs={crumbs} lead={<p>Clear, honest guides to help you choose and enjoy your treatments — no exaggerated claims.</p>} />
      <section className="py-14 lg:py-20">
        <div className="container-lux grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="card-lux gold-inset group flex flex-col">
              <Link href={`/blog/${p.slug}/`} className="relative block aspect-[16/10] overflow-hidden rounded-t-[calc(1.25rem-2px)]" tabIndex={-1} aria-hidden>
                <Image src={p.image.src} alt={p.image.alt} fill quality={70} sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              </Link>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs uppercase tracking-[0.18em] text-gold-deep"><time dateTime={p.published}>{fmt(p.published)}</time> · {p.readingMinutes} min read</p>
                <h2 className="mt-3 text-[1.75rem]"><Link href={`/blog/${p.slug}/`} className="hover:text-gold-deep">{p.title}</Link></h2>
                <p className="mt-3 flex-1 text-stone">{p.excerpt}</p>
                <Link href={`/blog/${p.slug}/`} className="mt-6 text-sm font-semibold uppercase tracking-wider text-forest hover:text-gold-deep">Read article<span className="sr-only">: {p.title}</span> →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
