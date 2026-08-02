import Navbar from "@/components/Navbar";

export default function UpdatesPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="font-display text-4xl font-bold text-koko-coral">Updates</h1>
        <p className="mt-4 text-koko-muted">
          Próximamente vas a poder ver aquí las últimas actualizaciones del bot 💜
        </p>
      </main>
    </>
  );
}
