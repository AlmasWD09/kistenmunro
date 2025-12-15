"use client";
import { useForm, FieldValues } from "react-hook-form";
import photo1 from "@/assets/contactBg.png";
import photo2 from "@/assets/contactPhoto.png";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@/components/reusable/from";
import { FromInput } from "@/components/reusable/form-input";
import { Button } from "@/components/ui";
import { SendIcon2 } from "@/icon";
import { FromTextArea } from "@/components/reusable/from-textarea";
import { contact_us } from "@/lib/schema";
import { ImgBox } from "../reusable/Img-box";
import Image from "next/image";

const Contact = () => {
  const from = useForm({
    resolver: zodResolver(contact_us),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
  };

  return (
    <div className="pt-[35px] md:pt-[148px]">
      <div
        className="pt-10 xl:p-10"
        style={{
          backgroundImage: `url(${photo1.src})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container px-4 ">
          <div className="flex flex-col xl:flex-row justify-center items-center gap-10">
            {/* LEFT SIDE */}
            <div className="">
              <Image
                src={photo2}
                alt="photo"
                className="w-full h-full md:h-[500px] lg:h-[600px] object-cover rounded-figma-sm!"
              />
            </div>

            {/* RIGHT SIDE  */}
            <div className="w-full xl:w-2xl text-white ">
              <div className="space-y-2 pb-8">
                <h1 className="text-[20px] xl:text-[28px] font-semibold">Do you have any enquiry ?</h1>
                <p>Just give us a message and we will get back to you.</p>
              </div>

              <div className="">
                <Form
                  className="space-y-3  "
                  from={from}
                  onSubmit={handleSubmit}
                >
                  <FromInput
                    label="Name"
                    name="name"
                    placeholder="Enter your full name here"
                    className="h-[50px]  bg-[#3c555f] rounded-[10px] placeholder:text-gray-400"
                    stylelabel="text-lg text-white"
                  />

                  <FromInput
                    label="Email"
                    name="email"
                    placeholder="Enter your email address"
                    className="h-[50px]  bg-[#3c555f] rounded-[10px] placeholder:text-gray-400"
                    stylelabel="text-lg text-white"
                  />
                  <FromTextArea
                    label="Your message"
                    name="message"
                    placeholder="Write your message here"
                    className="min-h-30 bg-[#3c555f] rounded-[10px]"
                  />

                  <div className="flex justify-end pb-4">
                    <Button
                      type="submit"
                      className="mt-0 xl:mt-0 bg-white text-black"
                      size="lg"
                      icon={false}
                    >
                      Get a quote
                      <SendIcon2 className="text-black"/>
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
