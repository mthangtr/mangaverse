import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Details.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEye, faPlus, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import CommentSection from '@/layouts/components/Comments';
import Button from '@/components/Button';

const cx = classNames.bind(styles);

function Details() {
    const [detailedManga, setDetailedManga] = useState({
        id: 1,
        title: 'One Piece',
        thumbs: 'https://via.placeholder.com/300',
        author: 'Maria Ozawa',
        like: 7864,
        following: 20650,
        watched: 15955430,
        description: "Thần đồng tên giang mới có bảy tuổi sinh trưởng quá nhanh nên bị đoản mệnh, vì là khôi phục cuộc sống bình thường, mang theo ký ức trong cơ thể một vị đại thần tiên xông vào Tiên giới, từ đây đi tới trở thành bá chủ Tiên giới mở ra con đường truyền kỳ...",
        category: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Psychological', 'Romance', 'Sci-fi', 'Slice of Life', 'Supernatural', 'Tragedy'],
        chapter: [{
            chapterId: 1,
            ChapterTitle: 'Chapter 1'
        },
        {
            chapterId: 2,
            ChapterTitle: 'Chapter 2'
        }, {
            chapterId: 3,
            ChapterTitle: 'Chapter 3'
        }, {
            chapterId: 4,
            ChapterTitle: 'Chapter 4'
        }, {
            chapterId: 5,
            ChapterTitle: 'Chapter 5'
        }, {
            chapterId: 6,
            ChapterTitle: 'Chapter 6'
        }, {
            chapterId: 7,
            ChapterTitle: 'Chapter 7'
        }, {
            chapterId: 8,
            ChapterTitle: 'Chapter 8'
        }, {
            chapterId: 9,
            ChapterTitle: 'Chapter 9'
        }, , {
            chapterId: 10,
            ChapterTitle: 'Chapter 10'
        }, {
            chapterId: 11,
            ChapterTitle: 'Chapter 11'
        }, {
            chapterId: 12,
            ChapterTitle: 'Chapter 12'
        }, {
            chapterId: 13,
            ChapterTitle: 'Chapter 13'
        }, {
            chapterId: 14,
            ChapterTitle: 'Chapter 14'
        }, {
            chapterId: 15,
            ChapterTitle: 'Chapter 15'
        }, {
            chapterId: 16,
            ChapterTitle: 'Chapter 16'
        }, {
            chapterId: 17,
            ChapterTitle: 'Chapter 17'
        }, {
            chapterId: 18,
            ChapterTitle: 'Chapter 18'
        }, {
            chapterId: 19,
            ChapterTitle: 'Chapter 19'
        }, {
            chapterId: 20,
            ChapterTitle: 'Chapter 20'
        }, {
            chapterId: 21,
            ChapterTitle: 'Chapter 21'
        }, {
            chapterId: 22,
            ChapterTitle: 'Chapter 22'
        }, {
            chapterId: 23,
            ChapterTitle: 'Chapter 23'
        }],
    });
    const [displayedChapters, setDisplayedChapters] = useState(10);
    const maxDisplay = 10;

    const handleShowMore = () => {
        setDisplayedChapters(prev => prev + maxDisplay);
    };

    return (
        <div className={cx('detail-wrapper')}>
            <div className={cx('detail-header')}>
                <Link to={'/'}><h2>Home</h2></Link>/
                <h2>{detailedManga.title}</h2>
            </div>
            <div className={cx('detail-info')}>
                <img src={detailedManga.thumbs} alt={detailedManga.title} className={cx('thumbs')} />
                <div className={cx('info')}>
                    <div className={cx('title')}>
                        <h1>{detailedManga.title}</h1>
                        <div className={cx('detail-actions')}>
                            <Button className={cx('btn-style-2')} separate>Read</Button>
                            <FontAwesomeIcon className={cx('icon')} icon={faThumbsUp}></FontAwesomeIcon>
                            <FontAwesomeIcon className={cx('icon')} icon={faPlus}></FontAwesomeIcon>
                        </div>
                    </div>
                    <p>Author: {detailedManga.author}</p>
                    <p>Like: {detailedManga.like}<FontAwesomeIcon className={cx('icon')} icon={faThumbsUp} /></p>
                    <p>Following: {detailedManga.following}<FontAwesomeIcon className={cx('icon')} icon={faBookmark} /></p>
                    <p>Watched: {detailedManga.watched}<FontAwesomeIcon className={cx('icon')} icon={faEye} /></p>
                    <p>Category: {detailedManga.category.join(', ')}</p>
                    <p>Description: {detailedManga.description}</p>
                </div>
            </div>
            <div className={cx('detail-chapter')}>
                <h1>Chapters</h1>
                <ul>
                    {detailedManga.chapter.slice(0, displayedChapters).map((chapter, index) => (
                        <Link key={index} className={cx('chapter')} to={`/view`}>
                            <h2>{chapter.ChapterTitle}</h2>
                            <h2>20/04/2024</h2>
                        </Link>
                    ))}
                </ul>
                <div className={cx('showmore-btn')} onClick={handleShowMore}>
                    <h1>SHOW MORE</h1>
                </div>
            </div>
            <CommentSection />
        </div>
    );
}

export default Details;