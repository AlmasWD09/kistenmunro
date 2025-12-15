import { ServiceArrorIcon } from "@/icon";
import photo1 from "@/assets/doc1.png";
import photo2 from "@/assets/doc2.png";
import photo3 from "@/assets/doc3.png";
import photo4 from "@/assets/doc4.png";
import { ImgBox } from "../reusable/Img-box";
import CustomBtn from "../ui/custom-btn";

const DocumentOrder = () => {
  return (
    <div className="container px-4 pt-[35px] xl:pt-[148px]">
      <div className="flex flex-col xl:flex-row gap-10">
        <div className="xl:w-[45%]  ">
          <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-3 gap-2 h-[400px]">
            {/* Box 1 */}
            <div className="md:col-start-1 md:col-end-7 md:row-span-2 flex items-center justify-center">
              <ImgBox
                src={photo1}
                alt="photo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Box 2 */}
            <div className="md:col-start-7 md:col-end-13 flex items-center justify-center">
              <ImgBox
                src={photo2}
                alt="photo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Box 3 */}
            <div className="md:col-start-7 md:col-end-13 row-span-2 flex items-center justify-center">
              <ImgBox
                src={photo3}
                alt="photo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Box 4 */}
            <div className="md:col-start-1 md:col-end-7 flex items-center justify-center">
              <ImgBox
                src={photo4}
                alt="photo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-5 ">
          <h1 className="text-[20px] lg:text-[28px] font-bold">
            Tired of the Paperwork Nightmare? We Handle the Red Tape.
          </h1>
          <div className="">
            <div className="">
              <p>
                We know how frustrating, time-consuming, and confusing getting
                official documents for emigration or
              </p>
              <p>
                international use can be. DocAssist simplifies the process,
                cutting down wait times and eliminating errors so you
              </p>
              <p>can focus on your move.</p>
            </div>
          </div>
          <div>
            <h1 className=" lg:text-[20px] font-bold">Key features</h1>
          </div>

          <div className="">
            <ul className="list-disc list-inside">
              <li className="">
                <span className="font-bold">Fast Turnaround:</span> Quicker than
                navigating government offices yourself.
              </li>
              <li className="">
                <span className="font-bold">Zero Errors:</span> Expert checking
                guarantees acceptance the first time.
              </li>
              <li className="">
                <span className="font-bold">Global Acceptance:</span> Documents
                processed to meet all international standards.
              </li>
            </ul>
          </div>

          <div>
            <CustomBtn
              text="Start Your Document Order"
              icon={<ServiceArrorIcon className="w-6 h-6 xl:w-8 xl:h-8" />}
              showIcon={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentOrder;
