"use client";

import { Button } from "@/components/ui/button";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@/components/reusable/from";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import SubTitle from "@/components/reusable/title";
import { custom_quote_req } from "@/lib/schema";
import Image from "next/image";
import Link from "next/link";

const CustomQouteSubmit: React.FC = () => {
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
          <Image
            src={"/images/quotePhoto.png"}
            alt="photo"
            width={500}
            height={5000}
            className="w-full h-full rounded-t-figma-sm lg:rounded-t-none lg:rounded-l-figma-sm"
          />
        </div>

        {/* right side */}
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 bg-secondary rounded-b-figma-sm lg:rounded-b-none lg:rounded-r-figma-sm!  relative min-h-[600px]">
          <Form
            className="space-y-4 pt-8 pb-20"
            from={from}
            onSubmit={handleSubmit}
          >
            {/* first dropdown */}
            <div>
              <h1 className="font-semibold py-2">
                Country that documents will be used for (eg. China, UAE, New
                Zealand)?*
              </h1>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder="-select country-"
                    className="rounded-figma-md mt-4"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="america">America</SelectItem>
                    <SelectItem value="aangladesh">Bangladesh</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="Pakistan">Pakistan</SelectItem>
                    <SelectItem value="malaysia">Malaysia</SelectItem>
                    <SelectItem value="singapore">Singapore</SelectItem>
                    <SelectItem value="ireland">Ireland</SelectItem>
                    <SelectItem value="south africa">South Africa</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* second dropdown */}
            <div>
              <h1 className="font-semibold py-2">
                Country that you are currently staying in (eg. China, UAE, New
                Zealand)? *
              </h1>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder="-select country-"
                    className="rounded-figma-md mt-4"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="america">America</SelectItem>
                    <SelectItem value="aangladesh">Bangladesh</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="Pakistan">Pakistan</SelectItem>
                    <SelectItem value="malaysia">Malaysia</SelectItem>
                    <SelectItem value="singapore">Singapore</SelectItem>
                    <SelectItem value="ireland">Ireland</SelectItem>
                    <SelectItem value="south africa">South Africa</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* third dropdown */}
            <div>
              <h1 className="font-semibold py-2">
                On completion, to which country do we need to return the
                documents to? *
              </h1>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder="-select country-"
                    className="rounded-figma-md mt-4"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="america">America</SelectItem>
                    <SelectItem value="aangladesh">Bangladesh</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="Pakistan">Pakistan</SelectItem>
                    <SelectItem value="malaysia">Malaysia</SelectItem>
                    <SelectItem value="singapore">Singapore</SelectItem>
                    <SelectItem value="ireland">Ireland</SelectItem>
                    <SelectItem value="south africa">South Africa</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </Form>

          {/* Button positioned absolutely at bottom */}
          <div className="absolute bottom-8 left-8 right-8">
            <Link href={"/services/details"}>
              <Button
                className="w-full rounded-figma-md! md:h-12"
                size="lg"
                icon={false}
              >
                Submit your request
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomQouteSubmit;
