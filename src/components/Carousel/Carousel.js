import React, { useState } from "react";
import Card from "./Card";
import "@/input.css";

function Carousel({ manga }) {
    const [cards, setCards] = useState(manga);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const indexes = [
        (currentIndex) % cards.length,
        (currentIndex + 1) % cards.length,
        (currentIndex + 2) % cards.length,
    ];

    return (
        <div className="relative flex justify-center items-center max-w-screen-lg mx-auto">
            <button
                className="absolute left-0 text-4xl md:text-5xl p-2 md:p-3 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-full transition duration-150 ease-in-out transform hover:scale-110"
                onClick={handleLeftClick}
            >
                {"<"}
            </button>
            <div className="flex overflow-hidden z-0">
                {indexes.map((index) => (
                    <Card key={cards[index].id} prop={cards[index]} />
                ))}
            </div>
            <button
                className="absolute right-0 text-4xl md:text-5xl p-2 md:p-3 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-full transition duration-150 ease-in-out transform hover:scale-110"
                onClick={handleRightClick}
            >
                {">"}
            </button>
        </div>
    );
}

export default Carousel;
