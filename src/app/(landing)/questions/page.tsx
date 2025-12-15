"use client";

import { Button } from "@/components/ui";
import { QuestionIcon_cc } from "@/icon";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormData {
  question1: "Yes" | "No" | ""; // Only one can be selected
  question2: string;
  question3: string;
  question4: string[]; // Multiple selectable
}

export default function MultiQuestionForm() {
    const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    question1: "",
    question2: "",
    question3: "",
    question4: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      const value = (e.target as HTMLInputElement).value;

      if (name === "question4") {
        setFormData((prev) => ({
          ...prev,
          question4: checked
            ? [...prev.question4, value]
            : prev.question4.filter((item) => item !== value),
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleQuestion1Change = (value: "Yes" | "No") => {
    setFormData((prev) => ({ ...prev, question1: value }));
  };

  const handleNext = () => {
    // console.log("Form Data:", formData);
router.push('/upload-files')
  };

  return (
    <div className="flex items-center justify-center md:pt-[35px] xl:pt-[48px]">
      <div className="container px-4 space-y-3 xl:px-60">
        <div className="flex justify-center items-center md:pb-8">
          <QuestionIcon_cc />
        </div>

        {/* Question 1 - Yes/No (Single Selection) */}
        <div className="bg-secondary p-4 rounded-figma-sm">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Question 1 <span className="text-black">*</span>
          </label>
          <p className="text-base md:text-lg font-medium text-gray-900 mb-6">
            Are you a South African citizen?
          </p>
          <div className="flex flex-wrap gap-8">
            {(["Yes", "No"] as const).map((option) => (
              <label
                key={option}
                className="flex items-center cursor-pointer text-base"
              >
                <input
                  type="checkbox"
                  name="question1"
                  value={option}
                  checked={formData.question1 === option}
                  onChange={() => handleQuestion1Change(option)}
                  className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-3">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Question 2 - Age */}
        <div className="bg-secondary p-4 rounded-figma-sm">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Question 2 <span className="text-black">*</span>
          </label>
          <p className="text-base md:text-lg font-medium text-gray-900 mb-6">
            What is your age?
          </p>
          <input
            type="number"
            name="question2"
            value={formData.question2 || ""}
            onChange={handleChange}
            placeholder="Type your age here"
            min="0"
            className="w-full px-4 py-3 bg-white rounded-figma-sm border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus:border-0"
          />
        </div>

        {/* Question 3 - About Yourself */}
        <div className="bg-secondary p-4 rounded-figma-sm">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Question 3 <span className="text-black">*</span>
          </label>
          <p className="text-base md:text-lg font-medium text-gray-900 mb-6">
            Write about yourself
          </p>
          <textarea
            name="question3"
            value={formData.question3 || ""}
            onChange={handleChange}
            placeholder="Type here..."
            rows={5}
            className="w-full px-4 py-3 bg-white rounded-figma-sm resize-none border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus:border-0"
          />
        </div>

        {/* Question 4 - Multiple Choice Checkboxes */}
        <div className="bg-secondary p-4 rounded-figma-sm">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Question 4
          </label>
          <p className="text-base md:text-lg font-medium text-gray-900 mb-6">
            Application question goes here.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-6">
            {["Option 1", "Option 2", "Option 3", "Option 4"].map((option) => (
              <label
                key={option}
                className="flex items-center cursor-pointer text-base"
              >
                <input
                  type="checkbox"
                  name="question4"
                  value={option}
                  checked={formData.question4.includes(option)}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="ml-3">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pb-6">
          <Button
            onClick={handleNext}
            icon={true}
            className="rounded-full px-8 py-3 text-lg"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
