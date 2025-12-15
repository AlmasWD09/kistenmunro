"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@/components/reusable/from";
import { FromInput } from "@/components/reusable/form-input";
import { EmailIcon, GoogleIcon, LockIcon } from "@/icon";
import SubTitle from "@/components/reusable/title";
import { Checkbox, Label } from "@/components/ui";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import IconBox from "@/components/reusable/Icon-box";
import { sign_In } from "@/lib/schema";
import { useLoginApiMutation } from "@/redux/web-auth/authApi";
import toast from "react-hot-toast";
import ApiError from "@/components/shared";
import SpinnerCa from "@/components/shared/Spinner_ca";

export default function Login() {
  const router = useRouter();
  const from = useForm({
    resolver: zodResolver(sign_In),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loginApi, { isLoading }] = useLoginApiMutation();

  const handleSubmit = async (values: FieldValues) => {
    const formData = new FormData();
    formData.append("email", values?.email);
    formData.append("password", values?.password);

    try {
      const res = await loginApi(formData).unwrap();

      if (res?.status === "success") {
        toast.success(res?.message);
        router.push(`/`);
      } else {
        toast.error(res?.messages);
      }
    } catch (errors) {
      const errorValue = errors as ApiError;
      if (errorValue?.data?.message) {
        toast.error(errorValue?.data?.message);
      }
    }
  };
  return (
    <div className="w-11/12 lg:max-w-4xl bg-secondary rounded-figma-sm p-4 lg:p-10 my-30 mx-auto">
      <SubTitle text="User Login" svg={false} />
      <Form className="space-y-4 pt-8" from={from} onSubmit={handleSubmit}>
        <FromInput
          className="h-11"
          name="email"
          placeholder="Email"
          icon={<EmailIcon />}
        />

        <div>
          <FromInput
            className="h-11"
            name="password"
            placeholder="Password"
            eye={true}
            icon={<LockIcon />}
          />

          <div className="flex items-center justify-between mt-2 text-sm">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember-me" />
              <Label htmlFor="remember-me" className="font-normal">
                Keep me logged in
              </Label>
            </div>
            <Link href="/auth/forgot-password" className="hover:underline">
              Forgot Password ?
            </Link>
          </div>
        </div>

        <div>
          <Button className="w-full rounded-figma-md!" size="lg">
            {isLoading ? <SpinnerCa /> : "Login"}
          </Button>
        </div>
      </Form>

      <div className="space-y-4 mt-10">
        <div className="relative mt-1">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center ">
            <span className="px-2 bg-secondary text-figma-secondary">
              or login with
            </span>
          </div>
        </div>

        

        <IconBox>
          <GoogleIcon />
        </IconBox>
        <div className="text-center  text-figma-secondary">
          New here ?{" "}
          <Link
            href="/auth/register"
            className="inline-flex items-center text-figma-secondary hover:underline"
          >
            Register your account
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
