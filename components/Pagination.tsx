// app/projects/Pagination.tsx
"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

function createPageURL(pathname: string, searchParams: URLSearchParams, page: number) {
  const params = new URLSearchParams(searchParams);
  params.set("page", page.toString());
  return `${pathname}?${params.toString()}`;
}

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = Number(searchParams.get("page")) || 1;

  return (
    <div className="flex justify-center gap-4 mt-8">
      {currentPage > 1 && (
        <button
          onClick={() =>
            router.push(createPageURL(pathname, searchParams, currentPage - 1))
          }
          className="px-4 py-2 border rounded"
        >
          Prev
        </button>
      )}
      {currentPage < totalPages && (
        <button
          onClick={() =>
            router.push(createPageURL(pathname, searchParams, currentPage + 1))
          }
          className="px-4 py-2 border rounded"
        >
          Next
        </button>
      )}
    </div>
  );
}
