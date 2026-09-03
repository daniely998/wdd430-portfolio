import AboutCard from '@/components/AboutCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-400">
        This about page shares more information about my background and work.
      </p>
      <AboutCard
        name="Daniel Yim"
        phoneNumber="+852 2378 2378"
        email="daniel.yim@gmail.com"
      />
    </main>
  );
}