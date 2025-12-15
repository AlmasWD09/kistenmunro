"use client";
import {
  BookingHistoryIcon,
  Order_car_Icon,
  Order_Mod_Icon,
  Order_sta_Icon,
  Order_Tb_Icon,
  OrderEyeIcon,
} from "@/icon";
import { TableCell, TableRow } from "@/components/ui";
import { PaymentTable } from "@/components/reusable/vendor-table";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/hooks";
import Modal from "@/components/reusable/modal";

interface OrderProps {
  id: number;
  service: string;
  price: number;
  size: string;
  customerName: string;
  customerEmail: string;
  date: string;
  rating?: number;
  status: "completed" | "pending" | "ongoing";
}

const Orders: OrderProps[] = [
  {
    id: 1,
    service: "Package title goes here",
    price: 250,
    size: "X1",
    customerName: "Vendor name",
    customerEmail: "example@gmail.com",
    date: "10th Nov, 2025",
    status: "pending",
  },
  {
    id: 2,
    service: "Package title goes here",
    price: 250,
    size: "X2",
    customerName: "Vendor name",
    customerEmail: "example@gmail.com",
    date: "10th Nov, 2025",
    status: "ongoing",
  },
];

const intState = {
  isAdd: false,
  isEdit: false,
};

const OrderHistoryPage = () => {
  const router = useRouter();
  const [orderModal, setOrderModal] = useGlobalState(intState);

  return (
    <div>
      <div className="mb-4 sm:mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold mb-6">Order history</h1>
    
      </div>

      {/* Desktop Table View - Hidden on mobile/tablet */}
      <div className="hidden xl:block">
        <PaymentTable>
          {Orders?.map((item) => (
            <TableRow key={item.id} className="cursor-pointer">
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <div>
                    <Order_Tb_Icon className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover shrink-0" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-base">
                      {item.service}
                    </p>
                    <p className="text-gray-700 text-base">{item.size}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-2">
                  <p className="text-gray-900 font-semibold text-base">
                    R290.00
                  </p>
                </div>
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-2  ml-4">
                  <Link href={"/services"}>
                    <ul className="list-disc list-inside text-white">
                      <li className="bg-[#2D9D1E] py-2 px-4 rounded-full">
                      Completed
                      </li>
                    </ul>
                  </Link>
                </div>
              </TableCell>

              <TableCell className="text-right">
                <div>
                  <OrderEyeIcon onClick={() => setOrderModal("isAdd", true)} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </PaymentTable>
      </div>

      {/* Mobile/Tablet Card View - Visible on small/medium screens */}
      <div className="xl:hidden space-y-3 sm:space-y-4">
        {Orders?.map((item) => (
          <div
            key={item.id}
            className="bg-secondary rounded-xl p-3 sm:p-4 cursor-pointer transition-shadow"
          >
            {/* Service Info with Image */}
            <div className="flex flex-col gap-3 mb-3 sm:mb-4">
              <Order_Tb_Icon className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-gray-800 text-sm sm:text-base  mb-1">
                  {item.service}
                </p>
              </div>
            </div>

            {/* Customer Info */}
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200">
              <p className="text-gray-900 font-semibold text-base">R290.00</p>
            </div>

            {/* Date and Status */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 ">
                <Link href={"/services"}>
                  <ul className="list-disc list-inside text-white">
                   <li className="bg-[#2D9D1E] py-2 px-4 rounded-full">
                      Completed
                      </li>
                  </ul>
                </Link>
              </div>

              <div>
                <OrderEyeIcon onClick={() => setOrderModal("isAdd", true)} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ============== add on  ============== */}
      <Modal
        open={orderModal.isAdd}
        setIsOpen={(v: any) => setOrderModal("isAdd", v)}
        title="Order details"
        titleStyle="text-center"
        className="sm:max-w-xl"
      >
        <div className="">
          <div className="space-y-4">
            {/* first */}
            <div className="bg-secondary p-3 rounded-figma-sm">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex gap-2">
                  <Order_Mod_Icon />
                  <div>
                    <h4>Order date</h4>
                    <h2 className="font-bold">20th Sep, 2025</h2>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Order_Mod_Icon />
                  <div>
                    <h4>Order date</h4>
                    <h2 className="font-bold">20th Sep, 2025</h2>
                  </div>
                </div>

                  <div className="flex gap-2">
                  <Order_Mod_Icon />
                  <div>
                    <h4>Total cost</h4>
                    <h2 className="font-bold">R890.00</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* second */}
            <div className="bg-secondary p-3 rounded-figma-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div className="flex items-center gap-2">
                  <Order_sta_Icon />
                  <h2>Order status</h2>
                </div>

                <div>
                  <ul className="list-disc list-inside text-white">
                    <li className="bg-[#2D9D1E] py-2 px-4 rounded-full">
                     Completed
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd */}
            <div className="bg-secondary p-3 rounded-figma-sm">
              <div className="space-y-3">
                <div className="flex gap-2">
                <Order_Mod_Icon />
                <div>
                  <h4>Doc Assist Service</h4>
                  <h2 className="font-bold">R690.00</h2>
                </div>
              </div>
              <div className="flex gap-2">
                <Order_car_Icon />
                <div>
                  <h4>Courier Delivery – South Africa</h4>
                  <h2 className="font-bold">R290.00</h2>
                </div>
              </div>
              </div>
            </div>

              {/* 3th */}
            <div className="bg-secondary p-3 rounded-figma-sm">
              <div className="space-y-3">
                <div className="flex gap-2">
                <Order_Mod_Icon />
                <div>
                  <h4>Doc Assist Service</h4>
                  <h2 className="font-bold">R690.00</h2>
                </div>
              </div>
              <div className="flex gap-2">
                <Order_car_Icon />
                <div>
                  <h4>Courier Delivery – South Africa</h4>
                  <h2 className="font-bold">R290.00</h2>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default OrderHistoryPage;
