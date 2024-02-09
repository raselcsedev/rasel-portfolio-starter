export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/fitclub.jpg",
        },
        {
          title: "title",
          path: "/rmhardware.jpg",
        },
        {
          title: "title",
          path: "/electricengineering.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: "title",
    //       path: "/thumb4.jpg",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb1.jpg",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb2.jpg",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb3.jpg",
    //     },
    //   ],
    // },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={{ Pagination }}
      className=""
    >
      {workSlider?.slides?.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide?.images?.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group "
                  >
                    <div className=" flex items-center justify-center relative overflow-hidden group">
                      <Image src={image.path} width={500} height={300} alt="" />
                      <div className=" absolute inset-0 bg-gradient-to-l from-transparent via-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 "></div>
                      <div className=" absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 ">
                        <div className=" flex items-center gap-x-2 text-[13px] tracking-[0.2em] ">
                          <div className="delay-100">LIVE</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 ">
                            PROJECT
                          </div>
                          <div className=" text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 ">
                            {" "}
                            <BsArrowRight />{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> */}
            <div className="grid xl:grid-cols-2 xl:grid-rows-2 gap-4 cursor-pointer">
              <div className="relative rounded-lg overflow-hidden flex items-center justify-center group ">
                <div className=" flex items-center rounded-lg justify-center relative overflow-hidden group">
                  <Image src="/fitclub.jpg" width={500} height={300} alt="" />
                  <div className=" absolute inset-0 bg-gradient-to-l from-transparent via-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 "></div>
                  <div className=" absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 ">
                    <div className=" flex items-center gap-x-2 text-[13px] tracking-[0.2em] ">
                      <Link
                        target="_blank"
                        href={"https://fit-club-starter-zeta.vercel.app/"}
                      >
                        <div className="delay-100 hover:text-accent">LIVE</div>
                      </Link>
                      <Link  target="_blank"
                        href={"https://github.com/raselcsedev/fitClub-starter"}
                        className="flex items-center hover:text-accent gap-x-2 text-[13px] tracking-[0.2em]"
                        >
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 ">
                        PROJECT
                      </div>
                      <div className=" text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 ">
                        {" "}
                        <BsArrowRight />{" "}
                      </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden flex items-center justify-center group ">
                <div className=" flex items-center rounded-lg justify-center relative overflow-hidden group">
                  <Image src="/rmhardware.jpg" width={500} height={300} alt="" />
                  <div className=" absolute inset-0 bg-gradient-to-l from-transparent via-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 "></div>
                  <div className=" absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 ">
                    <div className=" flex items-center gap-x-2 text-[13px] tracking-[0.2em] ">
                      <Link
                        target="_blank"
                        href={"https://rm-hardware-technology.web.app/"}
                      >
                        <div className="delay-100 hover:text-accent">LIVE</div>
                      </Link>
                      <Link  target="_blank"
                        href={"https://github.com/raselcsedev/rm-hardware-technology"}
                        className="flex items-center gap-x-2 hover:text-accent text-[13px] tracking-[0.2em]"
                        >
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 ">
                        PROJECT
                      </div>
                      <div className=" text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 ">
                        {" "}
                        <BsArrowRight />{" "}
                      </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden flex items-center justify-center group ">
                <div className=" flex items-center rounded-lg justify-center relative overflow-hidden group">
                  <Image src="/electricengineering.jpg" width={500} height={300} alt="" />
                  <div className=" absolute inset-0 bg-gradient-to-l from-transparent via-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 "></div>
                  <div className=" absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 ">
                    <div className=" flex items-center gap-x-2 text-[13px] tracking-[0.2em] ">
                      <Link
                        target="_blank"
                        href={"https://electronics-warehouse-cea0b.web.app/"}
                      >
                        <div className="delay-100 hover:text-accent">LIVE</div>
                      </Link>
                      <Link  target="_blank"
                        href={"https://github.com/raselcsedev/electronics-engineering-warehouse"}
                        className="flex items-center gap-x-2 text-[13px] hover:text-accent tracking-[0.2em]"
                        >
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 ">
                        PROJECT
                      </div>
                      <div className=" text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 ">
                        {" "}
                        <BsArrowRight />{" "}
                      </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden flex items-center justify-center group ">
                <div className=" flex items-center rounded-lg justify-center relative overflow-hidden group">
                  <Image src="/sportsphotography.jpg" width={500} height={300} alt="" />
                  <div className=" absolute inset-0 bg-gradient-to-l from-transparent via-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 "></div>
                  <div className=" absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 ">
                    <div className=" flex items-center gap-x-2 text-[13px] tracking-[0.2em] ">
                      <Link
                        target="_blank"
                        href={"https://preview-sports-photography.web.app/"}
                      >
                        <div className="delay-100 hover:text-accent">LIVE</div>
                      </Link>
                      <Link  target="_blank"
                        href={"https://github.com/raselcsedev/sports-photography"}
                        className="flex items-center gap-x-2 text-[13px] hover:text-accent tracking-[0.2em]"
                        >
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 ">
                        PROJECT
                      </div>
                      <div className=" text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 ">
                        {" "}
                        <BsArrowRight />{" "}
                      </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
