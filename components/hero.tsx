import Image from "next/image";

interface buttonProps {
  link: string;
  children: React.ReactNode;
  className?: string;
}

function Button({link, children, className}: buttonProps) {
  return (
    <a className={`bg-blue-500 hover:bg-blue-700 font-bold p-2 rounded ${className}`} href={link}>
      {children}
    </a>
  );
}


export default function Hero(){
    return(
        <div>
          <section className="relative block-50">
            <header className="z-99 absolute bottom-0 left-0">
              <h1 className="font-extrabold text-4xl p-2">Reactions</h1>
              <p className="text-lg text-pretty p-2">Reactions on React</p>
            </header>
          
            
            <Image className="z-0 opacity-70 object-cover" src="/beach.jpg" alt="" fill />
            
              
            
          </section>
          <section>
            <div className="flex justify-center gap-4 p-4">
              <Button link="/seasons" className="hover:bg-cyan-400">Seasons</Button>
              <Button link="/contact" className="hover:bg-pink-400">Write me</Button>
            </div>
          </section>
        </div>
          
        
        
          
    
        
    )
    }
