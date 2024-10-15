import { Carousel } from "@material-tailwind/react";

interface Props {
  images: string[];
}

const CarouselComp: React.FC<Props> = ({ images }) => {
  return (
    <Carousel
      className="rounded-xl"
      autoplay
      loop
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slider ${index + 1}`}
          className="size-full object-cover"
        />
      ))}
    </Carousel>
  );
};

export default CarouselComp;
