import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'Movies Finder',
    description: 'An app that is able to find movies and create a watchlist.',
    technologies: ['JavaScript', 'CSS', 'API'],
    link: 'https://daniely998.github.io/wdd330/final-project'
  },
  {
    title: 'Hong Kong Creative Writer Club',
    description: 'An app the provides information about the Hong Kong Creative Writer Club.',
    technologies: ['API', 'JavaScript', 'CSS'],
    link: 'https://daniely998.github.io/wdd231/final'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-400">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}