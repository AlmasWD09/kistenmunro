"use client";

import React, { useState } from "react";
import { Minus, Plus, Pencil, Trash2, Truck, ArrowRight } from "lucide-react";
import SubTitle from "@/components/reusable/title";
import {
  Delete_cc_icon,
  Edit_cc_icon,
  Minus_tb_icon,
  Order_car_Icon,
  Order_Tb_Icon,
  Plus_tb_icon,
} from "@/icon";
import { Button } from "@/components/ui";
import Link from "next/link";

interface CartItem {
  id: string;
  service: string;
  price: number;
  quantity: number;
  deliveryOption: string;
  deliveryPrice: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      service: "Doc Assist Service",
      price: 490.0,
      quantity: 1,
      deliveryOption: "Courier Delivery — South Africa",
      deliveryPrice: 290.0,
    },
    {
      id: "2",
      service: "Doc Assist Service",
      price: 490.0,
      quantity: 1,
      deliveryOption: "Courier Delivery — South Africa",
      deliveryPrice: 290.0,
    },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.price + item.deliveryPrice) * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 pt-[35px] xl:pt-[48px] xl:mb-20">
      <div className="">
        <div className="pb-8">
          <SubTitle svg={false} text="Cart" />
        </div>

        {/* Desktop Table Header */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 mb-4 text-sm text-gray-600 font-medium px-6">
          <div className="col-span-3 ">Service</div>
          <div className="col-span-2 text-center">Quantity</div>
          <div className="col-span-3">Delivery option</div>
          <div className="col-span-2 text-center">Price</div>
          <div className="col-span-2 text-center">Action</div>
        </div>

        {/* Cart Items */}
        <div className="space-y-3 mb-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-secondary rounded-figma-sm p-3">
              {/* Desktop Layout */}
              <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-center">
                {/* Service */}
                <div className="col-span-3 flex items-center gap-3">
                  <Order_Tb_Icon />
                  <div>
                    <p className=" text-gray-900">{item.service}</p>
                    <p className="text-sm font-bold">
                      R{item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Quantity */}
                <div className="col-span-2 ">
                  <div className="bg-white flex items-center justify-between rounded-full gap-3">
                    <Minus_tb_icon />
                    <span className="text-gray-900 font-medium w-8 text-center">
                      {item.quantity}
                    </span>
                    <Plus_tb_icon />
                  </div>
                </div>

                {/* Delivery Option */}
                <div className="col-span-3 flex items-center gap-3">
                  <Order_Tb_Icon className="shrink-0" />

                  <div>
                    <p className="font-medium text-gray-900">
                      {item.deliveryOption}
                    </p>
                    <p className="text-sm text-gray-600">
                      R{item.deliveryPrice.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="col-span-2 text-center">
                  <p className="font-semibold text-gray-900">
                    R
                    {(
                      (item.price + item.deliveryPrice) *
                      item.quantity
                    ).toFixed(2)}
                  </p>
                </div>

                {/* Actions */}
                <div className="col-span-2 flex items-center justify-center gap-2">
                  <Edit_cc_icon />
                  <Delete_cc_icon />
                </div>
              </div>

              {/* Mobile & Tablet Layout */}
              <div className="lg:hidden space-y-6">
                {/* Service */}
                <span className="text-xl font-semibold text-gray-600 text-center">
                  Quantity
                </span>
                <div className="flex flex-col md:flex-row items-start justify-between md:mt-4">
                  <div className="flex items-center gap-3">
                    <Order_Tb_Icon className="shrink-0 w-[40px]" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {item.service}
                      </p>
                      <p className="text-sm text-gray-600">
                        R{item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end  w-full gap-2">
                    <Edit_cc_icon className="w-[40px]" />
                    <Delete_cc_icon className="w-[40px]" />
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex justify-end">
                  <div className="flex items-center justify-between">
                    <div className="bg-white flex items-center justify-between rounded-full gap-3">
                      <Minus_tb_icon className="w-[40px]" />
                      <span className="text-gray-900 font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <Plus_tb_icon className="w-[40px]" />
                    </div>
                  </div>
                </div>

                {/* Delivery */}
                <div className="flex items-start gap-3 pt-2 border-t border-gray-100">
                  <Order_car_Icon className="shrink-0 w-[40px]" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">
                      {item.deliveryOption}
                    </p>
                    <p className="text-sm text-gray-600">
                      R{item.deliveryPrice.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-sm text-gray-600">Price</span>
                  <p className="font-semibold text-gray-900">
                    R
                    {(
                      (item.price + item.deliveryPrice) *
                      item.quantity
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-secondary rounded-figma-sm p-4 max-w-md ml-auto">
          <div className="space-y-3 mb-6">
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Total items:</span>
              <span className="font-medium">{totalItems}</span>
            </div>
            <div className="flex justify-between  text-lg font-semibold">
              <span>Subtotal:</span>
              <span>R{subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500">
              Taxes & shipping will be calculated at checkout
            </p>
          </div>

          <Link href={"/questions"}>
            <Button
              className="w-full h-12 rounded-full"
              size={"lg"}
              icon={true}
            >
              Go for checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
