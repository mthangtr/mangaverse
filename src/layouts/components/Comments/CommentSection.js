import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Comment.module.scss";
import Comments from "./Comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function CommentSection({ comment }) {
    const [comments, setComments] = useState(comment);

    const [newComment, setNewComment] = useState("");

    const handleCommentChange = (e) => {
        setNewComment(e.target.value)
    }

    const handlePostComment = () => {
        const newId = comments.length + 1;
        const newCommentObj = {
            id: newId,
            content: newComment,
            author: "New Author",
            avatar: "https://via.placeholder.com/150",
            date: new Date().toISOString().slice(0, 10)
        };
        setComments([...comments, newCommentObj]);
        setNewComment("");
    }


    return (
        <div className={cx('comment-wrapper')}>
            <div className={cx('comment-header')}>
                <FontAwesomeIcon className={cx('icon')} icon={faCommentAlt} /><h1>Comment ({comments.length})</h1>
            </div>
            <div className={cx('comment-body')}>
                <textarea
                    className={cx('comment-input')}
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={handleCommentChange}
                >
                </textarea>
                <button
                    className={cx('comment-button')}
                    onClick={handlePostComment}
                >Comment</button>
            </div>
            <div className={cx('comments-container')}>
                {comments.length === 0 ? (
                    <p>No comments yet</p>
                ) : (
                    comments.map((comment) => (
                        <Comments key={comment.id} comment={comment} />
                    ))
                )}
            </div>
        </div>
    );
}

export default CommentSection;