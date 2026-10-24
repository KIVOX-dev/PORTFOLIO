import { Home } from "@/home/home";
import { baseMeta } from "@/utils/meta";
import config from "@/config.json";

export const metadata = baseMeta({
  title: "Student + Designer + Developer",
  description: `Design portfolio of ${config.name}: building intuitive, user-centered digital experiences.`,
});

export default function Page() {
  return <Home />;
}
