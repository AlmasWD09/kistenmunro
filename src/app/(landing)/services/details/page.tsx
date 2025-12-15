"use client";

import IconBox from "@/components/reusable/Icon-box";
import FavIcon from "@/favicon/favicon";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="border rounded-figma-sm! p-4">
        {/* MAIN SERVICE BOX */}
        <div className=" space-y-6">
          <div>
            <h2 className="text-xl font-semibold">
              Standard Police Clearance (PCC) — For Australia / New Zealand /
              Canada
            </h2>

            <p className="text-gray-700 text-sm leading-relaxed">
              Fast, easy, and reliable assistance for South Africans who need a
              Police Clearance Certificate for Australia / New Zealand / Canada.
            </p>
          </div>

          {/* WHO THIS SERVICE IS FOR */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Who This Service Is For :</h3>
            <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
              <li>Citizens & Residents of South Africa</li>
              <li>
                Individuals applying for Australia, New Zealand and Canada
              </li>
              <li>Work visa / immigration applicants</li>
            </ul>
          </div>

          {/* WHAT YOU NEED */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">What You Need To Do :</h3>
            <div>
              <p>Add this service to your cart and complete payment.</p>
              <p>
                Keep your payment reference number safe — you’ll need it when
                sending your documents.
              </p>
              <p>
                Go to your nearest SAPS station to roll your fingerprints and
                pay the SAPS fee (R190.00).
              </p>
              <p>
                If you want your maiden name or previous surnames included,
                attach your marriage certificate, divorce order, or official
                name-change documents.
              </p>
              <p>
                Send scans of all documents to your Doc Assist consultant, then
                courier the originals to us:
              </p>
            </div>
          </div>

          {/* ADDRESS SECTION */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Address :</h3>
            <p className="text-sm text-gray-700 leading-relaxed">Doc Assist</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              213 Richard Street
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Unit 6 – Suite 2A
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Hatfield, 0083
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Tel: 012 430 2221
            </p>
          </div>

          {/* INCLUDE YOUR PACKET SECTION */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">
              Include In Your Courier Package:
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Original fingerprint form (in an envelope)
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Two copies of your ID or passport (not certified)
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Proof of SAPS payment (R190.00)
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Marriage or name-change documents (if applicable)
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Your payment reference number
            </p>
          </div>

          {/* WHY CHOOSE US SECTION */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">What We Do For You:</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Submit your PCC application to the SAPS Criminal Record Centre
              (CRC)
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Track and follow up on your application until completion
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Collect and scan your certificate for you to verify
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Courier the original certificate to you (if selected)
            </p>
          </div>
        </div>

        {/* Why Choose Doc Assist: */}
        <div className=" space-y-2 mt-8">
          <div>
            <h3 className="font-semibold text-lg">Why Choose Doc Assist:</h3>
            <p className="text-sm text-gray-700 mt-1">
              We handle the entire process so you don’t need to deal with long
              queues or delays at police stations.
            </p>
            <p className="text-sm text-gray-700 mt-1">
              Our team ensures your application is correctly submitted and
              continuously monitored — saving you time and avoiding unnecessary
              delays.
            </p>
          </div>
        </div>

        {/* Important Notes: */}
        <div className=" space-y-2 mt-8">
          <div>
            <h3 className="font-semibold text-lg">Important Notes:</h3>
            <p className="text-sm text-gray-700 mt-1">
              Processing times depend on SAPS and are not guaranteed.
            </p>
            <p className="text-sm text-gray-700 mt-1">
              No refunds for SAPS/CRC delays.
            </p>
            <p className="text-sm text-gray-700 mt-1">
              A single courier fee applies for multiple PCC requests.
            </p>
            <p className="text-sm text-gray-700 mt-1">
              The Police Clearance Certificate will reflect any criminal record.
            </p>
            <p className="text-sm text-gray-700 mt-1">
              Expungement is only possible after 10 years have passed since
              conviction.
            </p>
          </div>
        </div>
      </div>

      {/* Approximate timeline */}
      <div className="border border-gray-200 p-4 rounded-figma-sm! mt-8">
        <h3 className="font-semibold text-lg mb-3">Approximate timeline</h3>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center bg-secondary rounded-figma-sm! p-3">
          <div>
            <h1 className="font-bold">Processing Time</h1>
            <p>
              {" "}
              Processing times depend entirely on the South African Police
              Service (SAPS) Criminal Record Centre (CRC).
            </p>
          </div>

          <div>
            <h1 className="font-bold">Approximately 15–20 working days</h1>
          </div>
        </div>
      </div>

      {/* SERVICES INCLUDED */}
      <div className="border border-gray-200 p-4 rounded-figma-sm! mt-8">
        <h3 className="font-semibold text-lg mb-3">Service Included</h3>

        <div className="grid md:grid-cols-2  gap-4">
          {/* SERVICE 1 */}
          <div className="p-6 rounded-figma-sm! bg-secondary flex flex-col md:flex-row md:items-center gap-4">
            {/* Text content */}
            <div>
              <h4 className="font-semibold mb-1">Doc Assist Service</h4>
              <p className="text-sm text-gray-700 mb-3">
                This is our handling fee for managing your Police Clearance
                application from start to finish.
              </p>
              <p className="font-semibold">R690.00</p>
            </div>
          </div>

          {/* SERVICE 2 */}
          <div className="p-6 rounded-figma-sm! bg-secondary flex flex-col md:flex-row md:items-center gap-4">
            {/* Text content */}
            <div>
              <h4 className="font-semibold mb-1">SAPS</h4>
              <p className="text-sm text-gray-700 mb-3">
                This is the official government charge, payable directly to SAPS
                at your local police station or via EFT. It is not included in
                our service fee.
              </p>
              <p className="font-semibold">R190.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery options */}
      <div className="border border-gray-200 p-4 rounded-figma-sm! mt-8">
        <h3 className="font-semibold text-lg mb-3">Delivery options</h3>

        <div className="grid md:grid-cols-2 xl:grid-cols-3  gap-4">
          {/* delivery 1 */}
          <div className="p-6 rounded-figma-sm! bg-secondary flex flex-col md:flex-row md:items-center gap-4">
            {/* Checkbox */}
            <input
              type="checkbox"
              className="shrink-0 w-10 h-10 rounded-figma-sm border-gray-300 focus:ring-0 cursor-pointer"
            />

            {/* Text content */}
            <div>
              <h4 className="font-semibold mb-1">Scan & Email Copy Only</h4>
              <p className="text-sm text-gray-700 mb-3">
                You’ll receive a scanned copy of your certificate by email.
              </p>
              <p className="font-semibold">Free (R0.00)</p>
            </div>
          </div>

          {/* delivery 2 */}
          <div className="p-6 rounded-figma-sm! bg-secondary flex flex-col md:flex-row md:items-center gap-4">
            {/* Checkbox */}
            <input
              type="checkbox"
              className="shrink-0 w-10 h-10 rounded-figma-sm border-gray-300 focus:ring-0 cursor-pointer"
            />

            {/* Text content */}
            <div>
              <h4 className="font-semibold mb-1">
                Courier Delivery – South Africa
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Door-to-door delivery to any address within South Africa.
              </p>
              <p className="font-semibold">R290.00</p>
            </div>
          </div>

          {/* delivery 3 */}
          <div className="p-6 rounded-figma-sm! bg-secondary flex flex-col md:flex-row md:items-center gap-4">
            {/* Checkbox */}
            <input
              type="checkbox"
              className="shrink-0 w-10 h-10 rounded-figma-sm border-gray-300 focus:ring-0 cursor-pointer"
            />

            {/* Text content */}
            <div>
              <h4 className="font-semibold mb-1">
                Courier Delivery – Overseas
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Door-to-door international delivery
              </p>
              <p className="font-semibold">R890.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* ADD CART BUTTON */}
      <Link href={'/questions'}>
        <button className="cursor-pointer w-full flex items-center justify-between rounded-full bg-[#1F3B47] px-1 py-1 mt-6">
          <span className="flex-1 text-center text-white text-sm font-bold">
            Add to cart
          </span>

          <span className="flex items-center gap-2 bg-white text-[#1F3B47] rounded-full px-2 py-1 text-sm font-medium">
            <IconBox className="rounded-full">
              <FavIcon name="shopping_cc" />
            </IconBox>
            R 0.00
          </span>
        </button>
      </Link>
    </div>
  );
}
