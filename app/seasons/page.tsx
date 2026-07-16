import {getSeasons} from "@/data/seasons";
import Link from "next/link";

interface EpisodeItem {
  id: number;
  name: string;
  number: number;
  productionCode: string;
}

interface EpisodesArray {
  id: number;
  episodes: EpisodeItem[];
}

export interface SeasonResponse {
  items: EpisodesArray[];
  total: number;
  page: number;
  size: number;
  pages: number;


}



export default async function Seasons({searchParams}: {searchParams: Promise<{season?: "1" | "2"}>;
}) {
  const {season = "1"} = await searchParams;
  const jsonSeasons = await getSeasons() as SeasonResponse;

  const seasonNumber = Number(season);

  
  return(
    <div>
      <h1>Seasons</h1>
      <p>List of seasons and episodes</p>
      <p>No, I only want to see season {season}!</p>
      <Link href={`/seasons?season=1`}>Filter on first season</Link>
      <Link href={`/seasons?season=2`}>Filter on second season</Link>


      

      
      <ul>
        
        {jsonSeasons.items.map((part)=>(
          <li key={part.id}>

            <div>
            {part.id === seasonNumber ? (
              <p>Render {part.id}</p>
            ) : (
              <p>Do not render {part.id}</p>
            )}
          </div>
            
            

            <ul>
              {part.episodes.map((episode)=>(
                <li key={episode.id}>{episode.id}: {episode.name}</li>
              ))}
              
            </ul>
          
          </li>


        ))}

      </ul>
    </div>

  )

}


