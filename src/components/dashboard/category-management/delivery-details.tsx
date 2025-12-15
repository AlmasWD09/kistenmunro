"use client";

import { FromInput } from "@/components/reusable/form-input";
import Form from "@/components/reusable/from";
import { Button } from "@/components/ui";

import { DB_delete_Icon } from "@/icon";
import { add_service_three_step_delivery_details_sc } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";

const DeliveryDetails = () => {
  const form = useForm({
    resolver: zodResolver(add_service_three_step_delivery_details_sc),
    defaultValues: {
      delivery_type: "",
      details: "",
      price: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
  };

  return (
    <div>
      <div className="">
        <h1 className="py-1 font-semibold">Delivery Details</h1>
        <div className="border rounded-lg p-4">
          <Form className="space-y-5 " from={form} onSubmit={handleSubmit}>
            {/* delivery type */}
            <FromInput
              className="h-11 bg-secondary"
              name="delivery_type"
              placeholder="Please enter the delivery type name..."
              label="Delivery Type"
            />
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
              name="price"
              type="price"
              placeholder="Please enter the price..."
              label="Price"
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
                <h1 className="font-semibold ">Scan & Email Copy Only</h1>
                <p className="text-gray-500">
                  You’ll receive a scanned copy of your certificate by email.
                </p>
                <h2 className="font-semibold">Free (R0.00)</h2>
                <Button className="bg-white h-11 rounded w-full">
                  <DB_delete_Icon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
