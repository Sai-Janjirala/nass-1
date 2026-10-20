"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import destinationData from "../data/destinationData";

const regions = ["All Regions", ...Array.from(new Set(destinationData.map((destination) => destination.region)))];

export default function Destinations() {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const visibleDestinations = useMemo(
    () => selectedRegion === "All Regions" ? destinationData : destinationData.filter((destination) => destination.region === selectedRegion),
    [selectedRegion],
  );

  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8">
      <section className="border-b border-slate-200 pb-8">
        <p className="text-xs font-bold tracking-[0.18em] text-emerald-800">CATALOGUE / LIVE SURVEY</p>
        <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div><h1 className="text-4xl font-bold tracking-tight text-slate-900">Explore destinations</h1><p className="mt-2 max-w-2xl text-slate-600">Browse a considered collection of places, organized by region, landscape, and local character.</p></div>
          <div className="rounded-lg bg-emerald-50 px-5 py-3 lg:text-right"><p className="text-xs font-bold tracking-wide text-emerald-800">CURRENT SELECTION</p><p className="text-lg font-bold text-emerald-950">{visibleDestinations.length.toString().padStart(2, "0")} DESTINATIONS</p></div>
        </div>
        <div className="mt-7 flex flex-wrap gap-2" aria-label="Filter destinations by region">
          {regions.map((region) => <button key={region} type="button" onClick={() => setSelectedRegion(region)} aria-pressed={selectedRegion === region} className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${selectedRegion === region ? "border-emerald-700 bg-emerald-700 text-white" : "border-slate-300 bg-white text-slate-700 hover:border-emerald-600 hover:text-emerald-800"}`}>{region}</button>)}
        </div>
      </section>
      <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {visibleDestinations.map((destination) => <article key={destination.id} className="flex min-h-72 flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-center justify-between rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-bold text-slate-700"><span>{destination.loc}</span><span className="rounded bg-white px-2 py-1 text-xs text-slate-600">{destination.code}</span></div>
          <div className="mt-5 flex-1"><div className="flex items-start justify-between gap-3"><h2 className="text-xl font-bold text-slate-900">{destination.name}</h2><span className="text-xs font-bold text-slate-500">{destination.tag}</span></div><p className="mt-1 text-sm font-semibold text-slate-500">{destination.country} · {destination.region}</p><p className="mt-3 text-sm leading-6 text-slate-600">{destination.description}</p></div>
          <Link className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 font-bold text-emerald-800 hover:text-emerald-600" href={`/destinations/${destination.slug}`}>View destination <span aria-hidden="true">→</span></Link>
        </article>)}
      </section>
      <aside className="mt-10 flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between"><span>Destination notes are reviewed against public cartographic and transit references.</span><span className="font-bold tracking-wide text-slate-700">COORDINATES: WGS84</span></aside>
    </main>
  );
}
