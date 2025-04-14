import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-pink-50 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
        <Image
          src="/birthday-cake.svg" // You can add a cake SVG/image in public/
          alt="Birthday Cake"
          width={120}
          height={120}
          priority
        />
        <h1 className="text-3xl sm:text-5xl font-bold text-pink-700 text-center">
          🎉 Happy Birthday, Ninaja! 🎂
        </h1>
        <p className="text-center text-lg sm:text-xl text-gray-700 max-w-xl">
          Wishing you a day filled with love, laughter, and all your favorite things. 
          May your year ahead be just as amazing as you are!
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-pink-600 text-white hover:bg-pink-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-6"
            href="#"
          >
            Send a Wish 🎁
          </a>
          <a
            className="rounded-full border border-solid border-pink-300 hover:bg-pink-100 transition-colors text-pink-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-6"
            href="#"
          >
            View Wishes 💌
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-pink-500 text-sm">
        <p>Made with 💖 using Next.js</p>
      </footer>
    </div>
  );
}
