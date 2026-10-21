import Link from "next/link";
import destinationData from "../../data/destinationData";

export default function RegionsPage() {
  const regions = Object.entries(destinationData.reduce<Record<string, number>>((counts, destination) => { counts[destination.region] = (counts[destination.region] ?? 0) + 1; return counts; }, {}));
  return <main className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8"><p className="text-xs font-bold tracking-[0.18em] text-emerald-800">DISCOVER BY REGION</p><h1 className="mt-3 text-4xl font-bold text-slate-900">A world in small collections.</h1><p className="mt-3 max-w-2xl text-slate-600">Start with a region, then follow the places that make it distinct.</p><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{regions.map(([region, count]) => <Link href="/" key={region} className="rounded-xl border border-slate-200 p-5 transition hover:border-emerald-600 hover:shadow-sm"><p className="text-lg font-bold text-slate-900">{region}</p><p className="mt-2 text-sm text-slate-600">{count} {count === 1 ? "destination" : "destinations"} in the index</p><p className="mt-5 font-bold text-emerald-800">View collection →</p></Link>)}</div></main>;
}
