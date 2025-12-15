"use client";

import { Button } from "@/components/ui";
import BackButton from "@/components/ui/back-button";
import { useRouter } from "next/navigation";

const ServiceDetails = () => {
  const router = useRouter();
  return (
    <div>
      <BackButton
        text="Back"
        onClick={() => router.back()}
        className="text-lg py-2 px-4 rounded-lg "
      />

      <div className="space-y-6 border p-4 rounded-lg mt-10">
        <div>
          <h1 className="font-semibold">
            Standard Police Clearance (PCC) – For Australia / New Zealand
            /Canada
          </h1>
          <p className="text-gray-500">
            Fast, easy, and reliable assistance for South Africans who need a
            Police Clearance Certificate for Australia / New Zealand / Canada.
          </p>
        </div>

        <div>
          <h1 className="font-semibold">Who This Service Is For:</h1>
          <ul className="list-disc list-inside">
            <li>Clients still living in South Africa</li>
            <li>People relocating to Australia , New Zealand and Canada</li>
            <li>Visa, work, or employment applications</li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold">What You Need To Do:</h1>
          <p>Add this service to your cart and complete payment.</p>
          <p>
            Keep your payment reference number safe — you’ll need it when
            sending your documents.
          </p>
          <p>
            Go to your nearest SAPS station to roll your fingerprints and pay
            the SAPS fee (R190.00).
          </p>
          <p>
            If you want your maiden name or previous surnames included, attach
            your marriage certificate, divorce order, or official name-change
            documents.
          </p>
          <p>
            Send scans of all documents to your Doc Assist consultant, then
            courier the originals to us:
          </p>
        </div>

        <div>
          <h1 className="font-semibold">Address</h1>
          <p>Doc Assist</p>
          <p> 213 Richard Street</p>
          <p> Unit 6 – Suite 2A</p>
          <p> Hatfield, 0083</p>
          <p> Tel: 012 430 2221</p>
        </div>

        <div>
          <h1 className="font-semibold">Include in your courier package:</h1>
          <p>Original fingerprint form (in an envelope)</p>
          <p>Two copies of your ID or passport (not certified)</p>
          <p>Proof of SAPS payment (R190.00)</p>
          <p>Marriage or name-change documents (if applicable)</p>
          <p>Your payment reference number</p>
        </div>

        <div>
          <h1 className="font-semibold">What We Do For You:</h1>
          <p>
            Submit your PCC application to the SAPS Criminal Record Centre (CRC)
          </p>
          <p>Track and follow up on your application until completion</p>
          <p>Collect and scan your certificate for you to verify</p>
          <p>Courier the original certificate to you (if selected)</p>
        </div>

        <div>
          <h1 className="font-semibold">Why Choose Doc Assist:</h1>
          <p>
            We handle the entire process so you don’t need to deal with long
            queues or delays at police stations.
          </p>
          <p>
            {" "}
            Our team ensures your application is correctly submitted and
            continuously monitored — saving you time and avoiding unnecessary
            delays.
          </p>
        </div>

        <div>
          <h1 className="font-semibold">Important Notes:</h1>
          <p>Processing times depend on SAPS and are not guaranteed.</p>
          <p>No refunds for SAPS/CRC delays.</p>
          <p>A single courier fee applies for multiple PCC requests.</p>
          <p>
            The Police Clearance Certificate will reflect any criminal record.
          </p>
          <p>
            Expungement is only possible after 10 years have passed since
            conviction.
          </p>
        </div>
      </div>

      <div className=" border p-4 rounded-lg mt-4">
        <h1 className="font-semibold pb-1">Approximate timeline</h1>
        <div className="bg-secondary p-4 rounded-lg flex justify-between items-center">
          <div>
            <h2 className="font-medium">Processing Time</h2>
            <p>
              Processing times depend entirely on the South African Police
              Service (SAPS) Criminal Record Centre (CRC).
            </p>
          </div>
          <div>
            <h1 className="font-semibold">15–20 working days</h1>
          </div>
        </div>
      </div>

      <div className=" border p-4 rounded-lg mt-4">
        <h1 className="font-semibold pb-1">Service included</h1>
        <div className="bg-secondary p-4 rounded-lg flex justify-between items-center">
          <div>
            <h2 className="font-medium">Doc Assist Service</h2>
            <p className="text-gray-500">
              This is our handling fee for managing your Police Clearance
              application from start to finish.
            </p>
            <h2 className="font-medium">R690.00</h2>
          </div>
        </div>

        <div className="bg-secondary p-4 rounded-lg flex justify-between items-center mt-4">
          <div>
            <h2 className="font-medium">SAPS</h2>
            <p className="text-gray-500">
              This is the official government charge, payable directly to SAPS
              at your local police station or via EFT. It is not included in our
              service fee.
            </p>
            <h2 className="font-medium">R190.00</h2>
          </div>
        </div>
      </div>

      <div className=" border p-4 rounded-lg mt-4">
        <h1 className="font-semibold pb-1">Delivery options</h1>
        <div className="bg-secondary p-4 rounded-lg flex justify-between items-center">
          <div>
            <h2 className="font-medium">Scan & Email Copy Only</h2>
            <p className="text-gray-500">
             You’ll receive a scanned copy of your certificate by email.
            </p>
            <h2 className="font-medium">Free (R0.00)</h2>
          </div>
        </div>

        <div className="bg-secondary p-4 rounded-lg flex justify-between items-center mt-4">
          <div>
            <h2 className="font-medium">Courier Delivery – South Africa</h2>
            <p className="text-gray-500">
               Door-to-door delivery to any address within South Africa.
            </p>
            <h2 className="font-medium">R290.00</h2>
          </div>
        </div>

        <div className="bg-secondary p-4 rounded-lg flex justify-between items-center mt-4">
          <div>
            <h2 className="font-medium">Courier Delivery – Overseas</h2>
            <p className="text-gray-500">
               Door-to-door international delivery
            </p>
            <h2 className="font-medium">R890.00</h2>
          </div>
        </div>
      </div>


      <div className="mx-4 mt-10">
        <Button
        onClick={()=> router.push('/admin/category-management/add-service-step~one')}
        className="w-full h-11">Edit</Button>
        <Button className="w-full h-11 bg-secondary text-gray-500 mt-3">Delete Service</Button>
      </div>
    </div>
  );
};

export default ServiceDetails;
