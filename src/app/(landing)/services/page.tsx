import CheckboxGroup from "@/components/reusable/CheckboxGroup";
import { Button } from "@/components/ui";
import Link from "next/link";

const ServicePage = () => {
  return (
    <div className="border rounded-figma-sm! p-4 md:h-[300px] xl:h-[400px]">
    <div className="bg-secondary rounded-figma-sm! h-full flex justify-center items-center">
      <div className="flex flex-col space-y-4 p-4">
        <h1 className="text-center  xl:text-[20px] font-semibold xl:font-bold">
          Do you currently reside in south africa?
        </h1>
        <CheckboxGroup />
        <div className="flex justify-center ">
          <Link href={"/services/package"}>
            <Button size={"lg"} icon={true} className="rounded-full">
              Next
            </Button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ServicePage;
