"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function BookingPage() {
  const [nama, setNama] = useState("");
  const [wa, setWa] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [kamar, setKamar] = useState("");

  const simpanBooking = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const { error } = await supabase
      .from("booking")
      .insert([
        {
          nama,
          no_wa: wa,
          pekerjaan,
          kamar_diminati: kamar,
        },
      ]);

    if (error) {
      alert("Gagal menyimpan booking");
      return;
    }

    alert("Booking berhasil dikirim");

    setNama("");
    setWa("");
    setPekerjaan("");
    setKamar("");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-6">
          Booking Kamar Hanmar Kos
        </h1>

        <form
          onSubmit={simpanBooking}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            placeholder="Nomor WhatsApp"
            value={wa}
            onChange={(e) => setWa(e.target.value)}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            placeholder="Pekerjaan"
            value={pekerjaan}
            onChange={(e) =>
              setPekerjaan(e.target.value)
            }
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            placeholder="Kamar yang diminati"
            value={kamar}
            onChange={(e) =>
              setKamar(e.target.value)
            }
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded"
          >
            Kirim Booking
          </button>
        </form>
      </div>
    </main>
  );
}