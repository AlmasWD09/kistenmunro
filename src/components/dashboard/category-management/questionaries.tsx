import { FromInput } from "@/components/reusable/form-input";
import Form from "@/components/reusable/from";
import Modal2 from "@/components/reusable/modal2";
import { Button } from "@/components/ui";
import { useGlobalState } from "@/hooks";
import { DB_delete_Icon } from "@/icon";
import { add_service_three_step_add_question_sc } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Lottie from "lottie-react";
import { X } from "lucide-react";
import { FieldValues, useForm } from "react-hook-form";
import checkboxAnimation from "@/animations/CheckboxAnimation.json";
import { useRouter } from "next/navigation";

const intState = {
  isAdd: false,
  isSuccess: false,
};

const Questionaries = () => {
  const [addQuestionModal, setAddQuestionModal] = useGlobalState(intState);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(add_service_three_step_add_question_sc),
    defaultValues: {
      orderType: [] as string[],
      question_name: "",
      drop_down_value: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
    console.log("Order types selected:", values.orderType);
  };

  return (
    <div className="mt-10">
      <div className="border rounded-lg p-4">
        <div>
          <div>
            <h1 className="py-1 font-semibold">Questionaries </h1>
            <div>
              <Button
                onClick={() => setAddQuestionModal("isAdd", true)}
                className="bg-transparent border text-primary font-semibold w-full h-11"
              >
                Add question
              </Button>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="mt-10">
          <h1 className="text-gray-400 py-2">Preview</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* card one (with content) */}
            <div className="bg-secondary rounded-lg p-4 flex flex-col h-full">
              <div className="space-y-1 grow">
                {" "}
                {/* ei div content ke grow korbe */}
                <h1 className="font-semibold">Question Name</h1>
                <p className="text-gray-500">Value 1</p>
                <p className="text-gray-500">Value 2</p>
              </div>

              <Button className="bg-white h-11 rounded w-full mt-4">
                <DB_delete_Icon />
              </Button>
            </div>

            {/* card second (empty content) */}
            <div className="bg-secondary rounded-lg p-4 flex flex-col h-full">
              <div className="space-y-1 grow">
                <h1 className="font-semibold">Question Name</h1>
              </div>

              <Button className="bg-white h-11 rounded w-full mt-4">
                <DB_delete_Icon />
              </Button>
            </div>

            {/* card 3rd (empty content) */}
            <div className="bg-secondary rounded-lg p-4 flex flex-col h-full">
              <div className="space-y-1 grow">
                <h1 className="font-semibold">Question Name</h1>
              </div>

              <Button className="bg-white h-11 rounded w-full mt-4">
                <DB_delete_Icon />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ============== add on  ============== */}
      <Modal2
        open={addQuestionModal.isAdd}
        setIsOpen={(v: any) => setAddQuestionModal("isAdd", v)}
        title=""
        titleStyle="text-center"
        className="sm:max-w-xl"
      >
        <div
          className="absolute top-3 right-3 cursor-pointer"
          onClick={() => {
            setAddQuestionModal("isAdd", false);
            const timeout = setTimeout(() => {
              setAddQuestionModal("isSuccess", false);
            }, 200);
            return () => clearTimeout(timeout);
          }}
        >
          <X className="" />
        </div>
        {addQuestionModal.isSuccess ? (
          <>
            <div>
              <div className="w-fit mx-auto  bg-secondary rounded-lg h-[150px] flex justify-center items-center">
                <Lottie
                  animationData={checkboxAnimation}
                  loop={true}
                  className="w-[200px] h-[200px]"
                />
              </div>

              <div className="text-center space-y-2 mt-10">
                <h1 className="font-semibold text-3xl">Successful</h1>
                <p className="text-gray-500">
                  Your service have been added successfully.
                </p>
              </div>

              <div className="mt-10">
                <Button
                  onClick={() => router.push('/admin/category-management/add-service-step~one')}
                  className="bg-primary mb-2 w-full h-11"
                >
                  Add another service
                </Button>
                <Button
                  onClick={() => {
                    setAddQuestionModal("isAdd", false);
                    setAddQuestionModal("isSuccess", false);
                  }}
                  className="bg-gray-200 text-gray-700 w-full h-11"
                >
                  Close
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <Form className="space-y-5 " from={form} onSubmit={handleSubmit}>
              <div className="mb-6">
                <h1 className="font-semibold pb-2">Select Question Type</h1>
                <div className="flex items-center gap-5">
                  {/* Textbox */}
                  <div className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      value="textbox"
                      {...form.register("orderType")}
                      className="shrink-0 w-5 4 h-5 rounded-figma-sm border-gray-300 focus:ring-0 cursor-pointer"
                    />
                    <p className="">Textbox</p>
                  </div>
                  {/* Input field */}
                  <div className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      value="input_field"
                      {...form.register("orderType")}
                      className="shrink-0 w-5 4 h-5 rounded-figma-sm border-gray-300 focus:ring-0 cursor-pointer"
                    />
                    <p className="">Input field</p>
                  </div>

                  {/* Drop down */}
                  <div className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      value="drop_down"
                      {...form.register("orderType")}
                      className="shrink-0 w-5 4 h-5 rounded-figma-sm border-gray-300 focus:ring-0 cursor-pointer"
                    />
                    <p className="">Drop down</p>
                  </div>
                  {/* Check box */}
                  <div className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      value="checkout"
                      {...form.register("orderType")}
                      className="shrink-0 w-5 4 h-5 rounded-figma-sm border-gray-300 focus:ring-0 cursor-pointer"
                    />
                    <p className="">Checkout</p>
                  </div>
                </div>
              </div>

              {/* Question name */}
              <FromInput
                className="h-11 bg-secondary"
                name="question_name"
                placeholder="Please enter the question"
                label="Question name"
              />

              {/* Drop down value */}
              <div className="flex justify-between items-center gap-2">
                <div className="w-[95%]">
                  <p className="font-semibold pb-1">Drop down value</p>
                  <FromInput
                    className="h-11 bg-secondary "
                    name="title"
                    placeholder="Please enter the category name..."
                    label=""
                  />
                </div>
                <div className="mt-7">
                  <Button className="bg-transparent border text-primary">
                    Add
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-secondary w-fit p-2 rounded">
                  <h1>Value 1</h1>
                  <DB_delete_Icon />
                </div>
              </div>

              <div className="mt-20">
                <Button
                  onClick={() => setAddQuestionModal("isSuccess", true)}
                  className="bg-primary mb-2 w-full h-11"
                >
                  Add
                </Button>
                <Button
                  onClick={() => setAddQuestionModal("isAdd", false)}
                  className="bg-gray-200 text-gray-700 w-full h-11"
                >
                  Close
                </Button>
              </div>
            </Form>
          </>
        )}
      </Modal2>
    </div>
  );
};

export default Questionaries;
