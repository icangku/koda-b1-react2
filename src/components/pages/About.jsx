import React from "react";

function About() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
          About
        </h1>

        <div className="mx-auto mt-4 h-1 w-16 rounded bg-indigo-600"></div>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Halo! Saya seorang web developer yang berfokus pada pembuatan
          antarmuka web yang bersih, cepat dan responsif. Saya senang mengubah
          ide-ide kreatif menjadi kenyatan website.
        </p>
      </div>
    </section>
  );
}

export default About;
