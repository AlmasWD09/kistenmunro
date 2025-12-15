"use client";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ImageIcon, XCircleIcon } from "lucide-react";
import Image from "next/image";
import Dropzone from "react-dropzone";

interface ProfilePictureUploaderProps {
  file: File | null;
  previewUrl: string | null;
  onChange: (file: File | null, url: string | null) => void;
  label?: string;
}

const ImagePreview = ({
  url,
  onRemove,
}: {
  url: string;
  onRemove: () => void;
}) => (
  <div className="relative aspect-square">
    <button
      className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-full"
      onClick={(e) => {
        e.stopPropagation();
        onRemove();
      }}
    >
      <XCircleIcon className="h-6 w-6 fill-red-500 text-white drop-shadow-md" />
    </button>
    <Image
      src={url}
      height={500}
      width={500}
      alt="Profile preview"
      className="border border-border h-full w-full rounded-md object-cover"
    />
  </div>
);

export default function ProfilePictureUploader({
  file,
  previewUrl,
  onChange,
  label = "Profile Picture",
}: ProfilePictureUploaderProps) {
  // মূল লজিক: previewUrl থাকলে সবসময় image দেখাবে (default বা uploaded)
  const hasImage = !!previewUrl;

  return (
    <div className="w-full max-w-40">
      <Label htmlFor="profile">{label}</Label>
      <div className="mt-2">
        {hasImage ? (
          <ImagePreview
            url={previewUrl!}
            onRemove={() => onChange(null, null)} // remove করলে file ও url null
          />
        ) : (
          <Dropzone
            onDrop={(acceptedFiles) => {
              const file = acceptedFiles[0];
              if (file) {
                const url = URL.createObjectURL(file);
                onChange(file, url);
              }
            }}
            accept={{
              "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif"],
            }}
            maxFiles={1}
          >
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
              <div
                {...getRootProps()}
                className={cn(
                  "border-2 border-dashed rounded-md flex items-center justify-center aspect-square cursor-pointer transition-all",
                  "hover:border-primary/70",
                  isDragActive && isDragReject
                    ? "border-destructive bg-destructive/10"
                    : isDragActive
                    ? "border-primary bg-primary/5"
                    : "border-border"
                )}
              >
                <input {...getInputProps()} id="profile" />
                <ImageIcon
                  className={cn(
                    "h-12 w-12",
                    isDragActive && isDragReject
                      ? "text-destructive"
                      : isDragActive
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  strokeWidth={1.5}
                />
              </div>
            )}
          </Dropzone>
        )}
      </div>
    </div>
  );
}