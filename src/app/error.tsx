"use client";

import { Error as ErrorLayout } from "@/layouts/error";

export default function ErrorPage({ error }: { error: Error & { digest?: string } }) {
  return <ErrorLayout error={error} />;
}
