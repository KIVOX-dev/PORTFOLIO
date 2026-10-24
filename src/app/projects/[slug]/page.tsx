import { notFound } from "next/navigation";
import { ProjectPage } from "@/projects/project-page";
import { getProject, projects } from "@/content/work";
import { baseMeta } from "@/utils/meta";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) return {};
  return baseMeta({ title: project.title, description: project.description, prefix: "Projects" });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return <ProjectPage project={project} />;
}
