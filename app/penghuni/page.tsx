import { supabase } from "../../lib/supabase";

export default async function PenghuniPage() {
  const { data: penghuni } = await supabase
    .from("penghuni")
    .select("*");

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        Data Penghuni
      </h1>

      {penghuni?.length === 0 && (
        <p>Belum ada data penghuni.</p>
      )}

      {penghuni?.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow rounded p-4 mb-4"
        >
          <h2 className="font-bold text-xl">
            {item.nama}
          </h2>

          <p>No WA: {item.no_wa}</p>

          <p>Status: {item.status}</p>
        </div>
      ))}
    </main>
  );
}