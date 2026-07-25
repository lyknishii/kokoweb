import Image from "next/image";
import { Group } from "@/types";

export default function IdolCard({ group }: { group: Group }) {
  return (
    <button className="group relative flex flex-col overflow-hidden rounded-2xl border border-koko-border bg-koko-surface text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={group.imageUrl}
          alt={`${group.idolName} — ${group.name}`}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
          {group.cardCount} cards
        </span>
      </div>

      <div className="flex flex-col gap-0.5 p-3">
        <span className="font-display text-base font-bold uppercase leading-none text-koko-text">
          {group.idolName}
        </span>
        <span className="text-xs font-medium text-koko-muted">{group.name}</span>
      </div>
    </button>
  );
}
