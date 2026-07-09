import { supabase } from "../../lib/supabase";

export default async function PembayaranPage() {
  const { data: pembayaran } = await supabase
    .from("pembayaran")
    .select("*");

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        Data Pembayaran
      </h1>

      {pembayaran?.map((item) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded shadow mb-4"
        >
          <h2>{item.nama_penghuni}</h2>

          <p>Bulan: {item.bulan}</p>

          <p>Jumlah: Rp {item.jumlah}</p>

          <p>Status: {item.status}</p>
        </div>
      ))}
    </main>
  );
}