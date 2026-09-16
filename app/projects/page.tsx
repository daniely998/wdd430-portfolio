// import { Project } from '@/lib/projects-db';

// export default async function Home() {
//   const baseUrl = process.env.VERCEL_URL
//     ? `https://${process.env.VERCEL_URL}`
//     : "http://localhost:3000";

//   const res = await fetch(`${baseUrl}/api/projects`, {
//     cache: "no-store",
//   });
//   const projects: Project[] = await res.json();

//   return (
//     <main className="container mx-auto px-4 py-12">
//       <section className="text-center py-12">
//         <h1 className="text-4xl font-bold mb-4">Projects Overview</h1>
//         <ul className="space-y-6">
//           {projects.map((p) => (
//             <li key={p.id} className="border p-4 rounded-lg shadow-sm">
//               <h2 className="text-2xl font-semibold">{p.title}</h2>
//               <p>{p.description}</p>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </main>
//   );
// }
// app/projects/page.tsx
import ProjectSearch from "@/components/ProjectSearch";
import Pagination from "@/components/Pagination";
import { fetchFilteredProjects, fetchProjectsPages } from "@/lib/projects-db";

export default async function ProjectsPage(props: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;

  const query = searchParams?.query ?? "";
  const currentPage = Number(searchParams?.page) || 1;

  const projects = await fetchFilteredProjects(query, currentPage);
  const totalPages = await fetchProjectsPages(query);

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">All Projects</h1>
      <ProjectSearch />
      <ul className="space-y-6 mt-6">
        {projects.map((p) => (
          <li key={p.id} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold">{p.title}</h2>
            <p>{p.description}</p>
          </li>
        ))}
      </ul>
      <Pagination totalPages={totalPages} />
    </main>
  );
}