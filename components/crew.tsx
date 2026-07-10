import data from "@/data/characters.json"
import Image from "next/image"

export default function Crew(){
    return(
        <div>
            <section>
                <h2>Crew</h2>
                <p>Meet the crew of Reactions</p>

                <ul className="flex flex-wrap sm:columns-4 gap-4 pl-4">
                    {data.items.map((char)=>(
                        
                            <li className="max-inline-size-3/5 max-block-size-2/5" key={char.id}>
                                <h3>{char.name}</h3>
                                {/* {char.image && <img src={char.image} alt={char.name} />} */}
                                <div className= "block-96 inline-size-96">
                                {char.image ? (<Image className="object-cover max-inline-size-1/2 max-block-size-1/2" src={char.image} alt="" width={500} height={300} />) : (<Image className="object-cover" alt="ingen bild" width={500} height={300} unoptimized src="https://placehold.co/600x400" />
                                )}
                                </div>



                                <a href="#">Läs mer</a>

                            </li>
                        

                    ))}

                    
                </ul>



            </section>

        </div>)}


    