import React, { useState, useRef, useEffect } from "react";
import SupabaseImage from "@/components/SupabaseImage";
import X from "@/components/icons/X";
import ChevronRight from "@/components/icons/ChevronRight";
import ChevronLeft from "@/components/icons/ChevronLeft";

const galeryFileNames = [
  "d1.jpg",
  "d2.jpg",
  "d3.jpg",
  "d4.jpg",
  "d5.jpg",
  "d6.jpg",
  "d7.jpg",
  "d8.jpg",
  "d9.jpg",
  "d10.jpg",
  "d11.jpg",
  "d13.jpg",
  "d14.jpg",
  "d15.jpg",
  "d16.jpg",
  "d17.jpg",
  "d18.jpg",
  "p1.jpg",
  "f1.jpg",
  "f2.jpg",
  "f3.webp",
  "3.jpg",
  "2.jpg",
  "10.jpg",
  "5.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

const Thumbnail = ({ image, setCurrentImage, currentImage }: any) => {
  const isSelected = image === currentImage;
  const ref = useRef<any>();
  useEffect(() => {
    if (isSelected) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }, [isSelected]);
  return (
    <button
      onClick={() => setCurrentImage(image)}
      key={image}
      id={image}
      className={`relative w-8 h-8 flex-shrink-0 rounded-full overflow-hidden`}
      ref={ref}
    >
      <SupabaseImage
        src={image}
        alt="gallery thumbnail"
        fill
        sizes="(max-width: 768px) 10vw,
          (max-width: 1200px) 4vw"
        className="object-cover"
      />
      {!isSelected && (
        <div className="absolute w-full h-full left-0 top-0 bg-black/75" />
      )}
    </button>
  );
};

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState<any>(null);
  const handleImageClick = (filename: string) => {
    const img = galeryFileNames.find((img) => img === filename);
    setCurrentImage(img);
  };

  const getNextImage = () => {
    const index = galeryFileNames.findIndex((img) => img === currentImage);
    const isLast = index === galeryFileNames.length - 1;
    return galeryFileNames[isLast ? 0 : index + 1];
  };

  const getPrevImage = () => {
    const index = galeryFileNames.findIndex((img) => img === currentImage);
    const isFirst = index === 0;
    return galeryFileNames[isFirst ? galeryFileNames.length - 1 : index - 1];
  };

  const handleImageNext = () => setCurrentImage(getNextImage());
  const handleImagePrev = () => setCurrentImage(getPrevImage());

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
      {galeryFileNames.map((image: any) => (
        <button
          onClick={() => handleImageClick(image)}
          key={image}
          id={image}
          className="bg-black"
        >
          <SupabaseImage
            src={image}
            alt="gallery images"
            width={400}
            height={400}
          />
        </button>
      ))}
      <div
        className={`${
          currentImage
            ? "fixed z-20 top-0 left-0 w-screen h-screen bg-black flex flex-col"
            : "hidden"
        }`}
      >
        <div className="relative flex-1 flex flex-col w-screen">
          {galeryFileNames.map((image: any) => {
            return (
              <SupabaseImage
                key={image}
                src={image}
                alt="gallery image"
                fill
                priority={image === currentImage}
                sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 60vw"
                className={`object-contain transition-all duration-500 ${
                  image === currentImage ? "opacity-1" : "opacity-0"
                }`}
              />
            );
          })}
          <div className="absolute self-center bottom-5 z-10 text-white bg-black/80 rounded-full p-2 flex items-center">
            <button className="" onClick={handleImagePrev}>
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button className="mx-4" onClick={() => setCurrentImage(null)}>
              <X className="w-8 h-8" />
            </button>
            <button className="" onClick={handleImageNext}>
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
        <div className="flex overflow-x-auto md:justify-center gap-1 my-2 mx-2">
          {galeryFileNames.map((image: any) => {
            return (
              <Thumbnail
                image={image}
                key={image}
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
