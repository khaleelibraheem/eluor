import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[url(/bg-image.jpg)] bg-center bg-cover bg-no-repeat before:absolute before:inset-0 before:bg-black/25 before:z-0 px-4 md:px-14">
      <div className="relative z-10 pt-4 lg:pt-0">
        <Navbar />
      </div>
    </div>
  );
}