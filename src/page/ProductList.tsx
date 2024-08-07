import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useLazyGetAllProductsQuery } from "../lib/redux/feature/products/productApi";

const DotButton: React.FC<{ selected: boolean; onClick: () => void }> = ({
  selected,
  onClick,
}) => (
  <button
    className={`embla__dot${selected ? " embla__dot--selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);

const ProductList: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [getAllProductsQuery, { isFetching, data: products }] =
    useLazyGetAllProductsQuery();

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const getAllProduct = useCallback(() => {
    getAllProductsQuery();
  }, [getAllProductsQuery]);

  useEffect(() => {
    getAllProduct();
  }, []);

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
    } else {
      emblaApi.scrollTo(0);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = setInterval(autoplay, 4000); // Autoplay every 4 seconds
    return () => clearInterval(intervalId);
  }, [emblaApi, autoplay]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Product Page</h1>

      {/* <div className="embla__controls mt-4">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div> */}
      {/* Product Slider using Embla Carousel */}
      <div className="overflow-hidden mb-12 " ref={emblaRef}>
        <div className=" embla__container">
          {products?.map((product: Product) => (
            <div
              key={product.product_id}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-2"
            >
              <div className="bg-white rounded-lg shadow-md p-4 embla__slide">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4"
                />
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product: Product) => (
          <div
            key={product.product_id}
            className="bg-white rounded-lg shadow-md p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mb-4">
              {product.description.slice(0, 100)}...
            </p>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
