import { z } from "zod";

export const inquiryTypes = ["business", "tokenization", "partnership"] as const;

export const inquiryOptions = [
  { value: "business", label: "Business inquiry" },
  { value: "tokenization", label: "Tokenization consultation" },
  { value: "partnership", label: "Technical partnership" },
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your name.")
    .max(80, "Use 80 characters or fewer."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(160, "Use 160 characters or fewer."),
  company: z.string().trim().max(120, "Use 120 characters or fewer."),
  inquiryType: z.enum(inquiryTypes, "Choose an inquiry type."),
  message: z
    .string()
    .trim()
    .min(20, "Add at least 20 characters so we can understand the request.")
    .max(4000, "Use 4000 characters or fewer."),
  consent: z.boolean().refine((value) => value, {
    message: "Consent is required before this message can be received.",
  }),
  website: z.string().max(200),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function inquiryLabel(value: ContactInput["inquiryType"]) {
  return inquiryOptions.find((option) => option.value === value)?.label ?? value;
}
