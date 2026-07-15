import { getCharacterId } from "@/data/characters";
import { notFound } from "next/navigation";
import { CharacterItem } from "@/components/crew";



export async function generateMetadata({params}: {params: {id: string}}) {
    
    const { id: idStr } = params;
    const idNr = Number(idStr);

    if (Number.isNaN(idNr)) {
        notFound();
    }

    const characterId = await getCharacterId(idNr) as CharacterItem;

    if (!characterId) {
        notFound();
    }

    return {
        title: characterId.name,
    };
}





export default async function CharacterPage({params}: {params: {id: string}}) {
    
    const { id: idStr } = params;
    const idNr = Number(idStr);

    if (Number.isNaN(idNr)) {
        notFound();
    }

    const character = await getCharacterId(idNr) as CharacterItem;

    if (!character) {
        notFound();
    }

    return (
        <div>
            <h1>{character.name}</h1>
            <p>{character.status}</p>
        </div>
    );
}