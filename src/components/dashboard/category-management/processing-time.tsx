"use client";

import { FromInput } from "@/components/reusable/form-input";
import Form from "@/components/reusable/from";
import TextEditor from "@/components/reusable/text-editor";
import { Button } from "@/components/ui";
import BackButton from "@/components/ui/back-button";
import CategorySvg from "@/components/ui/category-svg";
import { DB_delete_Icon, Delete_cc_icon } from "@/icon";
import { add_service_second_step_include_sc, add_service_second_step_processing_time_sc } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DeleteIcon } from "lucide-react";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const ProcessingTime = () => {
  const [content, setContent] = useState<string>("");

  const form = useForm({
    resolver: zodResolver(add_service_second_step_processing_time_sc),
    defaultValues: {
      details: "",
      time: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
    console.log(content);
  };

  return (
      <div className="">
        <h1 className="py-1 font-semibold">ProcessingTime</h1>
        <div className="border rounded-lg p-4">
          <Form className="space-y-5 " from={form} onSubmit={handleSubmit}>
            {/* details */}
            <FromInput
              className="h-11 bg-secondary"
              name="details"
              placeholder="Please write down the details..."
              label="Details"
            />
            {/* price */}
            <FromInput
              className="h-11 bg-secondary"
              name="time"
              type="time"
              placeholder="Please enter the time..."
              label="time"
            />

            <div className="flex justify-center mt-8">
              <Button className="bg-transparent border text-primary font-semibold w-full h-11">
                Add
              </Button>
            </div>
          </Form>

          {/* Preview */}
          <div className="mt-10">
            <h1 className="text-gray-400 py-2">Preview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* card one */}
              <div className="bg-secondary rounded-lg space-y-3 p-4">
                <p className="text-gray-500">
                  This is our handling fee for managing your Police Clearance
                  application from start to finish.
                </p>
                <h2 className="font-semibold">15-20 working days</h2>
                <Button className="bg-white h-11 rounded w-full">
                  <DB_delete_Icon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProcessingTime;
