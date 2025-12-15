import SearchBox from "@/components/common/super-dash/reuse/search-box";
import SearchBox2 from "@/components/reusable/search-box2";
import { ArrowRight_cc_Icon, Order_Tb_Icon } from "@/icon";
import Link from "next/link";

const allService = [
  {
    id: 1,
    title: "PCC (Police Clearance NZ/AU/CA)",
    sub_title:
      "STANDARD POLICE CLEARANCE  :FOR NEW ZEALAND / AUSTRALIA / CANADA - client resides in SA",
  },
  {
    id: 2,
    title: "PCC NZ/AU /CA",
    sub_title:
      "EXPEDITED PCC FOR FOR Australia , New Zealand and Canada : Client resides in SA",
  },
  {
    id: 3,
    title: "PCC NO APOSTILLE",
    sub_title: "Police Clearance (PCC)– If you're in South Africa Only ",
  },
  {
    id: 4,
    title: "PCC WITH  APOSTILLE",
    sub_title:
      "STANDAND POLICE CLEARANCE WITH AN APOSTILLE (Client resides in SA)",
  },
  {
    id: 5,
    title: "PCC WITH  APOSTILLE",
    sub_title: "STANDAND WITH APOSTILLE",
  },
  {
    id: 6,
    title: "PCC WITH ATTESTATION",
    sub_title: "STANDARD WITH ATTESTATION",
  },
];

const AllServices = () => {
  return (
    <div>
      <div className="mb-16">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:items-center md:justify-between">
          <div>
            <h1 className="font-semibold">Police Clearance</h1>
            <p>10 services</p>
          </div>

          
          <div className="md:w-[80%]">
             <SearchBox2 />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {allService.map((item) => (
          <div key={item.id} className="bg-secondary rounded-figma-sm p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div>
                  <Order_Tb_Icon />
                </div>
                <div>
                  <h1 className="font-semibold">{item.title}</h1>
                  <p className="text-gray-400 text-xs">{item.sub_title}</p>
                </div>
              </div>
              <div>
                <Link href={"/admin/category-management/service-details"}>
                  <ArrowRight_cc_Icon />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
