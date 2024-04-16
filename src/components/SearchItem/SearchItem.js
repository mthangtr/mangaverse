import styles from './SearchItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SearchItem() {
    return (
        <div className={cx('search-item')}>
            <img src="https://img.wattpad.com/34f9d00ac664ff50c87116aec1cf32277ec80477/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f396551377179724c7777733678673d3d2d3839303633343438322e313631313935636337663439373335653730373235393532363333302e6a7067?s=fit&w=720&h=720" alt="placeholder" />
            <div className={cx('search-info')}>
                <p className={cx('search-name')}>One punch man</p>
                <p className={cx('search-category')}>
                    <a>Categories: </a>
                    <Link>Action </Link>
                    <Link>Shonen </Link>
                    <Link>Romance </Link>
                    <Link>Drama </Link>
                    <Link>Horror </Link>
                </p>
            </div>
        </div>
    );
}

export default SearchItem;