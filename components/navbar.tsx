import Link from "next/link";

const links = [
    {href: "/", label: "Home"},
    {href: "/seasons", label: "Seasons"},
    {href: "/contact", label:"Contact"},

]
// links.map((link)=> ( "link" är namnet på variabeln som används i map-funktionen, och "link" är också namnet på objektet i arrayen "links". Det är en vanlig praxis att använda samma namn för variabeln som representerar varje objekt i arrayen när man använder map-funktionen. Detta gör
export default function Navbar() {
  return (
    <nav className="flex space-between gap-4 p-4">
        {links.map((link)=> (
            <Link 
            key={link.href} 
            href={link.href}
            >
                {link.label}
            </Link>))}
      {/* <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link> */}
    </nav>
  );
}