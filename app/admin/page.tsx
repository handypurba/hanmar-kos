import { supabase } from "../../lib/supabase";

export default async function AdminPage() {
  const { data: kamar } = await supabase
    .from("kamar")
    .select("*");

  const { data: booking } = await supabase
    .from("booking")
    .select("*");

  const totalKamar = kamar?.length || 0;
  const kamarKosong =
    kamar?.filter((k) => k.status === "kosong").length || 0;
  const totalBooking = booking?.length || 0;

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">
        Dashboard Owner Hanmar Kos
      </h1>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow">
          <h2>Total Kamar</h2>
          <p className="text-4xl font-bold">{totalKamar}</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2>Kamar Kosong</h2>
          <p className="text-4xl font-bold text-green-600">
            {kamarKosong}
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2>Total Booking</h2>
          <p className="text-4xl font-bold text-blue-600">
            {totalBooking}
          </p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">
          Daftar Booking
        </h2>

        {booking?.map((item) => (
          <div
            key={item.id}
            className="border-b py-3"
          >
            <div>
              <strong>{item.nama}</strong>
            </div>

            <div>{item.no_wa}</div>

            <div>
              Kamar: {item.kamar_diminati}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}