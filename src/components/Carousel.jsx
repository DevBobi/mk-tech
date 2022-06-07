import React from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 2,
};

const Carousel = () => {
  return (
    <div className="container mx-auto h-full drop-shadow-lg py-10">
      <Slider draggable {...settings} className="py-20">
        <div className="py-10 px-3">
          <div className="shadow-xl p-4 rounded-xl">
            <div className="flex border border-dashed border-orange rounded-xl shadow-md">
              <div class=" w-2/3 py-2 px-4">
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
              <div className="p-1">
                <h3 className="py-2">Title 1</h3>
                <h3 className="pt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 px-3">
          <div className="shadow-xl p-4 rounded-xl">
            <div className="flex border border-dashed border-orange rounded-xl shadow-md">
              <div class=" w-2/3 py-2 px-4">
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
              <div className="p-1">
                <h3 className="py-2">Title 1</h3>
                <h3 className="pt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 px-3">
          <div className="shadow-xl p-4 rounded-xl">
            <div className="flex border border-dashed border-orange rounded-xl shadow-md">
              <div class=" w-2/3 py-2 px-4">
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
              <div className="p-1">
                <h3 className="py-2">Title 1</h3>
                <h3 className="pt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
