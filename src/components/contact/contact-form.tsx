"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  contactSchema,
  inquiryOptions,
  type ContactInput,
} from "@/lib/validation/contact";

type Delivery = "webhook" | "development-log";

type SuccessState = {
  delivery: Delivery;
};

const deliveryCopy: Record<Delivery, string> = {
  webhook:
    "The message was handed to the configured inbox. A reply only happens if that inbox is monitored.",
  "development-log":
    "Email is not configured in this environment. The message was saved locally for development and was not sent to an inbox.",
};

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }
  return (
    <p id={id} className="mt-2 text-sm text-navy">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [success, setSuccess] = useState<SuccessState | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      inquiryType: "business",
      message: "",
      consent: false,
      website: "",
    },
  });

  async function onSubmit(values: ContactInput) {
    setFormError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      const payload = (await response.json()) as {
        ok?: boolean;
        delivery?: Delivery;
        message?: string;
        fieldErrors?: Partial<Record<keyof ContactInput, string[] | undefined>>;
      };

      if (response.status === 400 && payload.fieldErrors) {
        for (const [key, messages] of Object.entries(payload.fieldErrors)) {
          const message = messages?.[0];
          if (message) {
            setError(key as keyof ContactInput, { message });
          }
        }
        setFormError("Check the highlighted fields and try again.");
        return;
      }

      if (!response.ok || !payload.ok || !payload.delivery) {
        setFormError(
          payload.message ??
            "The message was not delivered. Nothing was sent to an inbox.",
        );
        return;
      }

      setSuccess({ delivery: payload.delivery });
    } catch {
      setFormError("The message was not delivered. Check the connection and try again.");
    }
  }

  if (success) {
    return (
      <div role="status" className="border border-ink/10 bg-white p-6 sm:p-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-blue">RECEIVED</p>
        <h2 className="mt-3 font-serif text-3xl text-navy">Inquiry recorded</h2>
        <p className="mt-4 leading-7 text-muted">{deliveryCopy[success.delivery]}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border border-ink/10 bg-white p-6 sm:p-8" noValidate>
      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-navy">
            Name
          </label>
          <input
            id="name"
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-2 w-full border border-ink/15 bg-paper px-3 py-3 text-navy"
            {...register("name")}
          />
          <FieldError id="name-error" message={errors.name?.message} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-2 w-full border border-ink/15 bg-paper px-3 py-3 text-navy"
            {...register("email")}
          />
          <FieldError id="email-error" message={errors.email?.message} />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium text-navy">
            Company <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="company"
            autoComplete="organization"
            aria-invalid={errors.company ? true : undefined}
            aria-describedby={errors.company ? "company-error" : undefined}
            className="mt-2 w-full border border-ink/15 bg-paper px-3 py-3 text-navy"
            {...register("company")}
          />
          <FieldError id="company-error" message={errors.company?.message} />
        </div>
        <div>
          <label htmlFor="inquiryType" className="text-sm font-medium text-navy">
            Inquiry type
          </label>
          <select
            id="inquiryType"
            aria-invalid={errors.inquiryType ? true : undefined}
            aria-describedby={errors.inquiryType ? "inquiry-error" : undefined}
            className="mt-2 w-full border border-ink/15 bg-paper px-3 py-3 text-navy"
            {...register("inquiryType")}
          >
            {inquiryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <FieldError id="inquiry-error" message={errors.inquiryType?.message} />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium text-navy">
            Message
          </label>
          <textarea
            id="message"
            rows={7}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="mt-2 w-full border border-ink/15 bg-paper px-3 py-3 text-navy"
            {...register("message")}
          />
          <FieldError id="message-error" message={errors.message?.message} />
        </div>
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
        </div>
        <div>
          <label htmlFor="consent" className="flex items-start gap-3 text-sm leading-6 text-ink">
            <input
              id="consent"
              type="checkbox"
              className="mt-1 h-4 w-4"
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? "consent-error" : undefined}
              {...register("consent")}
            />
            <span>
              I understand this message is a business or technical inquiry. It is not a request to buy or sell a
              digital asset or security, and it does not by itself create a client relationship.
            </span>
          </label>
          <FieldError id="consent-error" message={errors.consent?.message} />
        </div>
        {formError ? (
          <p role="alert" className="border border-gold/50 bg-paper px-3 py-3 text-sm text-navy">
            {formError}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-navy px-5 py-3 text-sm font-semibold text-paper hover:bg-navy-2 disabled:cursor-wait disabled:opacity-70"
        >
          {isSubmitting ? "Sending" : "Send inquiry"}
        </button>
      </div>
    </form>
  );
}
