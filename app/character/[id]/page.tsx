import data from "@/data/characters.json";
import { notFound } from "next/navigation";


export async function generateMetadata({params}: {params: {id: string}}) {
    
    const {id: idStr} = await params;
    const idNr = Number(idStr);

    const character = data.items.find((character) => character.id === idNr );


    if ((Number.isNaN(idNr))) {
        notFound();
    }

    if(!character){
        notFound();
        
    }


    
    return {
        title: character?.name,
        
    };
}





export default async function CharacterPage({params}: {params: {id: string}}) {
    
    const {id: idStr} = await params;
    const idNr = Number(idStr);

    const character = data.items.find((character) => character.id === idNr );


    if ((Number.isNaN(idNr))) {
        notFound();
    }

    if(!character){
        notFound();
        // return <h1>Character not found</h1>;
    }


    
    return (
        <div>
        <h1>{character.name}</h1>
        <p> {character.status}</p>
    </div>);
}