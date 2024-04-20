import "@/input.css";
import { Link } from "react-router-dom";

function CardItem({ manga, sidebarItem = false }) {

    const chaptersToShow = manga.chapter ? (sidebarItem ? manga.chapter.slice(0, 1) : manga.chapter.slice(0, 3)) : [];

    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-2">
            <img src={manga.image} alt={manga.title} className="h-40 w-full object-cover rounded-t-lg" />
            <div className="p-2">
                <h5 className="text-lg font-bold">{manga.title}</h5>
                <div className="flex flex-col mt-2">
                    {chaptersToShow.map((chapter, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <Link to={`/chapter/${index}`} className="text-blue-600 hover:text-blue-800">{chapter}</Link>
                            <h6 className="font-light">7 hrs</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardItem;