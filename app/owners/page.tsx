import Navbar from "@/components/Navbar";
import OwnerCard from "@/components/OwnerCard";
import { owners } from "@/lib/ownersData";

export default function OwnersPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-14">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-koko-coral sm:text-5xl">
            MEET THE OWNERS
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-koko-muted">
            KOKO BOT was planned and designed by a beautiful team. Get to know
            the masterminds behind this project!
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-8">
          {owners.map((owner, i) => (
            <OwnerCard key={owner.name} owner={owner} reverse={i % 2 === 1} />
          ))}
        </div>
      </main>
    </>
  );
}
