import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formatJson, minifyJson } from "../utils/JsonForm.utils";

const formSchema = z.object({
  json: z
    .string()
    .min(1, "You must enter a json string first!")
    .refine(
      (value) => {
        try {
          JSON.stringify(JSON.parse(value));
        } catch (error) {
          return false;
        }
        return true;
      },
      {
        message: "It looks like an invalid JSON string",
      }
    ),
});

const useJsonForm = () => {
  const [json, setJson] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      json: "",
    },
  });

  const handleFormat = (values: z.infer<typeof formSchema>) =>
    setJson(formatJson(values.json));

  const handleMinify = (values: z.infer<typeof formSchema>) =>
    setJson(minifyJson(values.json));

  return {
    form,
    handleFormat,
    handleMinify,
    json,
  };
};

export default useJsonForm;
