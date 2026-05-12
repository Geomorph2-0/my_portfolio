import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

export type ProjectFrontmatter = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  date: string;
  featured?: boolean;
};

export type Project = {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
};

export function getAllProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];

  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        frontmatter: data as ProjectFrontmatter,
        content,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getProjectBySlug(slug: string): Project | null {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { slug, frontmatter: data as ProjectFrontmatter, content };
}
