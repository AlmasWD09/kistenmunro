import { FromInput } from "@/components/reusable/form-input";
import Form from "@/components/reusable/from";
import { Button } from "@/components/ui";
import { DB_delete_Icon } from "@/icon";
import { add_service_three_step_redquire_dc_sc } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";

const RequiredDocument = () => {
  const form = useForm({
    resolver: zodResolver(add_service_three_step_redquire_dc_sc),
    defaultValues: {
      title: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
  };

  return (
    <div className="mt-10">
      <h1 className="py-1 font-semibold">Required Documents </h1>
      <div className="border rounded-lg p-4">
        <div>
          <Form className="" from={form} onSubmit={handleSubmit}>
            <div className="flex justify-between items-center gap-2">
              <div className="w-[95%]">
                {/* title */}
                <p className="font-semibold pb-1">Title</p>
                <FromInput
                  className="h-11 bg-secondary "
                  name="title"
                  placeholder="Please enter the document title name..."
                  label=""
                />
              </div>
              <div className="mt-7">
                <Button className="bg-transparent border text-primary">Add</Button>
              </div>
            </div>
          </Form>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequiredDocument;
