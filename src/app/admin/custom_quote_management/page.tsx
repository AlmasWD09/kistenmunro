"use client";

import { useState } from "react";

import { DB_delete_Icon, DB_download_cc_Icon, DB_eye_Icon } from "@/icon";
import { useGlobalState } from "@/hooks";
import Modal2 from "@/components/reusable/modal2";
import { Button } from "@/components/ui";
import { ImgBox } from "@/components/reusable/Img-box";

const initialUsers = [
  {
    id: 1,
    name: "Abir Hossain",
    email: "abid32@gmail.com",
    category: "Police clearance",
    avatar: null,
  },
  {
    id: 2,
    name: "Maksud Bhuiya",
    email: "user123@example.com",
    category: "Home affairs",
    avatar: null,
  },
  {
    id: 3,
    name: "Arjun Patel",
    email: "hello@creativeoutlook.com",
    category: "Divorce order",
    avatar: null,
  },
  {
    id: 4,
    name: "Sita Sharma",
    email: "info@innovativeideas.com",
    category: "Apostille",
    avatar: null,
  },
  {
    id: 5,
    name: "Kiran Mehta",
    email: "support@techsolutions.com",
    category: "Embassy attestation",
    avatar: null,
  },
  {
    id: 6,
    name: "Ravi Kumar",
    email: "contact@brightfuture.com",
    category: "Driver's License",
    avatar: null,
  },
  {
    id: 7,
    name: "Anita Desai",
    email: "admin@yourdomain.com",
    category: "Police clearance",
    avatar: null,
  },
  {
    id: 8,
    name: "Anita Desai",
    email: "admin@yourdomain.com",
    category: "Apostille",
    avatar: null,
  },
  {
    id: 9,
    name: "Deepak Singh",
    email: "reachus@smartsolutions.com",
    category: "Home affairs",
    avatar: null,
  },
  {
    id: 10,
    name: "Deepak Verma",
    email: "reachus@smartsolutions.com",
    category: "Driver's License",
    avatar: null,
  },
  {
    id: 11,
    name: "Deepak Verma",
    email: "reachus@smartsolutions.com",
    category: "Embassy attestation",
    avatar: null,
  },
];

const intState = {
  isAdd: false,
  isEdit: false,
};

const CustomQuoteManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [reviewModal, setReviewModal] = useGlobalState(intState);

  return (
    <div className="border rounded-figma-sm">
      <div className="">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="">
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  User Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id} className={` ${index % 2 === 0 ? "" : ""}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center shrink-0">
                        <img
                          src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
                          alt={user.name}
                          className="h-8 w-8 rounded-full"
                        />
                      </div>
                      <span className="text-sm text-gray-700">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{user.email}</span>
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

      {/* ============== add on  ============== */}
      <Modal2
        open={reviewModal.isAdd}
        setIsOpen={(v: any) => setReviewModal("isAdd", v)}
        title=""
        titleStyle="text-center"
        className="sm:max-w-xl"
      >
        <div>
          <h1 className="text-2xl font-bold mb-8">Quote Details</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-bold ">Category name</p>
              <p className="mt-1 text-base text-gray-500">Shadjfh djbfds</p>
            </div>
            <div>
              <p className="text-sm font-bold ">Customer Email</p>
              <p className="mt-1 text-base text-gray-500">dbfusb@gmail.com</p>
            </div>
          </div>

          <div className="space-y-6 pt-8">
            <div>
              <p className="text-sm font-bold ">Contact number</p>
              <p className="mt-1 text-base text-gray-500">
                +99852 051842 454584
              </p>
            </div>

            <div>
              <p className="text-sm font-bold ">Document request</p>
              <p className="mt-1 text-base text-gray-500">
                Answer will visible here
              </p>
            </div>

            <div className="w-full">
              <p className="text-sm font-bold ">
                On completion, to which country do we need to return the
                documents to?
              </p>
              <p className="mt-1 text-base text-gray-500">
                Answer will visible here
              </p>
            </div>
            <div>
              <p className="text-sm font-bold ">
                Country that documents will be used for (eg. China, UAE, New
                Zealand)?
              </p>
              <p className="mt-1 text-base text-gray-500">
                Answer will visible here
              </p>
            </div>
            <div>
              <p className="text-sm font-bold ">
                Country that you are currently staying in (eg. China, UAE, New
                Zealand)?
              </p>
              <p className="mt-1 text-base text-gray-500">
                Answer will visible here
              </p>
            </div>
          </div>
        </div>

        <Button className="bg-primary mb-2 w-full mt-8">Send email</Button>
        <Button
          onClick={() => setReviewModal("isAdd", false)}
          className="bg-gray-200 text-gray-700 w-full"
        >
          Close
        </Button>
      </Modal2>
    </div>
  );
};

export default CustomQuoteManagement;
