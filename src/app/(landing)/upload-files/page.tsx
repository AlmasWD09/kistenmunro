"use client";

import assets from "@/assets";
import { Button } from "@/components/ui";
import ProfilePictureUploader from "@/components/reusable/ProfilePictureUploader";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { UploadFileIcon_cc } from "@/icon";
import { Download } from "lucide-react";

const UploadFilePage = () => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    assets.certificatePhoto.src // default image
  );

  const handleImageChange = (file: File | null, url: string | null) => {
    setSelectedFile(file);
    setPreviewUrl(url);
  };

  const handleNext = () => {
    router.push("/billing-info");
  };

  return (
    <div className="flex flex-col items-center justify-center md:pt-[35px] xl:pt-[48px]">
      <div className="container px-4 space-y-3 xl:px-60">
        <div className="flex justify-center items-center md:pb-8">
          <UploadFileIcon_cc />
        </div>

        <div className="bg-secondary rounded-figma-sm p-4">
          <div>
            <p className="font-medium">Question 1 *</p>
            <h1 className="text-xl font-bold">Birth certificate</h1>
          </div>

          <div className="py-8">
            <div className="w-full flex  justify-center">
              <ProfilePictureUploader
                file={selectedFile}
                previewUrl={previewUrl}
                onChange={handleImageChange}
                label=""
              />
            </div>
            <div className="flex justify-center pt-4">
              <Button className="bg-transparent text-black border border-dashed">
                <Download /> Replace
              </Button>
            </div>
          </div>
        </div>




        <div className="bg-secondary rounded-figma-sm p-4">
          <div>
            <p className="font-medium">Question 1 *</p>
            <h1 className="text-xl font-bold">Id card</h1>
          </div>

            <div className="flex justify-center pt-4">
              <Button className="bg-transparent text-black border border-dashed">
                <Download /> Upload file
              </Button>
            </div>
        </div>

         <div className="w-full flex justify-end pb-6 mt-4">
        <Button
          onClick={handleNext}
          icon={true}
          className="rounded-full px-8 py-3 text-lg"
        >
          Next
        </Button>
      </div>
      </div>
    </div>
  );
};

export default UploadFilePage;
