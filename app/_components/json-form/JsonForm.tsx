"use client";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import useJsonForm from "./hooks/useJsonForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const JsonForm = () => {
  const { form, handleFormat, handleMinify, json } = useJsonForm();

  return (
    <Form {...form}>
      <form className="flex flex-col justify-btween gap-4 max-w-lg size-full">
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
                  <AlertDescription>
                    {formState.errors.json?.message}
                  </AlertDescription>
                </Alert>
              )}
            </FormItem>
          )}
        />
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            name="format-btn"
            type="button"
            className="w-full"
            onClick={form.handleSubmit(handleFormat)}
          >
            Format JSON
          </Button>
          <Button
            name="minify-btn"
            type="button"
            className="w-full"
            onClick={form.handleSubmit(handleMinify)}
            variant="secondary"
          >
            Minify JSON
          </Button>
        </div>
        <Textarea
          className="size-full"
          placeholder="The formatted json will appear here"
          value={json}
          onChange={() => null}
        />
      </form>
    </Form>
  );
};
export default JsonForm;
