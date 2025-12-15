"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@/components/reusable/from";
import { FromInput } from "@/components/reusable/form-input";
import { ChangeIcon, LockIcon } from "@/icon";
import SubTitle from "@/components/reusable/title";
import IconBox from "@/components/reusable/Icon-box";
import { new_Pass } from "@/lib/schema";
import { useGlobalState } from "@/hooks";
import Modal2 from "@/components/reusable/modal2";
import Lottie from "lottie-react";
import checkboxAnimation from "@/animations/CheckboxAnimation.json";
import Link from "next/link";

const intState = {
  page: 1,
  isPreview: false,
};

export default function ResetPassword() {
  const [global, updateGlobal] = useGlobalState(intState);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(new_Pass),
    mode: "onChange",
    defaultValues: {
      password: "",
      c_password: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    // CHECK PASSWORD MATCH
    if (values.password !== values.c_password) {
      form.setError("c_password", {
        message: "Passwords do not match",
      });
      return;
    }
    // Open modal only when valid
    updateGlobal("isPreview", true);
    form.reset({
      password: "",
      c_password: "",
    });

    console.log("Form Submitted Successfully:", values);
  };

  return (
    <div className="w-11/12 lg:max-w-4xl bg-secondary rounded-figma-sm py-17 px-4 lg:px-10 my-30 mx-auto">
      <IconBox className="lg:size-14">
        <ChangeIcon className="lg:size-7" />
      </IconBox>

      <SubTitle text="Set new password" svg={false} />

      <p className="text-figma-secondary text-center mt-2">
        Set your new password here. It must be 8 characters and combination of
        special characters.
      </p>

      <Form className="space-y-4 pt-8" from={form} onSubmit={handleSubmit}>
        <FromInput
          className="h-11"
          name="password"
          placeholder="Password"
          icon={<LockIcon />}
        />

        <FromInput
          className="h-11"
          name="c_password"
          placeholder="Confirm password"
          icon={<LockIcon />}
        />

        <div>
          <Button
            type="submit"
            className="w-full rounded-figma-md!"
            size="lg"
            disabled={!form.formState.isValid}
          >
            Submit
          </Button>
        </div>
      </Form>

      {/* MODAL */}
      <Modal2
        open={global.isPreview}
        setIsOpen={(v: any) => updateGlobal("isPreview", v)}
        title=""
        titleStyle="text-center"
        className="sm:max-w-xl"
      >
        <div className="space-y-6 py-4">
          <div className="flex flex-col items-center gap-2 p-2 rounded-xl">
            <div className="bg-secondary rounded-lg h-[150px] flex justify-center items-center">
              <Lottie
                animationData={checkboxAnimation}
                loop={true}
                className="w-[200px] h-[200px]"
              />
            </div>
            <div className="py-6">
              <SubTitle text="Password changed successfully" svg={false} />

              <p className="text-figma-secondary text-center">
                Go back to login page to login again
              </p>
            </div>

            <div className="w-full">
              <Link href={"/auth"}>
                <Button className="w-full rounded-figma-md!" size="lg">
                  Back to login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Modal2>
    </div>
  );
}
