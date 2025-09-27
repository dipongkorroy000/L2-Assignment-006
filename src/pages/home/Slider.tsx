import sliderImage1 from "@/assets/images/deliveryHero.jpg";
import sliderImage2 from "@/assets/images/statusUpdate.jpg";
import sliderImage3 from "@/assets/images/flexiblePayment.jpg";
import { useEffect, useState } from "react";

const images = [
  sliderImage1,
  sliderImage2,
  sliderImage3,
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-md">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-64 object-cover transition-all duration-700 ease-in-out"
      />
    </div>
  );
};

export default Slider;

