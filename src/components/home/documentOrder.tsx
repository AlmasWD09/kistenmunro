import { Button } from "@/components/ui";
import { ServiceArrorIcon } from "@/icon";
import Link from "next/link";
import CustomBtn from "../ui/custom-btn";
import { ImgBox } from "../reusable/Img-box";

function StartingDocument() {
  return (
    <div className="pt-[48px] xl:pt-[148px] mb-10 md:mb-0">
      <div className="container px-4">
        <div
          className="hidden h-auto xl:h-[380px] mb-10 md:flex items-center rounded-2xl relative overflow-hidden"
          style={{
            backgroundImage: "url('/images/documentPhoto1.png')",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative z-10 p-4 md:p-8 xl:p-20 space-y-2 md:space-y-4 md:w-[80%] xl:w-[68%] ">
            <h1 className="text-primary font-bold text-base xl:text-[36px]">
              Time is Precious. We Handle the Paperwork.
            </h1>
            <div className="relative">
              <p className="w-full md:max-w-[400px] lg:max-w-[570px] xl:w-full">
                Streamlining your SA documents with a smooth, efficient, and
                reliable process that cuts through delays and removes every
                trace of government hassle.
              </p>
            </div>

            <CustomBtn
              text="Start Your Document Order"
              icon={<ServiceArrorIcon className="w-6 h-6 xl:w-8 xl:h-8" />}
              showIcon={true}
            />
          </div>
        </div>

        {/* MOBILE DEVICE */}
        <div className="md:hidden bg-[#94c9eb] p-4 rounded-figma-sm">
          <div className="">
            <div className="space-y-3">
              <h1 className="text-primary font-bold text-base text-[20px]">
                Time is Precious. We Handle the Paperwork.
              </h1>
              <div className="">
                <p className="w-full text-sm md:max-w-[400px] lg:max-w-[570px] xl:w-full">
                  Streamlining your SA documents with a smooth, efficient, and
                  reliable process that cuts through delays and removes every
                  trace of government hassle.
                </p>
              </div>

              <CustomBtn
                text="Start Your Document Order"
                icon={<ServiceArrorIcon className="w-6 h-6 xl:w-8 xl:h-8" />}
                showIcon={true}
              />
            </div>

            <div className="w-[200px] h-[250px] mt-8">
              <ImgBox
                src={"/images/sm_contactPhoto.png"}
                alt="photo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartingDocument;
