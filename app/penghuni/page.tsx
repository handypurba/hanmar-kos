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

      <div className="space-y-4">
        {penghuni?.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded shadow"
          >
            <h2 className="font-bold">
              {item.nama}
            </h2>

            <p>WA: {item.no_wa}</p>
            <p>Status: {item.status}</p>
          </div>
        ))}
      </div>
    </main>
  );
}