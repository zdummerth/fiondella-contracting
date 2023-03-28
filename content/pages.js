import heroImg from "public/bg-large.webp";
import fenceSectionImg from "public/fenceservice.jpg";
import deckSectionImg from "public/deckservice.jpg";

export default {
  index: {
    seo: {
      title: "Outdoors By Chaz",
      description:
        "Looking for a reliable and experienced construction company for your fencing and decking needs in St. Louis, Missouri? We specialize in crafting high quality fences and decks using only the best materials and techniques. From traditional wooden fences to modern composite decks, we have the expertise to bring your vision to life.",
    },
    sections: {
      hero: {
        headline: "Transform Your Outdoor Space",
        subheading:
          "Transform your outdoor space with our stunning fencing and decking solutions",
        cta: "Schedule Your Consultation Today",
        image: {
          src: heroImg,
          filename: "bg-large.webp",
        },
      },
      text: {
        heading: "Outdoors By Chaz",
        image: "picketfencelogo-circle.png",
        p: "At Outdoors By Chaz, we are passionate about creating beautiful and functional outdoor spaces for our clients in St. Louis, Missouri. We believe that fences and decks should not only provide security and privacy, but also enhance the beauty and value of your property.",
      },
      services: {
        overview: "",
        benefits: "",
        title: "Our Services",
        list: [
          {
            name: "Fencing",
            image: {
              src: fenceSectionImg,
            },
            description: `We offer a variety of fence styles, including wooden, vinyl, and aluminum. We can install traditional picket or privacy fences, or create a custom design to fit your unique vision. We will guide you through the process of selecting the best materials, colors, and styles to match your home's architecture and surroundings.`,
          },
          {
            name: "Decks",
            image: {
              src: deckSectionImg,
            },
            description: `We believe that your deck should be an extension of your home, and a place where you can relax and entertain guests. Our deck building process includes consultation, design, and construction to ensure that the end result is exactly what you envisioned. We use high-quality materials to create a durable and beautiful deck that will last for years to come.`,
          },
        ],
      },
      about: {
        content: "",
      },
      testimonials: {
        overview: "",
        title: "Testimonials",
        list: [
          { name: "John Doe", quote: "This was great" },
          { name: "Jane Smith", quote: "This was wonderful" },
        ],
      },
      gallery: {
        heading: "Explore Our Projects",
        images: [],
      },
      contact: {},
    },
  },
};
