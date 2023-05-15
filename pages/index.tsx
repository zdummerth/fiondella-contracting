import Head from "next/head";
import Image from "next/image";
import SupabaseImage from "@/components/SupabaseImage";

import Link from "next/link";
import content from "@/content/pages";
import { Nunito } from "next/font/google";
const pageData = content.index;
import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
const font = Nunito({ weight: ["400", "600"], subsets: ["latin"] });

const textclassname = "text-lg lg:text-xl";
const herotextspan = "hidden lg:block lg:text-left lg:mb-4";

export default function Home() {
  return (
    <>
      <Head>
        <title>{pageData.seo.title}</title>
        <meta name="description" content={pageData.seo.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`min-h-screen max-w-[2500px] m-auto ${font.className}`}>
        <div className="relative flex justify-center items-center max-h-screen overflow-hidden">
          <div className="absolute z-10 text-center min-w-3/4 rounded p-4">
            <h2 className="text-4xl md:text-5xl mb-6 text-white text-shadow-dark-lg lg:text-6xl lg:mb-12">
              {/* {pageData.sections.hero.headline} */}
              <span className="lg:hidden">
                {pageData.sections.hero.headline}
              </span>
              <span className={herotextspan}>Transform</span>
              <span className={herotextspan}>Your</span>
              <span className={herotextspan}>Outdoor</span>
              <span className={herotextspan}>Space</span>
            </h2>
            <Link
              href="#contact"
              className="bg-white text-black p-3 rounded-full shadow-black shadow-xl hover:shadow-white hover:text-white hover:bg-stone-900 transition-all duration-300"
            >
              {pageData.sections.hero.cta}
            </Link>
          </div>
          <Image
            src={pageData.sections.hero.image.src}
            alt="Hero image of backyard living space"
            placeholder="blur"
          />
        </div>

        <div className="bg-emerald-300 px-4 py-16">
          <div className="max-w-[600px] mx-auto flex flex-col items-center">
            <h1 className="text-4xl text-center font-semibold lg:text-6xl">
              {pageData.sections.text.heading}
            </h1>
            <SupabaseImage
              src={pageData.sections.text.image}
              alt="picket fence logo"
              width={250}
              height={250}
              className="my-6"
            />
            <p className={textclassname}>{pageData.sections.text.p}</p>
          </div>
        </div>
        <div className="flex flex-col items-center my-8 max-w-[1200px] mx-auto">
          {pageData.sections.services.list.map((s: any, ind: number) => {
            return (
              <div
                key={s.name}
                className={`flex-1 my-10 lg:flex lg:items-center ${
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
                  <h4 className="text-4xl text-center font-semibold mb-6 lg:text-5xl">
                    {s.name}
                  </h4>
                  <p className={textclassname}>{s.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div
          id="contact"
          className="bg-emerald-300 px-4 py-8 flex flex-col items-center"
        >
          <h3 className="text-3xl text-center font-semibold mb-2">
            Contact Us
          </h3>
          <div className="w-full max-w-lg">
            <ContactForm />
          </div>
        </div>
        <div id="gallery" className="p-2 rounded my-4">
          <h3 className="text-3xl text-center font-semibold text-emerald-800 mb-2">
            Project Gallery
          </h3>
          <Gallery />
        </div>
        <Footer />
      </main>
    </>
  );
}
