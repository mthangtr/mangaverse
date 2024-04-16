import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import Button from '@/components/Button';
import { faSearch, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import SearchItem from '@/components/SearchItem';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 1000);
    // }, []);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div>
            <Tippy
                interactive={true}
                visible={showResult && searchResult.length > 0}
                onClickOutside={handleHideResult}
                placement='bottom-start'
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={'search-popper'}>
                            <h4 className={cx('search-title')}>Search Results</h4>
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        type="text" placeholder="Search"
                        ref={inputRef}
                        value={searchValue}
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <Button className={cx('search-btn')}><FontAwesomeIcon icon={faSearch} /></Button>
                </div>
            </Tippy>
        </div >
    );
}

export default Search;