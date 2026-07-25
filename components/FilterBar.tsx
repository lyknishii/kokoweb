"use client";

import { useState } from "react";

const rarities = ["All", "Common", "Rare", "Epic", "Legendary"];

function Field({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[11px] font-semibold uppercase tracking-wide text-koko-muted">
        {label}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg border border-koko-border bg-white/70 px-3 py-2 text-sm text-koko-text placeholder:text-koko-muted/70 outline-none transition focus:border-koko-purple focus:ring-2 focus:ring-koko-purple/20"
      />
    </div>
  );
}

export default function FilterBar() {
  const [rarity, setRarity] = useState("All");

  return (
    <div className="rounded-2xl border border-koko-border bg-koko-bgsoft p-6 shadow-sm">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <Field label="Group" placeholder="Choose a group" />
        <Field label="Idol" placeholder="Choose an idol" />
        <Field label="Era" placeholder="Choose an era" />
        <Field label="Event" placeholder="Choose an event" />

        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-koko-muted">
            Rarity
          </span>
          <select
            value={rarity}
            onChange={(e) => setRarity(e.target.value)}
            className="w-full rounded-lg border border-koko-border bg-white/70 px-3 py-2 text-sm text-koko-text outline-none transition focus:border-koko-purple focus:ring-2 focus:ring-koko-purple/20"
          >
            {rarities.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 flex justify-end gap-3">
        <button className="rounded-lg px-4 py-2 text-sm font-medium text-koko-muted transition hover:text-koko-text">
          Clear
        </button>
        <button className="flex items-center gap-2 rounded-lg bg-koko-purple px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-koko-purpleDark">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Search
        </button>
      </div>
    </div>
  );
}
