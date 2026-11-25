import { redirect } from "next/navigation";

export default function TokenFactoryRedirect() {
  redirect("/products");
}