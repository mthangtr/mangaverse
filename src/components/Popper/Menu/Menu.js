import classNames from 'classnames/bind';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ categories = [], classes }) {
    return (
        <ul className={cx({ classes })} >
            {categories.map(category => (
                <li key={category.id}>
                    <MenuItem data={{ title: category.name }} />
                </li>
            ))}
        </ul>
    );
}

export default Menu;