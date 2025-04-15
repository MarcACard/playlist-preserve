"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  type WaitlistFormValues,
  waitlistSchema,
} from "@/lib/schemas/waitlist.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";

export function WaitlistForm() {
  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });
  const { isSubmitting, isSubmitSuccessful } = form.formState;

  const onSubmit = async (data: WaitlistFormValues) => {
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Unknown Error");
      }
    } catch (err) {
      form.setError("root.serverError", {
        type: "server",
        message: err instanceof Error ? err.message : "Submission Failed",
      });
    }
  };

  return (
    <>
      {isSubmitSuccessful ? (
        <div className="text-center">
          <h3 className="font-semibold">Thanks for Joining the Waitlist! 🎉</h3>
          <p className="text-muted-foreground text-sm">
            You&apos;ll hear from us soon.
          </p>
        </div>
      ) : (
        <Form {...form}>
          <form
            id="waitlist-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto max-w-lg space-y-2"
          >
            {form.formState.errors.root?.serverError && (
              <p className="text-destructive text-center text-xs">
                {form.formState.errors.root.serverError.message}
              </p>
            )}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="marc@playlistpreserve.com"
                      {...field}
                      autoComplete="email"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {!isSubmitting ? (
                "Join Waitlist"
              ) : (
                <>
                  <LoaderCircle className="mr-2 animate-spin" />
                  <span>Submitting...</span>
                </>
              )}
            </Button>
          </form>
        </Form>
      )}
    </>
  );
}

export function WaitlistSection() {
  return (
    <div className="mt-8 w-full">
      <WaitlistForm />
    </div>
  );
}
