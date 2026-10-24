import { Contact } from "@/contact/contact";
import { baseMeta } from "@/utils/meta";

export const metadata = baseMeta({
  title: "Contact",
  description:
    "Send me a message if you’re interested in discussing a project or if you just want to say hi",
});

export default function Page() {
  return <Contact />;
}
