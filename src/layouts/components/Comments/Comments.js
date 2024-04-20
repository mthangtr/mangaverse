import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Comment.module.scss";

const cx = classNames.bind(styles);

function Comments({ comment }) {
    return (
        <div className={cx('wrapper')}>
            <img src={comment.avatar} alt={comment.author} className={cx('avatar')} />
            <div className={cx('comment')}>
                <div className={cx('comment-info')}>
                    <div className={cx('comment-author')}>
                        <h2>{comment.author}</h2>
                    </div>
                    <p>{comment.date}</p>
                </div>
                <div className={cx('comment-content')}>
                    <p>{comment.content}</p>
                </div>
            </div>
        </div>
    );
}

export default Comments;