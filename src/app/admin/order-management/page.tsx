"use client";

import React, { useState } from "react";
import { Search, } from "lucide-react";
import { DB_download_cc_Icon, DB_eye_Icon } from "@/icon";
import { useGlobalState } from "@/hooks";
import Modal2 from "@/components/reusable/modal2";
import { ImgBox } from "@/components/reusable/Img-box";
import { Button } from "@/components/ui";
import { order_mn_sc, } from "@/lib/schema";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@/components/reusable/from";
import { FromTextArea } from "@/components/reusable/from-textarea";

interface Order {
  id: number;
  orderId: string;
  name: string;
  email: string;
  category: string;
  status: "pending" | "completed";
  avatar?: string;
}

const ordersData: Order[] = [
  {
    id: 1,
    orderId: "214562",
    name: "Abir Hossain",
    email: "abid32@gmail.com",
    category: "Police clearance",
    status: "pending",
  },
  {
    id: 2,
    orderId: "123654",
    name: "Maksud Bhuiya",
    email: "user123@example.com",
    category: "Home affairs",
    status: "pending",
  },
  {
    id: 3,
    orderId: "856985",
    name: "Arjun Patel",
    email: "hello@creativeoutlook.com",
    category: "Divorce order",
    status: "completed",
  },
  {
    id: 4,
    orderId: "087321",
    name: "Shia Sharma",
    email: "info@innovativeideas.com",
    category: "Apostille",
    status: "pending",
  },
  {
    id: 5,
    orderId: "654789",
    name: "Kiran Mehta",
    email: "support@techsolutions.com",
    category: "Embassy attestation",
    status: "completed",
  },
  {
    id: 6,
    orderId: "321456",
    name: "Ravi Kumar",
    email: "contact@brightfuture.com",
    category: "Driver's License",
    status: "pending",
  },
  {
    id: 7,
    orderId: "789654",
    name: "Anita Desai",
    email: "admin@yourdomain.com",
    category: "Police clearance",
    status: "completed",
  },
  {
    id: 8,
    orderId: "456123",
    name: "Anita Desai",
    email: "admin@yourdomain.com",
    category: "Apostille",
    status: "pending",
  },
  {
    id: 9,
    orderId: "321789",
    name: "Deepak Singh",
    email: "reachus@smartsolutions.com",
    category: "Home affairs",
    status: "completed",
  },
  {
    id: 10,
    orderId: "654321",
    name: "Deepak Verma",
    email: "reachus@smartsolutions.com",
    category: "Driver's License",
    status: "pending",
  },
  {
    id: 11,
    orderId: "998877",
    name: "Rahul Banerjee",
    email: "rahul@webcraft.com",
    category: "Divorce order",
    status: "pending",
  },
  {
    id: 12,
    orderId: "445566",
    name: "Priya Nair",
    email: "priya@fastdocs.com",
    category: "Embassy attestation",
    status: "completed",
  },
  {
    id: 13,
    orderId: "112233",
    name: "Sourav Das",
    email: "sourav@legalhub.com",
    category: "Home affairs",
    status: "pending",
  },
  {
    id: 14,
    orderId: "778899",
    name: "Megha Kapoor",
    email: "megha@secureverify.com",
    category: "Apostille",
    status: "completed",
  },
  {
    id: 15,
    orderId: "334455",
    name: "Nikhil Sharma",
    email: "nikhil@digitpro.com",
    category: "Police clearance",
    status: "pending",
  },
];

const intState = {
  isAdd: false,
  isEdit: false,
};

export default function OrdersTable() {
  const [reviewModal, setReviewModal] = useGlobalState(intState);
  const [activeTab, setActiveTab] = useState<"pending" | "completed">(
    "pending"
  );
  const [searchTerm, setSearchTerm] = useState("");

  const from = useForm({
    resolver: zodResolver(order_mn_sc),
    defaultValues: {
      category_name: "",
      service_name: "",
      question_one: "",
      question_two: "",
      question_three: "",
      price: "",
      delivery_status_message: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
  };

  const filteredOrders = ordersData
    .filter((order) => order.status === activeTab)
    .filter(
      (order) =>
        order.orderId.includes(searchTerm) ||
        order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
      <div className=" min-h-[810px]">
        <div className="">
          {/* Search Bar */}
          <div className="p-0 ">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by order id"
                className="lg:w-[40%] pl-10 pr-4 py-3 border rounded-lg "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-end px-6 ">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab("pending")}
                className={`flex-1 py-1 text-center font-medium transition-colors ${
                  activeTab === "pending"
                    ? "text-primary border-b-2 border-primary"
                    : "text-[#888888]"
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setActiveTab("completed")}
                className={`flex-1 py-1 text-center font-medium transition-colors ${
                  activeTab === "completed"
                    ? "text-primary border-b-2 border-primary"
                    : "text-[#888888]"
                }`}
              >
                Completed
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="border rounded-figma-sm mt-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="">
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      User Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Order Id
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Category name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((user, index) => (
                    <tr
                      key={user.id}
                      className={` ${index % 2 === 0 ? "" : ""}`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center shrink-0">
                            <img
                              src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
                              alt={user.name}
                              className="h-8 w-8 rounded-full"
                            />
                          </div>
                          <span className="text-sm text-gray-700">
                            {user.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">
                          {user.orderId}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-[#10B981] underline underline-offset-4">
                          {user.email}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">
                          {user.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="">
                          <DB_eye_Icon
                            onClick={() => setReviewModal("isAdd", true)}
                            className="cursor-pointer"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ============== PENDING MODAL  ============== */}
        {
          activeTab === "pending" &&  <Modal2
          open={reviewModal.isAdd}
          setIsOpen={(v: any) => setReviewModal("isAdd", v)}
          title=""
          titleStyle="text-center"
          className="sm:max-w-2xl"
        >
          <Form className="space-y-4 pt-0" from={from} onSubmit={handleSubmit}>
            <div>
              <h1 className="text-2xl font-bold mb-8">Quote Details</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-bold tracking-wider">
                      Category name
                    </p>
                    <p className="mt-1 text-base text-gray-500">
                      Answer will visible here
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-bold tracking-wider">
                      Service name
                    </p>
                    <p className="mt-1 text-base text-gray-500">
                      Answer will visible here
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div>
                  <p className="text-sm font-bold tracking-wider">Question 1</p>
                  <p className="mt-1 text-base text-gray-500">
                    Answer will visible here
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold tracking-wider">Question 2</p>
                  <p className="mt-1 text-base text-gray-500">
                    Answer will visible here
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm font-bold tracking-wider">Question 3</p>
                <p className="mt-1 text-base text-gray-500">
                  Answer will visible here
                </p>
              </div>

              <div className=" pt-4">
                <p className="text-sm font-bold  tracking-wider py-2">
                  Documents
                </p>

                <div className="relative w-[200px] h-[100px]">
                  <ImgBox
                    src={"/images/documentPhoto.png"}
                    alt="photo"
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <DB_download_cc_Icon className="cursor-pointer" />
                  </span>
                </div>
              </div>

              <div className=" pt-4">
                <p className="text-sm font-bold  tracking-wider py-2">
                  Delivery Options
                </p>
                <div className="w-[55%] bg-secondary rounded p-4">
                  <h1 className="font-medium">Scan & Email Copy Only</h1>
                  <p className="text-xs pt-1 text-gray-500">
                    You’ll receive a scanned copy of your certificate by email.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold  tracking-wider">Total Paid</p>
              <p className="text-gray-500">$665.00</p>
            </div>

            <div>
              <FromTextArea
                className="h-20 bg-secondary"
                name="delivery_status_message"
                placeholder="Add sentences about delivery status..."
                label="Status"
              />
            </div>

            <Button className="bg-primary mb-2 w-full">Mark as Complete</Button>
            <Button
              onClick={() => setReviewModal("isAdd", false)}
              className="bg-gray-200 text-gray-700 w-full"
            >
              Close
            </Button>
          </Form>
        </Modal2>
        }



        {/* ============== COMPLETE MODAL  ============== */}
        {
          activeTab === "completed" &&  <Modal2
          open={reviewModal.isAdd}
          setIsOpen={(v: any) => setReviewModal("isAdd", v)}
          title=""
          titleStyle="text-center"
          className="sm:max-w-2xl"
        >
          <Form className="space-y-4 pt-0" from={from} onSubmit={handleSubmit}>
            <div>
              <h1 className="text-2xl font-bold mb-8">Quote Details</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-bold tracking-wider">
                      Category name
                    </p>
                    <p className="mt-1 text-base text-gray-500">
                      Answer will visible here
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-bold tracking-wider">
                      Service name
                    </p>
                    <p className="mt-1 text-base text-gray-500">
                      Answer will visible here
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 pt-4">
                <div>
                  <p className="text-sm font-bold tracking-wider">Question 1</p>
                  <p className="mt-1 text-base text-gray-500">
                    Answer will visible here
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold tracking-wider">Question 2</p>
                  <p className="mt-1 text-base text-gray-500">
                    Answer will visible here
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm font-bold tracking-wider">Question 3</p>
                <p className="mt-1 text-base text-gray-500">
                  Answer will visible here
                </p>
              </div>

              <div className=" pt-4">
                <p className="text-sm font-bold  tracking-wider py-2">
                  Documents
                </p>

                <div className="relative w-[200px] h-[100px]">
                  <ImgBox
                    src={"/images/documentPhoto.png"}
                    alt="photo"
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <DB_download_cc_Icon className="cursor-pointer" />
                  </span>
                </div>
              </div>

              <div className=" pt-4">
                <p className="text-sm font-bold  tracking-wider py-2">
                  Delivery Options
                </p>
                <div className="w-[55%] bg-secondary rounded p-4">
                  <h1 className="font-medium">Scan & Email Copy Only</h1>
                  <p className="text-xs pt-1 text-gray-500">
                    You’ll receive a scanned copy of your certificate by email.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold  tracking-wider">Total Paid</p>
              <p className="text-gray-500">$665.00</p>
            </div>
            <Button className="bg-primary mb-2 w-full">Send email</Button>
            <Button
              onClick={() => setReviewModal("isAdd", false)}
              className="bg-gray-200 text-gray-700 w-full"
            >
              Close
            </Button>
          </Form>
        </Modal2>
        }
       
      </div>
    </>
  );
}
