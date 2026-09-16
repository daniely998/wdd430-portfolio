// app/projects/school/loading.tsx
export default function Loading() {
  return (
    <ul className="space-y-6">
        {[...Array(3)].map((_, i) => (
        <li
            key={i}
            className="border p-4 rounded-lg shadow-sm animate-pulse"
        >
            <div className="h-6 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </li>
        ))}
    </ul>
  );
}
