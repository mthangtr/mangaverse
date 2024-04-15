import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import Button from '@/components/Button';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <input type="text" placeholder="Search" />
            <Button className={cx('search-btn')}><FontAwesomeIcon icon={faSearch} /></Button>
        </div>
    );
}

export default Search;