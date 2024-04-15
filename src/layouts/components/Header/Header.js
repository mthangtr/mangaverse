import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '@/config';
import images from '@/assets/images';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import Button from '@/components/Button';
import Search from '../Search';

const cx = classNames.bind(styles);

const CATEGORIES = [
    { id: 1, name: 'Music' },
    { id: 2, name: 'Dance' },
    { id: 3, name: 'Comedy' },
    { id: 4, name: 'Pets' },
    { id: 5, name: 'Education' },
    { id: 6, name: 'Gaming' },
    { id: 7, name: 'Beauty' },
    { id: 8, name: 'Lifestyle' },
    { id: 9, name: 'Fashion' },
    { id: 10, name: 'Food' },
    { id: 11, name: 'Sports' },
    { id: 12, name: 'Travel' },
    { id: 13, name: 'Science' },
    { id: 14, name: 'Tech' },
    { id: 15, name: 'DIY' },
    { id: 16, name: 'Auto' },
    { id: 17, name: 'Arts' },
    { id: 18, name: 'Kids' },
    { id: 19, name: 'Spiritual' },
    { id: 20, name: 'Daily Life' },
    { id: 21, name: 'Movies' },
    { id: 22, name: 'TV Shows' },
    { id: 23, name: 'News' },
    { id: 24, name: 'Entertainment' },
    { id: 25, name: 'Others' }
]

function Header() {

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('menu')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="logo" />
                    </Link>
                    <nav>
                        <ul>
                            <li>
                                <Tippy
                                    interactive={true}
                                    placement='bottom-start'
                                    content={
                                        <div tabIndex="-1">
                                            <PopperWrapper>
                                                <div className={cx('category-items')} >
                                                    {CATEGORIES.map(category => (
                                                        <Button key={category.id} className={'menu-item'}>{category.name}</Button>
                                                    ))
                                                    }
                                                </div>
                                            </PopperWrapper>
                                        </div>
                                    }
                                >
                                    <Button>Category</Button>
                                </Tippy>
                            </li>
                            <li>
                                <Button>Bookmark</Button>
                            </li>
                            <li>
                                <Button>History</Button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Search />
                <div className={cx('login')}>
                    <Button>Log In</Button>
                    <Button>Sign Up</Button>
                </div>
            </div>
        </header>
    );
}


export default Header;