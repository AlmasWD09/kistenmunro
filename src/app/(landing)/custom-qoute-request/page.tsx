"use client";

import { Button } from "@/components/ui/button";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@/components/reusable/from";
import { FromInput } from "@/components/reusable/form-input";
import SubTitle from "@/components/reusable/title";
import { custom_quote_req, sign_In } from "@/lib/schema";
import { FromTextArea } from "@/components/reusable/from-textarea";
import Link from "next/link";
import Image from "next/image";

const CustomQouteRequest: React.FC = () => {
  const from = useForm({
    resolver: zodResolver(custom_quote_req),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      message: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {};

  return (
    <div className="container px-4 pb-20">
      <div className="my-10 ">
        <SubTitle svg={false} text="Request a custom qoute" />
      </div>
      <div className="flex flex-col lg:flex-row xl:px-28">
        {/* left side */}
        <div className="">
          <Image src={'/images/quotePhoto.png'} alt="photo" width={500} height={5000} className="w-full h-full rounded-t-figma-sm lg:rounded-t-none lg:rounded-l-figma-sm"/>
        </div>






        {/* right side */}
        <div className="w-full px-6 pb-8 md:px-8 lg:w-1/2 bg-secondary rounded-b-figma-sm lg:rounded-b-none lg:rounded-r-figma-sm! relative min-h-[600px]">
          <Form className="space-y-4 pt-8 " from={from} onSubmit={handleSubmit}>
            <FromInput
              className="h-11 "
              name="name"
              placeholder="Enter your full name"
              label="Name *"
            />
            <FromInput
              className="h-11 "
              name="email"
              placeholder="Enter your email"
              label="Email *"
            />

            <FromInput
              className="h-11 "
              name="phone_number"
              type="number"
              placeholder="Enter your number"
              label="Contact number *"
            />

            <FromTextArea
              className="h-28 bg-white"
              name="message"
              placeholder="Enter the details of your requested document."
              label="Document request *"
            />

            <div className="absolute bottom-8 left-8 right-8">
              <Link href={"/custom-qoute-submit"}>
                <Button
                  className="w-full rounded-figma-md! md:h-12"
                  size="lg"
                  icon={true}
                >
                  {" "}
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

export default CustomQouteRequest;
