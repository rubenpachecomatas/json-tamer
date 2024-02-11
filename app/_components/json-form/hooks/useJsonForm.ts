import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  json: z.string().refine(
    (value) => {
      try {
        JSON.stringify(JSON.parse(value));
      } catch (error) {
        return false;
      }
      return true;
    },
    {
      message: "Invalid JSON",
    }
  ),
});

const useJsonForm = () => {
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

  const handleSubmit = (values: z.infer<typeof formSchema>) =>
    formatJson(values.json);

  return {
    form,
    formattedJson,
    handleSubmit,
  };
};

export default useJsonForm;
