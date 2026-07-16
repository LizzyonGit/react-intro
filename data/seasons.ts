import type {SeasonResponse} from "@/app/seasons/page";


export async function getSeasons(): Promise<SeasonResponse> {
    const fetchedSeasonsApi = await fetch("https://futuramaapi.com/api/seasons?page=1&size=50");

    //error handling simple
    if (!fetchedSeasonsApi.ok) {
        console.warn(fetchedSeasonsApi.status);
        throw new Error("Failed to fetch characters");
    }

    const fetchedSeasons = await fetchedSeasonsApi.json();
    console.log(fetchedSeasons);

    return(
        fetchedSeasons
    );


}

