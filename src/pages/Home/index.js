import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Carousel from '@/components/Carousel';
import { useState } from 'react';
import CardItem from '@/components/CardItem';

const cx = classNames.bind(styles);

function Home() {
    const [hotmanga, setHotManga] = useState([
        {
            id: 1,
            title: 'KHÔNG CHỈ LÀ BẮT NẠT',
            img: 'https://st.nettruyentt.com/data/comics/244/khong-chi-la-bat-nat-492.jpg',
            categories: ['Action', 'Adventure', 'Fantasy']
        },

        {
            id: 2,
            title: 'NINE PEAKS',
            img: 'https://st.nettruyentt.com/data/comics/189/nine-peaks-316.jpg',
            categories: ['Action', 'Adventure', 'Fantasy']
        },
        {
            id: 3,
            title: 'VÔ ĐỊCH ĐỐN NGỘ',
            img: 'https://st.nettruyentt.com/data/comics/2/vo-dich-don-ngo-9827.jpg',
            categories: ['Action', 'Adventure', 'Fantasy']
        },
        {
            id: 4,
            title: 'CUỐN SÁCH CHIẾN LƯỢC HÀNG ĐẦU MÀ CHỈ TÔI MỚI CÓ THỂ NHÌN THẤY',
            img: 'https://st.nettruyentt.com/data/comics/156/cuon-sach-chien-luoc-hang-dau-ma-chi-toi-5198.jpg',
            categories: ['Action', 'Adventure', 'Fantasy']
        },
        {
            id: 5,
            title: 'SHOKEI SARETA KENJA WA LICH NI TENSEI SHITE SHINRYAKU SENSOU WO HAJIMARU',
            img: 'https://st.nettruyentt.com/data/comics/207/shokei-sareta-kenja-wa-lich-ni-tensei-sh-4161.jpg',
            categories: ['Action', 'Adventure', 'Fantasy']
        },
    ]);

    const [manga, setManga] = useState([
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
        {
            id: 6,
            title: "Berserk",
            image: "https://cdn.myanimelist.net/images/manga/1/157897.jpg",
            rating: 9.2,
            chapter: ["Chapter 364", "Chapter 363", "Chapter 362", "Chapter 361", "Chapter 360"]
        },
        {
            id: 6,
            title: "Berserk",
            image: "https://cdn.myanimelist.net/images/manga/1/157897.jpg",
            rating: 9.2,
            chapter: ["Chapter 364", "Chapter 363", "Chapter 362", "Chapter 361", "Chapter 360"]
        },
        {
            id: 6,
            title: "Berserk",
            image: "https://cdn.myanimelist.net/images/manga/1/157897.jpg",
            rating: 9.2,
            chapter: ["Chapter 364", "Chapter 363", "Chapter 362", "Chapter 361", "Chapter 360"]
        },
        {
            id: 6,
            title: "Berserk",
            image: "https://cdn.myanimelist.net/images/manga/1/157897.jpg",
            rating: 9.2,
            chapter: ["Chapter 364", "Chapter 363", "Chapter 362", "Chapter 361", "Chapter 360"]
        },
        {
            id: 5,
            title: "My Hero Academia",
            image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
            rating: 9.2,
            chapter: ["Chapter 311", "Chapter 310", "Chapter 309", "Chapter 308", "Chapter 307"]
        },
        {
            id: 5,
            title: "My Hero Academia",
            image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
            rating: 9.2,
            chapter: ["Chapter 311", "Chapter 310", "Chapter 309", "Chapter 308", "Chapter 307"]
        },
        {
            id: 5,
            title: "My Hero Academia",
            image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
            rating: 9.2,
            chapter: ["Chapter 311", "Chapter 310", "Chapter 309", "Chapter 308", "Chapter 307"]
        },
        {
            id: 5,
            title: "My Hero Academia",
            image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
            rating: 9.2,
            chapter: ["Chapter 311", "Chapter 310", "Chapter 309", "Chapter 308", "Chapter 307"]
        },
        {
            id: 5,
            title: "My Hero Academia",
            image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
            rating: 9.2,
            chapter: ["Chapter 311", "Chapter 310", "Chapter 309", "Chapter 308", "Chapter 307"]
        },
        {
            id: 5,
            title: "My Hero Academia",
            image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
            rating: 9.2,
            chapter: ["Chapter 311", "Chapter 310", "Chapter 309", "Chapter 308", "Chapter 307"]
        },
        {
            id: 5,
            title: "My Hero Academia",
            image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
            rating: 9.2,
            chapter: ["Chapter 311", "Chapter 310", "Chapter 309", "Chapter 308", "Chapter 307"]
        },
        {
            id: 5,
            title: "My Hero Academia",
            image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
            rating: 9.2,
            chapter: ["Chapter 311", "Chapter 310", "Chapter 309", "Chapter 308", "Chapter 307"]
        },
    ]);

    return (
        <div className={cx('home')}>
            <div className={cx('carousel-container')}>
                <Carousel manga={hotmanga} />
            </div>
            <h1>Latest manga</h1>
            <div className={cx('card-container')}>
                {manga.map((manga) => (
                    <CardItem key={manga.id} manga={manga} />
                ))}
            </div>
            <div className={cx('showmore-btn')}>
                <h1>SHOW MORE</h1>
            </div>
        </div>
    );
}

export default Home;