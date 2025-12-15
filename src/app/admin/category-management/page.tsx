"use client";

import { FromInput } from "@/components/reusable/form-input";
import Form from "@/components/reusable/from";
import { ImgBox } from "@/components/reusable/Img-box";
import Modal2 from "@/components/reusable/modal2";
import ProfilePictureUploader from "@/components/reusable/ProfilePictureUploader";
import { Button } from "@/components/ui";
import { useGlobalState } from "@/hooks";
import { add_categorie_sc } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const categorieData = [
  {
    id: 1,
    image: "/images/categorie1.png",
    title: "Police clearance",
    subtitle: "5 Services",
  },
  {
    id: 2,
    image: "/images/categorie2.png",
    title: "Police clearance",
    subtitle: "",
  },
  {
    id: 3,
    image: "/images/categorie3.png",
    title: "Police clearance",
    subtitle: "",
  },
];

const intState = {
  isAdd: false,
  isEdit: false,
};

const CategoryManagement = () => {
  const router = useRouter();
  const [categorieModal, setCategorieModal] = useGlobalState(intState);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (file: File | null, url: string | null) => {
    setSelectedFile(file);
    setPreviewUrl(url);
  };

  const form = useForm({
    resolver: zodResolver(add_categorie_sc),
    defaultValues: {
      categorie_name: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    console.log(values, selectedFile);
  };

  return (
    <div>
      {categorieData?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {categorieData?.map((item) => (
              <div
                key={item.id}
                className="bg-[#F8F8F8] rounded-md p-4 flex flex-col h-full" // Important: flex-col + h-full
              >
                {/* Image Section - Fixed height */}
                <div className="flex justify-center items-center mb-4">
                  <ImgBox
                    src={item.image}
                    alt="photo"
                    className="h-[140px] w-[140px] rounded-[8px] object-cover"
                  />
                </div>

                {/* Content Section - Takes available space */}
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <h2 className="text-gray-800 font-semibold mb-1">
                    {item.title}
                  </h2>
                  {item.subtitle && (
                    <h2
                    onClick={()=>router.push('/admin/category-management/all-services')}
                    className="cursor-pointer underline underline-offset-4 text-gray-800 mb-2">
                      {item.subtitle}
                    </h2>
                  )}
                </div>

                {/* Action Buttons - Always at bottom */}
                <div className="mt-16">
                  {" "}
                  {/* mt-6 adds spacing from content */}
                 <Link href={'/admin/category-management/add-service-step~one'}>
                  <Button className="w-full bg-transparent border border-primary text-primary font-semibold h-11">
                    Add services
                  </Button>
                 </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-20">
            <Button
             onClick={() => setCategorieModal("isAdd", true)}
              className="bg-primary w-full lg:w-0 h-12 lg:px-40 xl:px-60"
            >
              Create Category
            </Button>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center ">
          <div className="">
            <Image
              src={"/images/error.png"}
              alt="photo"
              width={500}
              height={500}
              className="  object-cover"
            />
            <div className="pt-10 space-y-3">
              <h1 className="text-center text-4xl text-gray-500 font-semibold">
                Oops!
              </h1>
              <p className="text-center text-gray-500">
                You have no categories yet. Please create a new category
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Button
              onClick={() => setCategorieModal("isAdd", true)}
              className="md:px-20 xl:px-40 h-11"
            >
              Create Category
            </Button>
          </div>
        </div>
      )}

      {/* ============== add on  ============== */}
      <Modal2
        open={categorieModal.isAdd}
        setIsOpen={(v: any) => setCategorieModal("isAdd", v)}
        title=""
        titleStyle="text-center"
        className="sm:max-w-xl"
      >
        <div>
          <Form className="" from={form} onSubmit={handleSubmit}>
            {/* categorie image */}
            <div className="w-full flex flex-col justify-center items-center py-8">
              <ProfilePictureUploader
                file={selectedFile}
                previewUrl={previewUrl}
                onChange={handleImageChange}
                label=""
              />
              {!previewUrl && (
                <p className="font-medium pt-1">Category image</p>
              )}
            </div>

            {/* Category name */}
            <FromInput
              className="h-11 bg-secondary"
              name="categorie_name"
              placeholder="Please enter the category name..."
              label="Category name"
            />

            <Button
              onClick={() => setCategorieModal("isAdd", false)}
              className="bg-primary mb-2 w-full mt-8"
            >
              Add
            </Button>
            <Button
              type="button"
              onClick={() => setCategorieModal("isAdd", false)}
              className="bg-gray-200 text-gray-700 w-full"
            >
              Close
            </Button>
          </Form>
        </div>
      </Modal2>
    </div>
  );
};

export default CategoryManagement;
