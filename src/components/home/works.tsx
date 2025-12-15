// components/HowItWorks.tsx
import React from "react";
import SubTitle from "../reusable/title";
import { StaticImageData } from "next/image";
import workLeftPhoto1 from "@/assets/works/work-left1.png";
import workLeftPhoto2 from "@/assets/works/work-left2.png";
import workLeftPhoto3 from "@/assets/works/work-left3.png";
import workLeftPhoto4 from "@/assets/works/work-left4.png";
import workLeftPhoto5 from "@/assets/works/work-left5.png";

// right side image
import workRightPhoto1 from "@/assets/works/work-right1.png";
import workRightPhoto2 from "@/assets/works/work-right2.png";
import workRightPhoto3 from "@/assets/works/work-right3.png";
import workRightPhoto4 from "@/assets/works/work-right4.png";
import workRightPhoto5 from "@/assets/works/work-right5.png";
import { ImgBox } from "../reusable/Img-box";

interface Step {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  image2: StaticImageData;
}

const Works: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Select Your Service",
      description:
        "Browse our clear service catalog. Choose direct purchase for common documents (like certificates) or select complex services requiring a custom consultation.",
      image: workLeftPhoto1,
      image2: workRightPhoto1,
    },
    {
      id: 2,
      title: "Place Order or Request Quote",
      description:
        "For direct purchases, use our secure custom checkout. For complex requests (like specialized attestation), fill out a quick form to get your tailored quote fast.",
      image: workLeftPhoto2,
      image2: workRightPhoto2,
    },
    {
      id: 3,
      title: "Submit Your Documents",
      description:
        "Follow the simple, clear instructions provided to securely upload or send us the required supporting documents for processing.",
      image: workLeftPhoto3,
      image2: workRightPhoto3,
    },
    {
      id: 4,
      title: "Processing & Attestation Issued",
      description:
        "Our expert team validates your documents, manages the entire submission process with the relevant authorities, and ensures your apostille or necessary legal certification is correctly issued.",
      image: workLeftPhoto4,
      image2: workRightPhoto4,
    },
    {
      id: 5,
      title: "Receive Your Certified Document",
      description:
        "Your final, certified document is promptly delivered to you, ready for international use, stress-free.",
      image: workLeftPhoto5,
      image2: workRightPhoto5,
    },
  ];

  return (
    <section className="container px-4 pt-[35px] xl:pt-[148px]">
      <div className="">
        {/* Header */}
        <div className="pb-10">
          <SubTitle svg={false} text="How It Works" />
        </div>

        {/* Steps Container */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="group relative bg-secondary rounded-figma-sm!  transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 lg:p-8">
                <div>
                  <ImgBox
                    src={step.image}
                    alt="photo"
                    className="w-16 h-16 sm:w-20 sm:h-20"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 ">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Number */}
                <div>
                  <ImgBox
                    src={step.image2}
                    alt="photo"
                    className="w-16 h-16 "
                  />
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent  rounded-2xl transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <button className="px-8 py-4  text-white font-semibold rounded-xl ">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Works;
