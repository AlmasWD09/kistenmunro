"use client";

import { Trash2 } from "lucide-react";
import { ImgBox } from "@/components/reusable/Img-box";
import { DB_edit_Icon } from "@/icon";
import { Button, ScrollArea } from "@/components/ui";
import { useGlobalState } from "@/hooks";
import Modal from "@/components/reusable/modal";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { create_news_sc } from "@/lib/schema";
import Form from "@/components/reusable/from";
import { FromInput } from "@/components/reusable/form-input";
import { useState } from "react";
import assets from "@/assets";
import ProfilePictureUploader from "@/components/reusable/ProfilePictureUploader";
import TextEditor from "@/components/reusable/text-editor";

const newsData = [
  {
    id: 1,
    image: "/images/news1.png",
    title: "News title goes here",
    post_date: "20th November, 2025",
  },
  {
    id: 2,
    image: "/images/news2.png",
    title: "News title goes here",
    post_date: "20th November, 2025",
  },
  {
    id: 3,
    image: "/images/news3.png",
    title: "News title goes here",
    post_date: "20th November, 2025",
  },
];

const intState = {
  isAdd: false,
  isEdit: false,
};

export default function NewsManagement() {
  const [content, setContent] = useState<string>("");
  const [orderModal, setOrderModal] = useGlobalState(intState);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    assets.certificatePhoto.src
  );

  const handleImageChange = (file: File | null, url: string | null) => {
    setSelectedFile(file);
    setPreviewUrl(url);
  };

  const from = useForm({
    resolver: zodResolver(create_news_sc),
    defaultValues: {
      image: "",
      title: "",
      news_description: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {newsData?.map((item) => (
          <div key={item.id} className="border rounded-md p-2">
            {/* Image Section */}
            <div className="relative w-full  bg-gray-200 overflow-hidden rounded-md">
              <ImgBox
                src={item.image}
                alt="photo"
                className="h-48 sm:h-56 md:h-[296px] object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="mt-3">
              {/* Title */}
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>

              {/* Date */}
              <p className="text-xs sm:text-sm text-gray-500 mb-4">
                Posted on: {item.post_date}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {/* Edit Button */}
                <button
                   onClick={() => setOrderModal("isEdit", true)}
                className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-primary  text-white py-2.5 sm:py-3 rounded-md transition-colors duration-200">
                  <DB_edit_Icon />
                </button>

                {/* Delete Button */}
                <button className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-white  text-red-600 border-2 border-primary py-2.5 sm:py-3 rounded-md transition-colors duration-200">
                  <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <Button
          onClick={() => setOrderModal("isAdd", true)}
          className="bg-primary w-full lg:w-0 h-12 lg:px-40 xl:px-60"
        >
          Create News
        </Button>
      </div>

      {/* Add news modal */}
      <Modal
        open={orderModal.isAdd}
        setIsOpen={(v: any) => setOrderModal("isAdd", v)}
        title="Add News"
        titleStyle="text-center"
        className="sm:max-w-4xl"
      >
        <Form className="space-y-4 pt-8" from={from} onSubmit={handleSubmit}>
          <div>
            {/* image */}
            <div className="w-full flex  justify-center">
              <ProfilePictureUploader
                file={selectedFile}
                previewUrl={previewUrl}
                onChange={handleImageChange}
                label="News Image"
              />
            </div>
            {/* title */}
            <div>
              <FromInput
                className="h-11 bg-secondary"
                name="title"
                placeholder="Please enter the service title name..."
                label="Title"
              />
            </div>

            {/* news description */}
            <div className=" mt-4">
              <h1 className="font-medium pb-1">News Description</h1>
              <ScrollArea className="h-72">
                <TextEditor
                  value={content}
                  onChange={setContent}
                  className="border rounded-lg p-2"
                />
              </ScrollArea>
            </div>

            <div className="flex justify-center mt-6">
              <Button className="w-[80%] h-11">Upload</Button>
            </div>
          </div>
        </Form>
      </Modal>



      {/* Edit news modal */}
      <Modal
        open={orderModal.isEdit}
        setIsOpen={(v: any) => setOrderModal("isEdit", v)}
        title="Edit News"
        titleStyle="text-center"
        className="sm:max-w-4xl"
      >
        <Form className="space-y-4 pt-8" from={from} onSubmit={handleSubmit}>
          <div>
            {/* image */}
            <div className="w-full flex  justify-center">
              <ProfilePictureUploader
                file={selectedFile}
                previewUrl={previewUrl}
                onChange={handleImageChange}
                label="News Image"
              />
            </div>
            {/* title */}
            <div>
              <FromInput
                className="h-11 bg-secondary"
                name="title"
                placeholder="Please enter the service title name..."
                label="Title"
              />
            </div>

            {/* news description */}
            <div className=" mt-4">
              <h1 className="font-medium pb-1">News Description</h1>
              <ScrollArea className="h-72">
                <TextEditor
                  value={content}
                  onChange={setContent}
                  className="border rounded-lg p-2"
                />
              </ScrollArea>
            </div>

            <div className="flex justify-center mt-6">
              <Button className="w-[80%] h-11">Save Changes</Button>
            </div>
          </div>
        </Form>
      </Modal>
    </div>
  );
}
