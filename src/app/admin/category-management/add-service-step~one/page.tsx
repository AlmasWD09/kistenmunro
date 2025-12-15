"use client";

import { FromInput } from "@/components/reusable/form-input";
import Form from "@/components/reusable/from";
import TextEditor from "@/components/reusable/text-editor";
import { Button } from "@/components/ui";
import BackButton from "@/components/ui/back-button";
import CategorySvg from "@/components/ui/category-svg";
import { add_service_first_step_sc } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const AddServiceStepOne = () => {
  const router = useRouter();
  const [content, setContent] = useState<string>("");

  const form = useForm({
    resolver: zodResolver(add_service_first_step_sc),
    defaultValues: {
      title: "",
      sub_title: "",
      price: "",
      orderType: [] as string[],
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
    console.log(content);
    console.log("Order types selected:", values.orderType);
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
          <CategorySvg filePath={"/svgImages/step-one.svg"} />
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

      <Form className="space-y-5 mt-16" from={form} onSubmit={handleSubmit}>
        <div className="mb-6">
          <h1 className="font-semibold pb-2">Select Order Type*</h1>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                value="quote"
                {...form.register("orderType")}
                className="shrink-0 w-5 4 h-5 rounded-figma-sm border-gray-300 focus:ring-0 cursor-pointer"
              />
              <p className="">Quote</p>
            </div>

            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                value="checkout"
                {...form.register("orderType")}
                className="shrink-0 w-5 4 h-5 rounded-figma-sm border-gray-300 focus:ring-0 cursor-pointer"
              />
              <p className="">Checkout</p>
            </div>
          </div>
        </div>
        {/* title */}
        <FromInput
          className="h-11 bg-secondary"
          name="title"
          placeholder="Please enter the service title name..."
          label="Title"
        />
        {/* sub title */}
        <FromInput
          className="h-11 bg-secondary"
          name="sub_title"
          placeholder="Please enter the service subtitle name..."
          label="Subtitle"
        />
        {/* price */}
        <FromInput
          className="h-11 bg-secondary"
          name="price"
          type="price"
          placeholder="Please enter the price..."
          label="Price"
        />
        {/* description */}
        <div className="">
          <TextEditor
            value={content}
            onChange={setContent}
            className="border rounded-lg p-2"
          />
        </div>

        <div className="flex justify-center mt-20">
          <Link href={"/admin/category-management/add-service-step~two"}>
          <Button className="bg-primary w-full lg:w-0 h-12 lg:px-40 xl:px-80">
            Done
          </Button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default AddServiceStepOne;
