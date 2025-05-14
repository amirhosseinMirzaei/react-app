
export interface Game{
    id: number;
    title:string;
    image:string;
    platforms:string[];
    score:number;
    genres:string[];


}

export const games:Game[]=[

{
    id: 1,
    title: "Grand Theft Auto V",
    image: "/gta.jpg",
    platforms: ["Windows", "PlayStation", "Xbox"],
    score: 92,
    genres: ["Action", "Adventure"],
  },
  {
    id: 2,
    title: "The Witcher",
    image: "/witcher.jpg",
    platforms: ["Windows", "PlayStation", "Xbox", "Nintendo"],
    score: 92,
    genres: ["RPG", "Adventure"],
  },
  {
    id: 3,
    title: "call of duty",
    image: "/call-of.jpg",
    platforms: ["Windows", "Mac", "Linux", "PlayStation", "Xbox"],
    score: 95,
    genres: ["Puzzle", "Shooter"],
  },

]