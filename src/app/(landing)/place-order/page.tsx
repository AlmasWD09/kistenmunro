"use client";

import { useState } from "react";
import { X } from "lucide-react";
import {
  DateDB2Icon,
  DateDB2Icon2,
  FeedbackCheckIcon,
  OrderDetailsOneIcon_cc,
  OrderDetailsTwoIcon_cc,
  PlaceOrderIcon_cc,
} from "@/icon";
import { ImgBox } from "@/components/reusable/Img-box";
import assets from "@/assets";
import Link from "next/link";
import { Button } from "@/components/ui";
import Modal2 from "@/components/reusable/modal2";
import { useGlobalState } from "@/hooks";
import Lottie from "lottie-react";
import SubTitle from "@/components/reusable/title";
import checkboxAnimation from "@/animations/CheckboxAnimation.json";

const intState = {
  isDReq: false,
  isFedb: false,
};

const PlaceOrderPage = () => {
  const [deliveryReModal, setDeliveryReModal] = useGlobalState(intState);

  const [formData, setFormData] = useState({
    question1: "Yes",
    question2: "26",
    question3: "",
    question4: "Option 1",
  });

  // Checkbox states for terms
  const [terms, setTerms] = useState({
    confirmInfo: false,
    processingTime: false,
    feesSeparate: false,
    termsAndConditions: false,
  });

  // Check if all terms are accepted
  const allTermsAccepted = Object.values(terms).every(
    (value) => value === true
  );

  const handleTermChange = (key: keyof typeof terms) => {
    setTerms((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex items-center justify-center mb-10 md:mb-20 md:pt-[35px] xl:pt-[48px]">
      <div className="container px-4 space-y-3">
        <div className="flex justify-center items-center md:pb-8">
          <PlaceOrderIcon_cc />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Questions Section */}
          <div className="lg:col-span-1 bg-secondary p-4 rounded-figma-sm">
            <h2 className="text-lg font-semibold text-center border-b pb-3 mb-6">
              Questions
            </h2>

            {/* Question 1 */}
            <div className="mb-6">
              <label className="block text-sm mb-2">
                Question 1 <span className="text-black">*</span>
              </label>
              <p className="text-sm text-gray-700 mb-2">
                Are you a South African citizen?
              </p>
              <p className="text-sm font-semibold">{formData.question1}</p>
            </div>

            {/* Question 2 */}
            <div className="mb-6">
              <label className="block text-sm mb-2">
                Question 2 <span className="text-black">*</span>
              </label>
              <p className="text-sm text-gray-700 mb-2">What is your age?</p>
              <p className="text-sm font-semibold">{formData.question2}</p>
            </div>

            {/* Question 3 */}
            <div className="mb-6">
              <label className="block text-sm mb-2">
                Question 3 <span className="text-black">*</span>
              </label>
              <p className="text-sm text-gray-700 mb-2">Are you at your end?</p>
              <div className="text-sm font-semibold leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Habitasse semper nunc
                nibh duis et suspendisse blandit mi malesuada. Elementum vitae
                vitae proin ut laoreet erat. Mi eleifend hendrerit malesuada sit
                semper nisi. Montes nisi iaculis lobortis ridiculus adipiscing
                vitae sed. Viyputate cras ousmod eget ultricies montes laceret.
                Lacus in a. Consequat a eu sed mauris egestas. Sed lacus
                ultrices magna ut arcu. Donec quam elementum qgeeta hendrerit ut
                nec armet. At fella lectus quum semper. In curabitur convallis
                sit elit porttitor aliquet pulvinar.
              </div>
            </div>

            {/* Question 4 */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Question 4
              </label>
              <p className="text-sm text-gray-700 mb-3">
                Application question goes here
              </p>
              <ul className="list-disc list-inside text-sm font-semibold space-y-1">
                <li>Option 1</li>
                <li>Option 2</li>
              </ul>
            </div>
          </div>

          {/* Files Section */}
          <div className="lg:col-span-1 bg-secondary p-4 rounded-figma-sm">
            <h2 className="text-lg font-semibold text-center border-b pb-3 mb-6">
              Files
            </h2>

            {/* Birth Certificate */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">Birth certificate</p>
              <ImgBox
                src={assets.certificatePhoto}
                alt="photo"
                className="w-[165px] h-[132px] object-cover rounded-[10px]"
              />
            </div>

            {/* ID Card */}
            <div className="mb-8">
              <p className="text-sm font-medium mb-3">Id card</p>
              <div className="flex gap-3">
                <ImgBox
                  src={assets.certificatePhoto}
                  alt="photo"
                  className="w-[165px] h-[132px] object-cover rounded-[10px]"
                />
                <ImgBox
                  src={assets.certificatePhoto}
                  alt="photo"
                  className="w-[165px] h-[132px] object-cover rounded-[10px]"
                />
              </div>
            </div>

            {/* Billing Details */}
            <div className="pt-10">
              <h2 className="text-lg font-semibold text-center border-b pb-3 mb-6">
                Billing details
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Name</p>
                    <p className="text-sm font-semibold">Md. Abid Hasan</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Address</p>
                    <p className="text-sm font-medium">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Phone number</p>
                    <p className="text-sm font-medium">123456789065</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <p className="text-sm font-medium">example@gmail.com</p>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white w-full">
                    <DateDB2Icon2 />
                    <div className="flex-1">
                      <div className="text-gray-900 font-medium text-base">
                        Visa card
                      </div>
                      <div className="text-gray-500 text-sm mt-0.5">
                        **** **** **** 2154
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Details Section */}
          <div className="lg:col-span-1">
            <div className="bg-secondary p-4 rounded-figma-sm">
              <h2 className="text-lg font-semibold text-center border-b pb-3 mb-6">
                Order details
              </h2>

              {/* Service Items */}
              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-figma-sm p-4 space-y-6">
                  <div className="flex items-start gap-3">
                    <OrderDetailsOneIcon_cc className="shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Doc Assist Service</p>
                      <p className="text-sm font-semibold">R690.00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <OrderDetailsTwoIcon_cc className="shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Courier Delivery - South Africa
                      </p>
                      <p className="text-sm font-semibold">R990.00</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-figma-sm p-4 space-y-6">
                  <div className="flex items-start gap-3">
                    <OrderDetailsOneIcon_cc className="shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Doc Assist Service</p>
                      <p className="text-sm font-semibold">R690.00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <OrderDetailsTwoIcon_cc className="shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Courier Delivery - South Africa
                      </p>
                      <p className="text-sm font-semibold">R990.00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms & Conditions with Checkboxes */}
              <div className="pt-5 mb-6 space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={terms.confirmInfo}
                    onChange={() => handleTermChange("confirmInfo")}
                    className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <span className="text-xs text-gray-600">
                    I confirm that all information provided is true and correct.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={terms.processingTime}
                    onChange={() => handleTermChange("processingTime")}
                    className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <span className="text-xs text-gray-600">
                    I understand that processing times (15-20 working days)
                    depend on SAPS.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={terms.feesSeparate}
                    onChange={() => handleTermChange("feesSeparate")}
                    className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <span className="text-xs text-gray-600">
                    I accept that courier and SAPS fees are separate from Doc
                    Assist’s service fee.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={terms.termsAndConditions}
                    onChange={() => handleTermChange("termsAndConditions")}
                    className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <span className="text-xs text-gray-600">
                    I have read and accept the Terms & Conditions.
                  </span>
                </label>
              </div>

              {/* Total */}
              <div className="">
                <div className="flex justify-between items-center border-b pb-3 mb-2">
                  <p className="text-sm font-semibold">Total item:</p>
                  <p className="text-sm font-semibold">4</p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-base font-semibold">Subtotal:</p>
                  <p className="text-xl font-bold">R690.00</p>
                </div>
              </div>

              {/* Place Order Button - Disabled until all terms accepted */}
              <div className="pt-10 pb-2">
                <Button
                  onClick={() => setDeliveryReModal("isFedb", true)}
                  className="w-full rounded-figma-md! md:h-12"
                  size="lg"
                  icon={true}
                >
                  Place order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* modal component */}
      <Modal2
        open={deliveryReModal.isFedb}
        setIsOpen={(v: any) => setDeliveryReModal("isFedb", v)}
        title=""
        titleStyle="text-center"
        className="sm:max-w-xl"
      >
           <div className="space-y-6 py-4">
          <div className="flex flex-col items-center gap-2 p-2 rounded-xl">
            <div className="bg-secondary rounded-lg h-[150px] flex justify-center items-center">
              <Lottie
                animationData={checkboxAnimation}
                loop={false}
                className="w-[200px] h-[200px]"
              />
            </div>
            <div className="py-6 space-y-4">
              <SubTitle text="Request sent successfully" svg={false} className="text-[#2D9D1E] text-[20px] font-bold"/>

              <p className="text-figma-secondary text-center">
           You will get a confirmation email to <br /> ex********@gmail.com soon.
              </p>
            </div>

            <div className="w-full px-8">
              <Link href={"/"}>
                <Button className="w-full rounded-figma-md! h-12" size="lg">
                 Done
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Modal2>
    </div>
  );
};

export default PlaceOrderPage;
