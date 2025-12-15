
"use client";

import { useState } from "react";
import { Button, ScrollArea } from "../ui";
import TextEditor from "../reusable/text-editor";

const PrivacyPolicy = () => {
  const [content, setContent] = useState<string>("");

  return (
    <div>
      <div className="mt-4">
        <ScrollArea className="h-72">
          <TextEditor
            value={content}
            onChange={setContent}
            className="border rounded-lg p-2"
          />
        </ScrollArea>
        <div className="mt-6">
          <Button className="w-full h-11">Update</Button>
        </div>
      </div>

      {/* Preview section with HTML rendering */}
      <div className="mt-20">
        <h1 className="font-semibold mb-2">Preview update content:</h1>
        <div className="">
          {content ? (
            <div 
              dangerouslySetInnerHTML={{ __html: content }}
              className="prose max-w-none"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;