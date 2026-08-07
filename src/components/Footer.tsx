import { FOOTER, SITE } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-ink px-6 py-6 text-offwhite">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs uppercase tracking-wide text-offwhite/60">
          {FOOTER.meta}
        </p>
        <Button href={`mailto:${SITE.email}`} variant="outline-cream" className="shadow-none">
          Say hi
        </Button>
      </div>
    </footer>
  );
}
