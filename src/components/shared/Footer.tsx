"use client";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImgBox } from "../reusable/Img-box";

import assets from "@/assets";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/icon";

interface FormData {
  email: string;
}

const Footer = () => {
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div>
        <div className="container px-4">
          {/* Main content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Left section - Logo and subscription */}
            <div className="col-span-1">
              {/* Logo */}
              <div className="mb-6">
                <div className="bg-white rounded-lg p-3 w-fit">
                  <ImgBox
                    src={assets.footerPhoto}
                    alt="photo"
                    className="w-[100px] h-[100px] rounded-[10px] object-cover"
                  />
                </div>
              </div>

              {/* Tagline */}
              <h3 className="text-base font-semibold mb-3 leading-tight">
                Essential Document Services for a World on the Move.
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Secure your emigration and global documentation through a
                seamless, reliable process designed to give you complete peace
                of mind and unmatched convenience.
              </p>

              {/* Email subscription */}
              <div className="">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col sm:flex-row gap-3 justify-center mb-3"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="placeholder:text-gray-200 h-[40px] border border-t border-slate-600" // Remove text-white here
                  />
                  <Button
                    type="submit"
                    className="bg-white text-black px-8 h-[40px] "
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>

            {/* Quick Links section */}
            <div className="col-span-1">
              <h4 className="text-base font-semibold mb-4">Quick Links</h4>
              <ul className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="text-sm hover:text-white transition-colors text-blue-50"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-sm hover:text-white transition-colors text-blue-50"
                >
                  Service
                </Link>
                <Link
                  href="/news"
                  className="text-sm hover:text-white transition-colors text-blue-50"
                >
                  News
                </Link>
                <Link
                  href="/contact-us"
                  className="text-sm hover:text-white transition-colors text-blue-50"
                >
                  Contact Us
                </Link>
              </ul>
            </div>

            {/* Essential Links section */}
            <div className="col-span-1">
              <h4 className="text-base font-semibold mb-4">Essential Links</h4>
              <ul className="flex flex-col space-y-3">
                <Link
                  href="/privacy-policy"
                  className="text-sm hover:text-white transition-colors text-blue-50"
                >
                  Privacy policy
                </Link>
                <Link
                  href="/terms-and-condition"
                  className="text-sm hover:text-white transition-colors text-blue-50"
                >
                  Terms & conditions
                </Link>
                <Link
                  href="/faq"
                  className="text-sm hover:text-white transition-colors text-blue-50"
                >
                  FAQ
                </Link>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom - Copyright and social icons */}
        <div className="border-t border-slate-600 pt-6">
          <div className="container px-4  flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-white">
              <span className="text-lg">©</span>
              <span>Copyright of DocAssist. {new Date().getFullYear()}</span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <Link href="#facebook">
                <FacebookIcon className="size-12" />
              </Link>
              <Link href="#Instagram">
                <InstagramIcon className="size-12" />
              </Link>
              <Link href="#Instagram">
                <YoutubeIcon className="size-12" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
