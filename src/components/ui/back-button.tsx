
import { cn } from "@/lib/utils"; // adjust path if needed

interface BackButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const BackButton = ({ text, className, onClick }: BackButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center cursor-pointer text-gray-700 hover:text-gray-900 font-medium transition-colors",
        className
      )}
    >
      <span>
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="mask0_99_1016">
            <rect width="27" height="27" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_99_1016)">
            <path
              d="M15.75 20.25L9 13.5L15.75 6.75L17.325 8.325L12.15 13.5L17.325 18.675L15.75 20.25Z"
              fill="#213D49"
            />
          </g>
        </svg>
      </span>
      <span>{text}</span>
    </button>
  );
};

export default BackButton;
