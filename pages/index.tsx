import Head from "next/head";
import Image from "next/image";
import SupabaseImage from "@/components/SupabaseImage";

import Link from "next/link";
import content from "@/content/pages";
import { Inter } from "next/font/google";
const pageData = content.index;
import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>{pageData.seo.title}</title>
        <meta name="description" content={pageData.seo.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`min-h-screen max-w-[1200px] m-auto ${inter.className}`}>
        <div className="relative flex justify-center items-center h-96 max-h-screen overflow-hidden">
          <div className="absolute z-10 text-center min-w-3/4 rounded p-4">
            <h2 className="text-3xl mb-4 text-white text-shadow-dark-lg">
              {pageData.sections.hero.headline}
            </h2>
            <Link
              href="#contact"
              className="bg-white text-black p-3 rounded-full"
            >
              {pageData.sections.hero.cta}
            </Link>
          </div>
          <SupabaseImage
            src={pageData.sections.hero.image.filename}
            alt="Hero image of backyard living space"
            fill
            className="object-cover"
          />
        </div>

        <div className="bg-emerald-300 px-4 py-16">
          <div className="max-w-[600px] mx-auto flex flex-col items-center">
            <h1 className="text-4xl text-center font-semibold">
              {pageData.sections.text.heading}
            </h1>
            <SupabaseImage
              src={pageData.sections.text.image}
              alt="picket fence logo"
              width={150}
              height={150}
              className="my-6"
            />
            <p>{pageData.sections.text.p}</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          {pageData.sections.services.list.map((s: any, ind: number) => {
            return (
              <div
                key={s.name}
                className={`flex-1 lg:flex lg:items-center ${
                  ind % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <Image
                  src={s.image.src}
                  alt="Hero image of backyard living space"
                  height={600}
                  width={600}
                  placeholder="blur"
                  className="mx-auto"
                />
                <div className="px-4 py-8 max-w-[600px]">
                  <h4 className="text-3xl text-center font-semibold text-emerald-800 mb-2">
                    {s.name}
                  </h4>
                  <p className="">{s.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="bg-slate-300 px-4 py-8">
          <h3 className="text-3xl text-center font-semibold text-emerald-800 mb-2">
            {pageData.sections.testimonials.title}
          </h3>
          <div className="flex flex-col px-4 mt-6 gap-8">
            {pageData.sections.testimonials.list.map((s: any) => {
              return (
                <div key={s.name} className="">
                  <p className="mb-2">{s.quote}</p>
                  <p className="font-semibold text-emerald-800 mb-2">
                    -{s.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div> */}
        <div
          id="contact"
          className="bg-slate-300 px-4 py-8 flex flex-col items-center"
        >
          <h3 className="text-3xl text-center font-semibold text-emerald-800 mb-2">
            Contact Us
          </h3>
          <div className="w-full max-w-lg">
            <ContactForm />
          </div>
        </div>
        <div
          id="gallery"
          className="p-2 rounded my-4 shadow-md shadow-emerald-500"
        >
          <h3 className="text-3xl text-center font-semibold text-emerald-800 mb-2">
            Project Gallery
          </h3>
          <Gallery />
        </div>
      </main>
    </>
  );
}
