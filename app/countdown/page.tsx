import Navbar from "@/components/Navbar";

export default function CountdownPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="font-display text-4xl font-bold text-koko-coral">Countdown</h1>
        <p className="mt-4 text-koko-muted">
          Próximamente vas a poder ver aquí la cuenta atrás para el próximo evento ⏳
        </p>
      </main>
    </>
  );
}
