"use client";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import useJsonForm from "./hooks/useJsonForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const JsonForm = () => {
  const { form, formattedJson, handleSubmit } = useJsonForm();
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col justify-btween gap-4 max-w-lg size-full"
      >
        <FormField
          control={form.control}
          name="json"
          render={({ field, formState }) => (
            <FormItem className="flex flex-col size-full items-center gap-2">
              <Textarea
                {...field}
                className="size-full"
                placeholder="Enter your json"
              />
              {formState.errors.json?.message && (
                <Alert className="flex flex-col gap-1">
                  <AlertCircle className="size-5" />
                  <AlertTitle className="p-0 m-0">Ooops!</AlertTitle>
                  <AlertDescription>{formState.errors.json?.message}</AlertDescription>
                </Alert>
              )}
            </FormItem>
          )}
        />
        <div>
          <Button type="submit" className="w-full" size="lg">
            Format JSON
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
  );
};
export default JsonForm;
