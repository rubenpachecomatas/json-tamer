"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FileJson } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui/form";

/*let regex = new RegExp(
  '/^{(("[a-zA-Z0-9]+":"[a-zA-Z0-9]+")(,"[a-zA-Z0-9]+":"[a-zA-Z0-9]+")*)?}$/'
);*/

const formSchema = z.object({
  json: z.string(), //.regex(regex),
});

export default function Home() {
  const [formattedJson, setFormattedJson] = useState("");

  const formatJson = (json: string) => {
    const formatted = JSON.stringify(JSON.parse(json), null, 4);

    setFormattedJson(formatted);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      json: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    formatJson(values.json);
  };

  return (
    <main className="flex h-full flex-col items-center gap-10 p-20">
      <h1 className="text-4xl font-bold flex items-center gap-2">
        Json <FileJson className="size-12" /> Tamer
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col justify-btween gap-4 max-w-lg size-full"
        >
          <FormField
            control={form.control}
            name="json"
            render={({ field }) => (
              <Textarea
                {...field}
                className="size-full"
                placeholder="Enter your json"
              />
            )}
          />
          <div>
            <Button type="submit" className="w-full" size="lg">
              Tame that json!
            </Button>
          </div>
          <Textarea
            className="size-full"
            placeholder="The formatted json will appear here"
            value={formattedJson}
            onChange={() => null}
          />
        </form>
      </Form>
    </main>
  );
}
