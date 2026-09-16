// app/projects/school/SchoolProjectList.tsx
import { Project } from "@/lib/projects-db";

export default async function SchoolProjectList() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/projects?type=school`, {
    cache: "no-store",
  });
  const projects: Project[] = await res.json();

  return (
    <ul className="space-y-6">
      {projects.map((p) => (
        <li key={p.id} className="border p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold">{p.title}</h2>
          <p>{p.description}</p>
        </li>
      ))}
    </ul>
  );
}
