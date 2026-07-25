import Navbar from "@/components/Navbar";
import FilterBar from "@/components/FilterBar";
import CardGrid from "@/components/CardGrid";
import { mockGroups } from "@/lib/mockData";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <FilterBar />
        <div className="mt-10">
          <CardGrid groups={mockGroups} />
        </div>
      </main>
    </>
  );
}
