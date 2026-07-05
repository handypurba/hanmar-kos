import { supabase } from "../../lib/supabase";

export default async function RoomsPage() {
  const { data: kamar } = await supabase
    .from("kamar")
    .select("*")
    .order("nomor_kamar");

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        Daftar Kamar Hanmar Kos
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {kamar?.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg p-5"
          >
            <h2 className="text-2xl font-bold">
              {item.nomor_kamar}
            </h2>

            <p className="mt-2 text-lg">
              Rp {item.harga.toLocaleString("id-ID")}
            </p>

            <p className="mt-2">
              {item.status === "kosong" ? (
                <span className="text-green-600 font-bold">
                  🟢 Kosong
                </span>
              ) : (
                <span className="text-red-600 font-bold">
                  🔴 Terisi
                </span>
              )}
            </p>

            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg">
              /booking
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}