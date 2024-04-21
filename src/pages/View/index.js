import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LazyLoad from "react-lazyload";
import CommentSection from "@/layouts/components/Comments/CommentSection";
import classNames from "classnames/bind";
import styles from "./View.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { faArrowLeft, faArrowRight, faWarning } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

const comments = [
    {
        id: 1,
        content: "This is a comment",
        author: "John Doe",
        avatar: "https://via.placeholder.com/150",
        date: "2021-01-01",
    }, {
        id: 2,
        content: "This is another comment",
        author: "John Doe",
        avatar: "https://via.placeholder.com/140",
        date: "2021-01-02",
    }, {
        id: 3,
        content: "This is another commentThis is another commentThis is another commentThis is another commentThis is another commentThis is another commentThis is another commentThis is another commentThis is another commentThis is another commentThis is another comment",
        author: "John Dick",
        avatar: "https://via.placeholder.com/140",
        date: "2021-01-02",
    }
]

function View() {
    const [data, setData] = useState(
        {
            id: 1,
            mangaTitle: "OnePiece",
            chapTitle: "Chapter 420",
            date: "09:01 16/04/2024",
            mangaData: [
                {
                    pageId: 1,
                    img: "https://s135.truyenvua.com/380/fix-420/0.jpg?gt=hdfgdfg",
                }, {
                    pageId: 2,
                    img: "https://s135.truyenvua.com/380/fix-420/0.jpg?gt=hdfgdfg",
                }, {
                    pageId: 3,
                    img: "https://s135.truyenvua.com/380/fix-420/0.jpg?gt=hdfgdfg",
                }, {
                    pageId: 4,
                    img: "https://s135.truyenvua.com/380/fix-420/0.jpg?gt=hdfgdfg",
                }, {
                    pageId: 5,
                    img: "https://s135.truyenvua.com/380/fix-420/0.jpg?gt=hdfgdfg",
                }, {
                    pageId: 6,
                    img: "https://s135.truyenvua.com/380/fix-420/0.jpg?gt=hdfgdfg",
                }, {
                    pageId: 7,
                    img: "https://s135.truyenvua.com/380/fix-420/0.jpg?gt=hdfgdfg",
                }, {
                    pageId: 8,
                    img: "https://s135.truyenvua.com/380/fix-420/0.jpg?gt=hdfgdfg",
                }, {
                    pageId: 9,
                    img: "https://s135.truyenvua.com/380/fix-420/0.jpg?gt=hdfgdfg",
                }, {
                    pageId: 10,
                    img: "https://s135.truyenvua.com/380/fix-420/0.jpg?gt=hdfgdfg",
                }, {
                    pageId: 11,
                    img: "https://s135.truyenvua.com/380/fix-420/0.jpg?gt=hdfgdfg",
                }, {
                    pageId: 12,
                    img: "https://s135.truyenvua.com/380/fix-420/0.jpg?gt=hdfgdfg",
                }, {
                    pageId: 13,
                    img: "https://s135.truyenvua.com/380/fix-420/0.jpg?gt=hdfgdfg",
                }, {
                    pageId: 14,
                    img: "https://s135.truyenvua.com/380/fix-420/0.jpg?gt=hdfgdfg",
                }
            ]
        }
    );

    return (
        <div className={cx('wrapper')}>
            <div className={cx('view-header')}>
                <Link to={'/'}><h2>Home</h2></Link>/
                <Link to={'/detail'}><h2>{data.mangaTitle}</h2></Link>/
                <h2>Chapter {data.id}</h2>
            </div>
            <div className={cx('header-container')}>
                <div className={cx('title')}>
                    <h1>{data.mangaTitle} - Chapter {data.id} </h1><h2>({data.date})</h2>
                </div>
                <div className={cx('server-select')}>
                    <h2>Nếu không xem được truyện vui lòng đổi SERVER bên cạnh:</h2>
                    <select className="select">
                        <option value="1">SERVER 1</option>
                        <option value="2">SERVER 2</option>
                        <option value="3">SERVER 3</option>
                        <option value="4">SERVER 4</option>
                        <option value="5">SERVER 5</option>
                        <option value="6">SERVER 6</option>
                        <option value="7">SERVER 7</option>
                        <option value="8">SERVER 8</option>
                        <option value="9">SERVER 9</option>
                        <option value="10">SERVER 10</option>
                    </select>
                    <button className={cx('btn')}>Báo lỗi Chương <FontAwesomeIcon icon={faWarning} /></button>
                </div>
                <div className={cx('chapter-navigator')}>
                    <select>
                        <option value="1">Chapter 1</option>
                        <option value="2">Chapter 2</option>
                        <option value="3">Chapter 3</option>
                        <option value="4">Chapter 4</option>
                        <option value="5">Chapter 5</option>
                        <option value="6">Chapter 6</option>
                        <option value="7">Chapter 7</option>
                        <option value="8">Chapter 8</option>
                        <option value="9">Chapter 9</option>
                        <option value="10">Chapter 10</option>
                    </select>
                    <div className={cx('btn-container')}>
                        <button className={cx('btn')}><FontAwesomeIcon className={cx('icon')} icon={faArrowLeft} /> Chương trước</button>
                        <button className={cx('btn')}>Chương sau <FontAwesomeIcon className={cx('icon')} icon={faArrowRight} /></button>
                    </div>
                </div>
            </div>
            <div className={cx('content')}>
                {data.mangaData.map((item) => {
                    return (
                        <LazyLoad key={item.pageId} height={200} offset={100} once>
                            <img
                                src={'https://preview.redd.it/disc-the-hidden-face-of-majime-chan-who-is-dedicated-to-her-v0-quch8pb9ukub1.png?width=600&format=png&auto=webp&s=d96d8f8e4a1618b1a06476a38868b4cb9ca8f1f4'}
                                alt="manga" />
                        </LazyLoad>
                    );
                })}
            </div>
            <div className={cx('btn-container')}>
                <button className={cx('btn')}><FontAwesomeIcon className={cx('icon')} icon={faArrowLeft} /> Chương trước</button>
                <button className={cx('btn')}>Chương sau <FontAwesomeIcon className={cx('icon')} icon={faArrowRight} /></button>
            </div>
            <CommentSection comment={comments} />
        </div>
    );
}

export default View;