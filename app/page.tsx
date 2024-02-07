"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [json, setJson] = useState("");
  const [formattedJson, setFormattedJson] = useState("");

  const formatJson = () => {
    const formatted = JSON.stringify(JSON.parse(json), null, 4);

    setFormattedJson(formatted);
  };

  return (
    <main className="flex h-full flex-col items-center gap-10 p-24">
      <h1 className="text-2xl font-bold">Json Tamer</h1>
      <div className="flex flex-col justify-between gap-4 max-w-lg size-full">
        <Textarea
          className="size-full"
          placeholder="Enter your json"
          value={json}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setJson(e.target.value)
          }
        />
        <div>
          <Button className="w-full" size="lg" onClick={formatJson}>Tame that json!</Button>
        </div>
        <Textarea
          className="size-full"
          placeholder="The formatted json will appear here"
          value={formattedJson}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setFormattedJson(e.target.value)
          }
        />
      </div>
    </main>
  );
}
