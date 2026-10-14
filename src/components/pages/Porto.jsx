import React from "react";

function Porto() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl text-center font-bold tracking-tight text-gray-400">
        Portofolio
      </h1>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
        <div class="animate-pulse border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="w-full h-48 bg-slate-200 rounded-lg mb-4"></div>

          <div class="h-4 bg-slate-200 rounded w-2/3 mb-3"></div>
          <div class="h-3 bg-slate-200 rounded w-full mb-2"></div>
          <div class="h-3 bg-slate-200 rounded w-4/5 mb-4"></div>

          <div class="h-8 bg-slate-200 rounded w-1/3"></div>
        </div>

        <div class="animate-pulse border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
          <div class="w-full h-48 bg-slate-200 rounded-lg mb-4"></div>
          <div class="h-4 bg-slate-200 rounded w-1/2 mb-3"></div>
          <div class="h-3 bg-slate-200 rounded w-full mb-2"></div>
          <div class="h-3 bg-slate-200 rounded w-3/4 mb-4"></div>
          <div class="h-8 bg-slate-200 rounded w-1/3"></div>
        </div>

        <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
          <div class="w-full h-48 bg-blue-500 rounded-lg mb-4 flex items-center justify-center text-white font-bold">
            Image
          </div>

          <h3 class="text-lg font-bold text-slate-800 mb-2">Judul Konten</h3>
          <p class="text-sm text-slate-600 mb-4">
            Ini adalah deskripsi singkat dari card setelah data selesai dimuat
            dari API.
          </p>

          <button class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
            Baca Selengkapnya
          </button>
        </div>
      </div>
    </section>
  );
}

export default Porto;
