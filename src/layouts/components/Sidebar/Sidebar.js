import "@/input.css";
import CardItem from "@/components/CardItem/CardItem";

const topMangas = [
    {
        id: 1,
        title: "One Piece",
        image: "https://cdn.myanimelist.net/images/anime/1770/97704.jpg",
        rating: 9.2,
        chapter: ["Chapter 1010", "Chapter 1009", "Chapter 1008", "Chapter 1007", "Chapter 1006"]
    },
    {
        id: 2,
        title: "Attack on Titan",
        image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
        rating: 9.2,
        chapter: ["Chapter 139", "Chapter 138", "Chapter 137", "Chapter 136", "Chapter 135"]
    },
    {
        id: 3,
        title: "Naruto",
        image: "https://cdn.myanimelist.net/images/anime/1565/111305.jpg",
        rating: 9.2,
        chapter: ["Chapter 700", "Chapter 699", "Chapter 698", "Chapter 697", "Chapter 696"]
    },
    {
        id: 4,
        title: "One Punch Man",
        image: "https://cdn.myanimelist.net/images/anime/1247/122044.jpg",
        rating: 9.2,
        chapter: ["Chapter 141", "Chapter 140", "Chapter 139", "Chapter 138", "Chapter 137"]
    },
    {
        id: 5,
        title: "My Hero Academia",
        image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
        rating: 9.2,
        chapter: ["Chapter 311", "Chapter 310", "Chapter 309", "Chapter 308", "Chapter 307"]
    },
    {
        id: 6,
        title: "Berserk",
        image: "https://cdn.myanimelist.net/images/manga/1/157897.jpg",
        rating: 9.2,
        chapter: ["Chapter 364", "Chapter 363", "Chapter 362", "Chapter 361", "Chapter 360"]
    },
];

function Sidebar() {
    return (
        <div className="w-full p-4">
            <h1 className="text-2xl font-bold mb-4">Top Manga</h1>
            <div className="grid grid-cols-2 gap-4">
                {topMangas.map((manga) => (
                    <CardItem key={manga.id} manga={manga} sidebarItem={true} />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;