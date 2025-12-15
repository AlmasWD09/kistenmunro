"use client";

import { Button } from "@/components/ui/button";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FromInput } from "@/components/reusable/form-input";
import Form from "@/components/reusable/from";
import { BillingIcon_cc, CVCIcon, ScreenCardIcon } from "@/icon";
import Link from "next/link";
import { billing_sc } from "@/lib/schema";
import Image from "next/image";
import { useState } from "react";
import assets from "@/assets";

const BillingInfoPage = () => {
  const [saveCard, setSaveCard] = useState(false);

  const from = useForm({
    resolver: zodResolver(billing_sc),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      address: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center md:pt-[35px] xl:pt-[48px]">
      <div className="container px-4 space-y-3 xl:px-60">
        <div className="flex justify-center items-center md:pb-8">
          <BillingIcon_cc />
        </div>

        <div>
          <Form className="space-y-4 pt-8" from={from} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* name */}
              <FromInput
                className="h-11 bg-secondary"
                name="name"
                placeholder="Your full name goes here"
                label="Your full name"
              />

              {/* phone number */}
              <FromInput
                className="h-11 bg-secondary"
                name="phone_number"
                placeholder="Your phone number"
                label="Phone number"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* address */}
              <FromInput
                className="h-11 bg-secondary"
                name="address"
                placeholder="Your address"
                label="Your address"
              />

              {/* email */}
              <FromInput
                className="h-11 bg-secondary"
                name="email"
                placeholder="Your email address"
                label="Email address"
              />
            </div>

            {/* payment card */}
            <div className="mt-8">
              <div className="border rounded-figma-sm p-4">
                {/* Header */}
                <div className="flex items-center justify-between ">
                  <h2 className="text-lg sm:text-xl font-bold pb-1">
                    Payment method
                  </h2>
                  <h2 className="underline underline-offset-2 text-lg sm:text-xl font-bold pb-1">
                    Manage
                  </h2>
                </div>

                {/* Card Information Section */}
                <div className="border border-gray-300 rounded-lg overflow-hidden mb-6">
                  {/* Card Number Field */}
                  <div className="border-b border-gray-300">
                    <div className="flex items-center justify-between px-4">
                      <input
                        type="text"
                        placeholder="Card information"
                        className="flex-1 text-base outline-none"
                      />
                      <div className="flex gap-2 ml-4">
                        <Image
                          src={assets.paymentCard}
                          alt="photo"
                          width={40}
                          height={40}
                          className="w-[50px] h-[50px]  object-contain rounded-md"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Expiry and CVC Fields */}
                  <div className="flex">
                    <div className="flex-1 border-r border-gray-300 p-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full text-base outline-none"
                      />
                    </div>
                    <div className="flex-1 p-4 flex items-center justify-between">
                      <input
                        type="text"
                        placeholder="CVC"
                        className="flex-1 text-base outline-none"
                      />
                      <CVCIcon />
                    </div>
                  </div>
                </div>

                {/* Billing Address Section */}
                <h3 className="text-lg sm:text-xl font-normal text-gray-700 mb-2">
                  Billing address
                </h3>

                <div className="border border-gray-300 rounded-lg overflow-hidden mb-6">
                  {/* Country Field */}
                  <div className="border-b border-gray-300 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">
                          Country or region
                        </p>
                        <p className="text-base font-medium">United States</p>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* ZIP Field */}
                  <div className="p-4">
                    <input
                      type="text"
                      placeholder="ZIP"
                      className="w-full text-base outline-none"
                    />
                  </div>
                </div>

                {/* Save Card Checkbox */}
                <div className="flex items-center gap-3 mb-6">
                  <input
                    type="checkbox"
                    id="saveCard"
                    checked={saveCard}
                    onChange={(e) => setSaveCard(e.target.checked)}
                    className="w-5 h-5 border-2 border-gray-300 rounded cursor-pointer"
                  />
                  <label
                    htmlFor="saveCard"
                    className="text-base text-gray-700 cursor-pointer"
                  >
                    Save this card for future payment
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end pb-6">
              <Link href={'/place-order'}>
                <Button icon={true} className="rounded-full px-8 py-3 text-lg">
                  Next
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BillingInfoPage;
