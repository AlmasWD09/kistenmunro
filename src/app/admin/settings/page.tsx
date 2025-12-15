"use client";

import { FromInput } from "@/components/reusable/form-input";
import Form from "@/components/reusable/from";
import ProfilePictureUploader from "@/components/reusable/ProfilePictureUploader";
import Faq from "@/components/settings/faq";
import PrivacyPolicy from "@/components/settings/privacy-policy";
import TermsAndCondition from "@/components/settings/terms-and-condition";
import { Button } from "@/components/ui";
import { LocationFieldIcon, PhoneIpfIcon, UserInfIcon } from "@/icon";
import { admin_profile_sc } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const tabs = [
  { id: "personal", label: "Personal Info" },
  { id: "terms", label: "Terms & Conditions" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "faq", label: "FAQ" },
];

const SettingPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("personal");

  const handleImageChange = (file: File | null, url: string | null) => {
    setSelectedFile(file);
    setPreviewUrl(url);
  };

  const form = useForm({
    resolver: zodResolver(admin_profile_sc),
    defaultValues: {
      full_name: "",
      phone_number: "",
      address: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    console.log(values, selectedFile);
   
  };

  // Define content for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "personal":
        return (
          <Form
            className="border rounded-lg p-4 md:p-6 space-y-4 pt-8"
            from={form}
            onSubmit={handleSubmit}
          >
            <div className="w-full flex flex-col justify-center items-center mb-20">
              <ProfilePictureUploader
                file={selectedFile}
                previewUrl={previewUrl}
                onChange={handleImageChange}
                label=""
              />
              {!previewUrl && (
                <p className="font-semibold text-gray-600 py-1">
                  Upload your photo
                </p>
              )}
            </div>

            <FromInput
              name="full_name"
              placeholder="Enter your full name here"
              icon={<UserInfIcon />}
              className="h-[50px] rounded-md bg-secondary placeholder:text-muted-foreground"
              stylelabel="text-lg"
            />

            <FromInput
              name="phone_number"
              type="number"
              placeholder="Enter your phone number"
              icon={<PhoneIpfIcon />}
              className="h-[50px] bg-secondary rounded-md placeholder:text-muted-foreground"
              stylelabel="text-lg"
            />

            <FromInput
              name="address"
              placeholder="Enter your address"
              icon={<LocationFieldIcon />}
              className="h-[50px] bg-secondary rounded-md placeholder:text-muted-foreground"
              stylelabel="text-lg"
            />

            <div className="mt-10">
              <Button className="w-full h-11">Update Changes</Button>
            </div>
          </Form>
        );

      case "terms":
        return (
          <>
            <TermsAndCondition />
          </>
        );

      case "privacy":
        return (
          <>
            <PrivacyPolicy />
          </>
        );

      case "faq":
        return (
          <>
            <Faq />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Tabs Container - Responsive */}
      <div className=" mb-8">
        <div className=" w-full md:flex md:justify-end overflow-x-auto">
          <div className="flex min-w-max pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer flex flex-col items-center px-3 py-2 text-xs sm:text-sm font-medium transition whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-[#888888]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className=" h-[90%] overflow-y-auto">{renderTabContent()}</div>
    </>
  );
};

export default SettingPage;
