import type { Metadata } from "next";
import { content } from "@/content";
import HomePage from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: { absolute: content.seo.title },
  description: content.seo.description,
};

export default function Page() {
  return <HomePage />;
}
