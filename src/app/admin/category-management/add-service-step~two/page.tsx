"use client";

import IncludeService from "@/components/dashboard/category-management/include-service";
import ProcessingTime from "@/components/dashboard/category-management/processing-time";
import { FromInput } from "@/components/reusable/form-input";
import Form from "@/components/reusable/from";
import TextEditor from "@/components/reusable/text-editor";
import { Button } from "@/components/ui";
import BackButton from "@/components/ui/back-button";
import CategorySvg from "@/components/ui/category-svg";
import { DB_delete_Icon, Delete_cc_icon } from "@/icon";
import { add_service_second_step_include_sc } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DeleteIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const AddServiceStepTwo = () => {
  const router = useRouter();
  const [content, setContent] = useState<string>("");

  const form = useForm({
    resolver: zodResolver(add_service_second_step_include_sc),
    defaultValues: {
      service_type: "",
      details: "",
      price: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
    console.log(content);
  };

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
          <CategorySvg filePath={"/svgImages/step-two.svg"} />
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
        <div className="">
          <IncludeService />
        </div>
        <div className="mt-10">
          <ProcessingTime />
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
          Back to step 1
        </Button>
      </div>
    </div>
  );
};

export default AddServiceStepTwo;
