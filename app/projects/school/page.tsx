import { Project } from '@/lib/projects-db';

export default async function Home() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/projects?type=school`, {
    cache: "no-store",
  });
  const projects: Project[] = await res.json();

  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">School Projects</h1>
        <ul className="space-y-6">
          {projects.map((p) => (
            <li key={p.id} className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold">{p.title}</h2>
              <p>{p.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}