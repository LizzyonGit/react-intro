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
    
interface CharacterResponse{
    items: CharacterItem[];
    total: number;
    page: number;
    size: number;
    pages: number;
}


export default async function Crew(){

    const json = await getCharacters() as CharacterResponse;


    return(
        <div>
            <section>
                <h2>Crew</h2>
                <p>Meet the crew of Reactions</p>

                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[minmax(0,2fr)] gap-4 pl-4">
                    {json.items.map((char)=>(
                        
                            <li className="" key={char.id}>
                                <h3>{char.name}</h3>
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




    