import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Comment.module.scss";
import Comments from "./Comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function CommentSection() {
    const [comments, setComments] = useState([
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
        }]);


    return (
        <div className={cx('comment-wrapper')}>
            <div className={cx('comment-header')}>
                <FontAwesomeIcon className={cx('icon')} icon={faCommentAlt} /><h1>Comment ({comments.length})</h1>
            </div>
            <div className={cx('comment-body')}>
                <textarea className={cx('comment-input')} placeholder="Write a comment..."></textarea>
                <button className={cx('comment-button')}>Comment</button>
            </div>
            <div className={cx('comments-container')}>
                {comments.map((comment) => (
                    <Comments key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    );
}

export default CommentSection;