"use client";

import IconBox from "@/components/reusable/Icon-box";
import SubTitle from "@/components/reusable/title";
import FavIcon from "@/favicon/favicon";

type NotificationType = "default" | "tapToView" | "success" | "error";

const notifications = [
  {
    title: "Order placed successfully",
    date: "10th Nov, 2025 at 05:30 PM",
    type: "default",
    hasImage: true,
    read: false,
  },
  {
    title: "Order completed successfully",
    date: "10th Nov, 2025 at 05:30 PM",
    type: "success",
    hasImage: true,
    read: false,
  },
  {
    title: 'Delivery request from "John Doe"',
    date: "10th Nov, 2025 at 05:30 PM",
    type: "tapToView",

    showTapToView: true,
    hasImage: true,
    read: false,
  },
  {
    title: "Your order has been accepted by the vendor",
    date: "10th Nov, 2025 at 05:30 PM",
    type: "success",
    hasText: true,
    read: false,
  },
  {
    title: "Your order has been declined by the vendor",
    date: "10th Nov, 2025 at 05:30 PM",
    type: "error",
    hasText: true,
    read: true,
  },
];

const getTextColor = (type: NotificationType) => {
  switch (type) {
    case "success":
      return "text-[#2D9D1E]";
    case "tapToView":
      return "text-[#008BC0]";
    case "error":
      return "text-[#FF5445]";
    default:
      return "text-foreground";
  }
};

const Notification = () => {
  return (
    <div className="">
      <SubTitle svg={false} className="text-2xl my-4" text="Notification" />

      <div className="space-y-3">
        {notifications.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row sm:items-center justify-between 
                       bg-muted/50 py-4 px-4 rounded-lg gap-4 sm:gap-0  ${
                         item.showTapToView ? "cursor-pointer" : ""
                       }`}
          >
            {/* LEFT SIDE */}
            <div className="flex items-start sm:items-center gap-4">
              <IconBox>
                <FavIcon name="noti" />
              </IconBox>

              <div className="flex flex-col">
                <span
                  className={`font-medium ${getTextColor(
                    item.type as NotificationType
                  )}`}
                >
                  {item.title}
                </span>

                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <span>{item.date}</span>

                  {item.showTapToView && (
                    <>
                      <span>•</span>
                      <span>Tap to view</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE ICON */}
            <div className="text-foreground flex sm:block justify-end w-full sm:w-auto">
              {item.read ? (
                <FavIcon name="message_read" />
              ) : (
                <FavIcon name="message_unread" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
