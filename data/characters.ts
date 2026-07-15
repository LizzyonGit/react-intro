import type {CharacterResponse} from "@/components/crew";

export async function getCharacters(): Promise<CharacterResponse> {
    const fetchedData = await fetch("https://futuramaapi.com/api/characters?orderBy=id&orderByDirection=asc&page=1&size=50");
    

    if (!fetchedData.ok) {
        console.warn(fetchedData.status);
        throw new Error("Failed to fetch characters");
    }

    return await fetchedData.json();
    

}

export async function getCharacterId(idNr: number){
    const fetchedCharacter = await fetch(`https://futuramaapi.com/api/characters/${idNr}`);
    
    return await fetchedCharacter.json();
}