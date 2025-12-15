import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";

type AvatarsProps = {
  className?: string;
  alt: string;
  src: string | StaticImageData;
  imgstyle?: string;
  fallbackStyle?: string;
  fallback?: string;
};

export default function Avatars({
  className,
  alt,
  src,
  imgstyle,
  fallbackStyle,
  fallback,
}: AvatarsProps) {
  // src
    const srcString = typeof src === 'string' ? src : src.src;
  return (
    <Avatar className={cn("size-8 2xl:size-8", className)}>
      <AvatarImage className={imgstyle} src={srcString} alt={alt} />
      <AvatarFallback
        className={cn(
          "",
          fallbackStyle
        )}
      >
        {fallback?.charAt(0)?.toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
