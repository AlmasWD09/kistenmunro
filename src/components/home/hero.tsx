"use client";

import { ImgBox } from "../reusable/Img-box";
import photo1 from "@/assets/heroImage.png";
import AvatarGroupMaxAvatarDemo from "./avatarGroup";
import { useState } from "react";
import SearchBox2 from "../reusable/search-box2";
import { ServiceArrorIcon } from "@/icon";
import Link from "next/link";
import CustomBtn from "../ui/custom-btn";

const HeroSection = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-[35px] xl:pt-[48px]">
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2">
            <AvatarGroupMaxAvatarDemo />
            <span className="">400+ trusted users</span>
          </div>

          <div className="hidden md:block">
            <h1 className="flex items-center justify-center  xl:text-[42px]  font-bold text-gray-900  ">
              Secure Your Future. Fast. Effortless International
              <span className="md:px-2">
                <ImgBox
                  src={photo1}
                  alt="photo"
                  className="w-[20px] h-[10px] md:w-[40px] md:h-[20px] lg:w-[80px] lg:h-[40px] rounded-full"
                />
              </span>
              Document Services.
            </h1>
          </div>

          {/* samall device */}
          <div className="md:hidden">
            <div className="flex items-center">
              <h1 className="text-[16px] font-semibold">
                Secure Your Future. Fast. Effortless International
                <ImgBox
                  src={photo1}
                  alt="photo"
                  className="w-[40px] h-[20px] rounded align-middle inline-block mx-1"
                />
                Document Services.
              </h1>
            </div>
          </div>

          <div className="md:text-center text-base  text-gray-600 leading-relaxed">
            <p>
              For South African emigrants and global citizens, DocAssist is the
              open solution for navigating bureaucracy. We meticulously handle
              everything—from essential Police Clearances and official Birth
            </p>
            <p>
              Certificates to complex Marriage Documents and necessary
              Attestations. Our new platform is fast, error-free, and
              internationally compliant. Secure your future, quickly
            </p>
            <p>
              and confidently, with a platform designed for modern life and
              global mobility.
            </p>
          </div>

          <div>
            <div className="w-full max-w-4xl mx-auto my-2">
              <SearchBox2 />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            {/* BUTTON COMPONENT  */}
            <CustomBtn
              text="Start Your Document Order"
              icon={<ServiceArrorIcon className="w-6 h-6 xl:w-8 xl:h-8" />}
              showIcon={true}
            />
            <Link href={"/custom-qoute-request"}>
              <CustomBtn
                text="Request a quote"
                icon={<ServiceArrorIcon className="w-6 h-6 xl:w-8 xl:h-8" />}
                showIcon={true}
                className="bg-transparent text-primary! font-semibold! border"
                iconContainerClassName={`bg-[#F5F5F7]!`}
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
