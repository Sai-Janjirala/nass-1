import { notFound } from "next/navigation";
import Link from "next/link";
import destinationData from "../../../data/destinationData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinationData.map((dest) => ({
    slug: dest.slug,
  }));
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = destinationData.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8">
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold text-emerald-800 hover:text-emerald-700"
        >
          ← Back to all destinations
        </Link>
        <span className="rounded bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-900 border border-emerald-200">
          {destination.code}
        </span>
      </div>

      <header className="border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
            {destination.country}
          </span>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
            {destination.region}
          </span>
          {destination.subRegion && (
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
              {destination.subRegion}
            </span>
          )}
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900">
          {destination.name}
        </h1>
        <p className="mt-3 text-lg text-slate-600 max-w-3xl">
          {destination.overview || destination.description}
        </p>
      </header>

      <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold tracking-wider text-slate-400">COORDINATES & LOC</p>
          <p className="mt-2 font-mono text-sm font-semibold text-slate-800">{destination.geo}</p>
          <p className="mt-1 font-mono text-xs text-slate-500">{destination.loc}</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold tracking-wider text-slate-400">BEST SEASON TO VISIT</p>
          <p className="mt-2 text-sm font-semibold text-slate-800">{destination.bestSeason || "Year-round"}</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold tracking-wider text-slate-400">RECOMMENDED TRIP LENGTH</p>
          <p className="mt-2 text-sm font-semibold text-slate-800">{destination.tripLength || "3 to 5 days"}</p>
        </div>
      </section>

      {destination.knownFor && (
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Highlights & Known For</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">{destination.knownFor}</p>
        </section>
      )}

      {destination.transitNotes && (
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Transit & Arrival Notes</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">{destination.transitNotes}</p>
        </section>
      )}

      <div className="mt-10 flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-emerald-800 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700"
        >
          Explore More Destinations
        </Link>
        <Link
          href="/regions"
          className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 hover:border-emerald-600"
        >
          View All Regions
        </Link>
      </div>
    </main>
  );
}
