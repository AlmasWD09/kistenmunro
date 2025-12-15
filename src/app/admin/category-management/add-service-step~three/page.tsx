"use client";

import DeliveryDetails from "@/components/dashboard/category-management/delivery-details";
import Questionaries from "@/components/dashboard/category-management/questionaries";
import RequiredDocument from "@/components/dashboard/category-management/required-document";
import { Button } from "@/components/ui";
import BackButton from "@/components/ui/back-button";
import CategorySvg from "@/components/ui/category-svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AddServiceStepThree = () => {
  const router = useRouter();

  return (
    <div>
      <BackButton
        text="Back"
        onClick={() => router.back()}
        className="text-lg py-2 px-4 rounded-lg "
      />

      {/* work progress */}
      <div>
        <div className="w-[68%] mx-auto mt-8">
          <CategorySvg filePath={"/svgImages/step-three.svg"} />
        </div>

        <div className="grid grid-cols-3 place-items-center">
          <div>
            <Image
              src={"/textPhoto/photo1.png"}
              alt="photo"
              width={500}
              height={500}
              className="w-[100px]"
            />
          </div>
          <div>
            <Image
              src={"/textPhoto/photo2.png"}
              alt="photo"
              width={500}
              height={500}
              className="w-[100px] "
            />
          </div>
          <div className="">
            <Image
              src={"/textPhoto/photo3.png"}
              alt="photo"
              width={500}
              height={500}
              className="w-[100px]"
            />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div>
          <DeliveryDetails />
        </div>
        <div>
          <Questionaries />
        </div>
        <div>
          <RequiredDocument />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center space-y-4 mt-20">
        <Button
          onClick={() =>
            router.push("/admin/category-management/add-service-step~three")
          }
          className="bg-primary w-full lg:w-0 h-12 lg:px-40 xl:px-80"
        >
          Done
        </Button>

        <Button
          onClick={() =>
            router.push("/admin/category-management/add-service-step~two")
          }
          className="bg-secondary text-gray-500 w-full lg:w-0 h-12 lg:px-40 xl:px-80"
        >
          Start Over
        </Button>
      </div>
    </div>
  );
};

export default AddServiceStepThree;
