import { Error } from "@/layouts/error";

export const metadata = { title: "404 | Redacted" };

export default function NotFound() {
  return <Error error={{ status: 404 }} />;
}
