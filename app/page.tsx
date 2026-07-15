import Hero from "@/components/hero";
import Crew from "@/components/crew";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ status?: string }>;
}) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;

  return (
    <div>
      <Hero />
      <Crew status={resolvedSearchParams?.status} />
    </div>

      
      

    
  );
}
