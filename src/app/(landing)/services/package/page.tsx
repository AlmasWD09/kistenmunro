
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import SearchBox2 from "@/components/reusable/search-box2";
import { Button } from "@/components/ui";
import Link from "next/link";

const pccData = [
  {
    id: 1,
    title: "PCC (Police Clearance NZ/AU/CA)",
    price: "R290.00",
    perDocument: "Per document",
    description:
      "Police clearance for client in SA : PCC needed for use in: Australia , New Zealand and Canada - no Apostille or Authentication needed",
    features: [
      "Submit your PCC application to the SAPS Criminal Record Centre (CRC)",
      "Track and follow up on your application until completion",
      "Collect and scan your certificate for you to verify",
      "Courier the original certificate to you (if selected)",
    ],
  },
  {
    id: 2,
    title: "PCC (Police Clearance NZ/AU/CA)",
    price: "R290.00",
    perDocument: "Per document",
    description:
      "Police clearance for client in SA : PCC needed for use in: Australia , New Zealand and Canada - no Apostille or Authentication needed",
    features: [
      "Submit your PCC application to the SAPS Criminal Record Centre (CRC)",
      "Track and follow up on your application until completion",
      "Collect and scan your certificate for you to verify",
      "Courier the original certificate to you (if selected)",
    ],
  },
  {
    id: 3,
    title: "PCC (Police Clearance NZ/AU/CA)",
    price: "R290.00",
    perDocument: "Per document",
    description:
      "Police clearance for client in SA : PCC needed for use in: Australia , New Zealand and Canada - no Apostille or Authentication needed",
    features: [
      "Submit your PCC application to the SAPS Criminal Record Centre (CRC)",
      "Track and follow up on your application until completion",
      "Collect and scan your certificate for you to verify",
      "Courier the original certificate to you (if selected)",
    ],
  },
  {
    id: 4,
    title: "PCC (Police Clearance NZ/AU/CA)",
    price: "R290.00",
    perDocument: "Per document",
    description:
      "Police clearance for client in SA : PCC needed for use in: Australia , New Zealand and Canada - no Apostille or Authentication needed",
    features: [
      "Submit your PCC application to the SAPS Criminal Record Centre (CRC)",
      "Track and follow up on your application until completion",
      "Collect and scan your certificate for you to verify",
      "Courier the original certificate to you (if selected)",
    ],
  },
  {
    id: 5,
    title: "PCC (Police Clearance NZ/AU/CA)",
    price: "R290.00",
    perDocument: "Per document",
    description:
      "Police clearance for client in SA : PCC needed for use in: Australia , New Zealand and Canada - no Apostille or Authentication needed",
    features: [
      "Submit your PCC application to the SAPS Criminal Record Centre (CRC)",
      "Track and follow up on your application until completion",
      "Collect and scan your certificate for you to verify",
      "Courier the original certificate to you (if selected)",
    ],
  },
  {
    id: 6,
    title: "PCC (Police Clearance NZ/AU/CA)",
    price: "R290.00",
    perDocument: "Per document",
    description:
      "Police clearance for client in SA : PCC needed for use in: Australia , New Zealand and Canada - no Apostille or Authentication needed",
    features: [
      "Submit your PCC application to the SAPS Criminal Record Centre (CRC)",
      "Track and follow up on your application until completion",
      "Collect and scan your certificate for you to verify",
      "Courier the original certificate to you (if selected)",
    ],
  },
  {
    id: 7,
    title: "PCC (Police Clearance NZ/AU/CA)",
    price: "R290.00",
    perDocument: "Per document",
    description:
      "Police clearance for client in SA : PCC needed for use in: Australia , New Zealand and Canada - no Apostille or Authentication needed",
    features: [
      "Submit your PCC application to the SAPS Criminal Record Centre (CRC)",
      "Track and follow up on your application until completion",
      "Collect and scan your certificate for you to verify",
      "Courier the original certificate to you (if selected)",
    ],
  },
  {
    id: 8,
    title: "PCC (Police Clearance NZ/AU/CA)",
    price: "R290.00",
    perDocument: "Per document",
    description:
      "Police clearance for client in SA : PCC needed for use in: Australia , New Zealand and Canada - no Apostille or Authentication needed",
    features: [
      "Submit your PCC application to the SAPS Criminal Record Centre (CRC)",
      "Track and follow up on your application until completion",
      "Collect and scan your certificate for you to verify",
      "Courier the original certificate to you (if selected)",
    ],
  },
];

const ServicePackage = () => {
  return (
    <div className=" max-w-7xl mx-auto border rounded-figma-sm! p-4">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-10 gap-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Police Clearance
          </h1>
          <p className="text-gray-600 mt-1">{pccData.length} services</p>
        </div>
        <div className="lg:w-[60%]">
          <SearchBox2 />
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[FreeMode, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        freeMode={{ enabled: true, momentum: false }}
        breakpoints={{
          // Mobile
          640: {
            slidesPerView: 1.3,
            spaceBetween: 0,
            centeredSlides: true,
          },
          // Tablet
          768: {
            slidesPerView: 2.2,
            spaceBetween: 20,
            centeredSlides: false,
          },
          // Desktop
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
            centeredSlides: false,
            loop: true,
          },
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 28,
          },
        }}
        className="mySwiper"
      >
        {pccData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-secondary rounded-2xl overflow-hidden flex flex-col h-full border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
              {/* Card Header */}
              <div className="p-4 xl:p-6 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {item.title}
                </h3>
                <div className="mt-4">
                  <span className="text-xl xl:text-3xl font-bold text-gray-900">
                    {item.price}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.perDocument}
                  </p>
                </div>

                <Link href={"/services/details"}>
                  <Button
                    size="lg"
                    className="w-full rounded-full mt-5 py-4 xl:py-6 text-base font-medium"
                  >
                    See Details
                  </Button>
                </Link>
              </div>

              {/* Card Body */}
              <div className="px-6 pb-6 flex-1 flex flex-col">
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                <div className="border-b border-gray-200 my-5"></div>

                <ul className="space-y-3 flex-1">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-left">
                      <span className="text-primary font-bold mr-3 mt-0.5">
                        •
                      </span>
                      <span className="text-sm text-gray-700 leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicePackage;
