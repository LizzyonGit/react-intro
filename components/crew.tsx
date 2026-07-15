import { getCharacters } from "@/data/characters";
import Image from "next/image";
import Link from "next/link";

export interface CharacterItem{
    
        id: number;
        name: string;
        status: string;
        species: string;
        gender: string;
        createdAt: string;
        image: string | null;
    
    } 
    
export interface CharacterResponse{
    items: CharacterItem[];
    total: number;
    page: number;
    size: number;
    pages: number;
}

type CrewProps = {
    status?: string ;
  };

export default async function Crew({ status }: CrewProps){

    const json = await getCharacters() as CharacterResponse;

    const filteredCharacters = status ? json.items.filter((char) => char.status.toLowerCase() === status.toLowerCase()) : json.items;


    return(
        <div>
            <section>
                <h2>Crew</h2>
                <p>Meet the crew of Reactions</p>

                <div className="flex gap-4">
                <Link href="/">All</Link>
                <Link href="/?status=ALIVE">Alive</Link>
                <Link href="/?status=DEAD">Dead</Link>
                <Link href="/?status=UNKNOWN">Unknown</Link>
                </div>

                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[minmax(0,2fr)] gap-4 pl-4">
                    
                    
                    
                    
                    {filteredCharacters.map((char)=>(
                        
                            <li className="" key={char.id}>
                                <h3>
                                    <Link href={`/character/${char.id}`}>{char.name}</Link>
                                </h3>
                                <div className="relative h-64 w-full">
                                {/* {char.image && <img src={char.image} alt={char.name} />} */}
                                
                                {char.image ? (<Image className="object-cover" src={char.image} alt="" fill />) : (<Image className="object-cover" alt="ingen bild" width={500} height={300} unoptimized src="https://placehold.co/600x400" />
                                )}
                                </div>



                                <Link href={`/character/${char.id}`}>Läs mer</Link>

                            </li>
                        

                    ))}

                    
                </ul>



            </section>

        </div>)}




    