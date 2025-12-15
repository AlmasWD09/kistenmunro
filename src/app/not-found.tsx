"use client";


import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="h-screen bg-secondary flex justify-center items-center text-center">
      <div className="space-y-3">
        <div>
     
        </div>
        <p>Oops... page not found</p>

        <Button icon={true} onClick={() => router.back()}>
          Go back
        </Button>
      </div>
    </div>
  );
}
