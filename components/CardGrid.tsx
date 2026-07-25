import { Group } from "@/types";
import IdolCard from "./IdolCard";

export default function CardGrid({ groups }: { groups: Group[] }) {
  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-wide text-koko-muted">
        Groups
      </p>
      <h2 className="mt-1 font-display text-3xl font-bold text-koko-text">Cards</h2>
      <p className="mt-1 text-sm text-koko-muted">Select a group.</p>

      <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
        {groups.map((group) => (
          <IdolCard key={group.id} group={group} />
        ))}
      </div>
    </section>
  );
}
