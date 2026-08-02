import Image from "next/image";
import { Owner } from "@/lib/ownersData";

export default function OwnerCard({ owner, reverse }: { owner: Owner; reverse?: boolean }) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-2xl border border-koko-border bg-koko-surface shadow-sm md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="relative h-72 w-full shrink-0 md:h-80 md:w-72">
        <Image
          src={owner.photo}
          alt={owner.name}
          fill
          sizes="(max-width: 768px) 100vw, 288px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center gap-4 p-8">
        <div>
          <h3 className="font-display text-3xl font-bold tracking-tight text-koko-text">
            {owner.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-koko-coralDark">{owner.role}</p>
        </div>

        <ul className="flex flex-col gap-2">
          {owner.details.map((d) => (
            <li key={d.label} className="text-sm leading-relaxed text-koko-text/90">
              <span className="font-semibold text-koko-purple">{d.label}:</span>{" "}
              {d.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
