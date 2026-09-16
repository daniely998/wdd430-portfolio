// app/projects/school/page.tsx
import SchoolProjectList from "./SchoolProjectList";
import { Suspense } from 'react';
import Loading from "./loading";

export default function SchoolProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">School Projects</h1>
        <Suspense fallback={<Loading />}>
          <SchoolProjectList />
        </Suspense>
      </section>
    </main>
  );
}
