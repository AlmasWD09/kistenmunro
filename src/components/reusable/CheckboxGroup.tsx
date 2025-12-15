

"use client"
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const technologies = [
  { name: "yes", label: "Yes" },
  { name: "no", label: "NO" },
];

export default function CheckboxGroup() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleCheckedChange = (checked: boolean, value: string) => {
    if (checked) {
      setSelected(value);
    } else {
      setSelected(null); 
    }
  };

  return (
    <div>
      <div className="mt-4 flex justify-center items-center gap-8 flex-wrap">
        {technologies.map(({ name, label }) => (
          <div key={name} className="flex items-center gap-2">
            <Checkbox
              id={name}
              checked={selected === name} 
              onCheckedChange={(checked) => handleCheckedChange(checked as boolean, name)}
            />
            <label
              htmlFor={name}
              className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}