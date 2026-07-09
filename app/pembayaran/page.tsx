import { supabase } from "../../lib/supabase";

export default async function PembayaranPage() {
  const { data: pembayaran, error } = await supabase
    .from("pembayaran")
    .select("*");

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        Data Pembayaran
      </h1>

      {error && (
        <p>Error: {error.message}</p>
      )}

      <pre>
        {JSON.stringify(pembayaran, null, 2)}
      </pre>
    </main>
  );
}