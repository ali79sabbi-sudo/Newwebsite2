import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, postBySlug } from "@/data/blog";
import { services } from "@/data/services";
import { breadcrumbLd, buildMetadata, faqLd, graph, webPageLd, ORG_ID } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RichText } from "@/components/RichText";
import { FaqList } from "@/components/Faq";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaBand } from "@/components/CtaBand";

export const dynamicParams = false;
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = postBySlug(slug);
  if (!p) return {};
  return buildMetadata({ title: p.metaTitle, description: p.metaDescription, path: `/blog/${p.slug}/`, image: p.image, type: "article", publishedTime: p.published, modifiedTime: p.updated });
}

const fmt = (d: string) => new Date(d + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = postBySlug(slug);
  if (!p) notFound();
  const path = `/blog/${p.slug}/`;
  const crumbs = [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }, { name: p.title, path }];
  const article = {
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(path)}#article`,
    headline: p.title,
    description: p.metaDescription,
    image: absoluteUrl(p.image.src),
    datePublished: p.published,
    dateModified: p.updated,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@id": `${absoluteUrl(path)}#webpage` },
    inLanguage: "en-PK",
  };
  const nodes: object[] = [webPageLd({ path, name: p.metaTitle, description: p.metaDescription, image: p.image }), breadcrumbLd(crumbs), article];
  if (p.faqs?.length) nodes.push(faqLd(p.faqs, path));
  const related = p.relatedServices.map((s) => services.find((x) => x.slug === s)!).filter(Boolean);
  const others = posts.filter((x) => x.slug !== p.slug);

  return (
    <>
      <JsonLd data={graph(...nodes)} />
      <article>
        <header className="container-lux pt-10 lg:pt-14">
          <Breadcrumbs crumbs={crumbs} tone="dark" />
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="eyebrow">Wellness journal</p>
            <h1 className="mt-4 text-[2.4rem] leading-[1.08] sm:text-5xl lg:text-6xl">{p.title}</h1>
            <p className="mt-5 text-sm text-stone">
              By the TwincitySpa team · <time dateTime={p.published}>{fmt(p.published)}</time> · {p.readingMinutes} min read
            </p>
          </div>
          <div className="gold-frame relative mx-auto mt-10 aspect-[16/9] max-w-5xl overflow-hidden rounded-[2rem] shadow-lift">
            <Image src={p.image.src} alt={p.image.alt} fill preload fetchPriority="high" quality={70} sizes="(min-width:1280px) 1024px, 100vw" className="object-cover" />
          </div>
        </header>
        <div className="container-lux py-14 lg:py-20">
          <div className="prose-lux mx-auto max-w-3xl text-[1.1rem]">
            <p className="font-serif text-[1.6rem] leading-snug text-forest">{p.excerpt}</p>
            {p.sections.map((s) => (
              <section key={s.heading}>
                <h2><RichText text={s.heading} /></h2>
                {s.body.map((b, i) => <p key={i} className="mt-4"><RichText text={b} /></p>)}
                {s.list && (
                  <ul className="mt-4">
                    {s.list.map((li) => <li key={li}><RichText text={li} /></li>)}
                  </ul>
                )}
              </section>
            ))}
            <p className="placeholder-note mt-10">This article is general information, not medical advice. Please consult a qualified health professional about any medical condition.</p>
          </div>
          {p.faqs?.length ? (
            <section className="mx-auto mt-16 max-w-3xl" aria-labelledby="post-faq">
              <h2 id="post-faq" className="mb-6 text-4xl">Quick answers</h2>
              <FaqList items={p.faqs} />
            </section>
          ) : null}
        </div>
      </article>

      <section className="bg-cream/60 py-16 lg:py-20" aria-labelledby="rel">
        <div className="container-lux">
          <h2 id="rel" className="text-4xl">Treatments mentioned in this article</h2>
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
          <h2 className="mt-16 text-3xl">More from the blog</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {others.map((o) => (
              <li key={o.slug}><Link href={`/blog/${o.slug}/`} className="card-lux block p-6 font-serif text-2xl text-forest hover:text-gold-deep">{o.title}</Link></li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
