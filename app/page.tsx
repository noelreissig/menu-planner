import { menues } from "~/_data/menues.json";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Image from "next/image";

export default function Home() {
  // console.log(menues);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />

      <div className="relative h-[calc(100vh-3rem-6rem)] w-screen">
        <Image
          src="/img/hero.png"
          alt="Main image healty food"
          fill
          className="object-cover"
        />
      </div>
      <Footer />
    </main>
  );
}
