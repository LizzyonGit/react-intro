import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative">
        <header className="relative z-10">
          <h1 className="font-extrabold text-6xl p-2">Reactions</h1>
          <p className="text-lg text-pretty p-2">Reactions on React</p>
        </header>
      
        
          <Image className="w-full h-auto object-cover z-0 opacity-70" src="/beach.jpg" alt="" fill />
        
      </section>
    </main>
    
      

    
  );
}
