// icons
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";

// data
export const serviceData = [
  // {
  //   icon: <RxCrop />,
  //   title: "Branding",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
  {
    icon: <RxPencil2 />,
    title: "Web Design",
    description:
      "I am responsible for creating the design a website. I can create a brand new website and update an already existing site.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Responsible for coding, modifying websites from layout to function and according to clients specifications.",
  },
  // {
  //   icon: <RxReader />,
  //   title: "Copywriting",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
  // {
  //   icon: <RxRocket />,
  //   title: "SEO",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={{ FreeMode, Pagination }}
      className="xl:h-[340px] sm:h-[240px]"
    >
      {serviceData?.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded xl:px-6 sm:px-3 xl:py-8 sm:py-4 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
              <div className="flex items-center gap-2">
                <span className="xl:text-4xl sm:text-2xl text-accent mb-4">{item.icon}</span>
                <span className="mb-2 text-lg ">{item.title}</span>
              </div>
              <div className="xl:mb-8 sm:mb-2">
                {/* <div className="mb-2 text-lg ">{item.title}</div> */}
                <p className="loading-normal ">
                  {item.description}
                </p>
              </div>
              <div className="xl:text-3xl sm:text-xl rounded">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300 " />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
