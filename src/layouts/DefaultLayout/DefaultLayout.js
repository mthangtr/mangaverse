import classNames from 'classnames/bind';
import Header from '@/layouts/components/Header';
import Sidebar from '../components/Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header className={cx('header')} />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
                <div className={cx('sidebar')} >
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}
export default DefaultLayout;