import Link from "next/link";


export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0D0D16] px-6 text-center text-[#F4F1FF]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A98CFF]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">
          Page not found
        </h1>
        <Link
          className="mt-8 inline-flex rounded-full bg-[#A98CFF] px-5 py-3 text-sm font-bold text-[#171326] transition-colors hover:bg-[#B9A3FF]"
          href="/"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}