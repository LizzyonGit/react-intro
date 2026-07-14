export async function getCharacters(){
    const fetchedData = await fetch("https://futuramaapi.com/api/characters?orderBy=id&orderByDirection=asc&page=1&size=50");
    
    return await fetchedData.json();
    

}