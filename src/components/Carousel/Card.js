import styles from './Carousel.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Card({ prop }) {
    return (
        <div className={cx('cardContainer')}>
            <img src={prop.img} alt={prop.title} />
            <h3>{prop.title}</h3>
            <ul>
                {prop.categories.map((category, idx) => (
                    <li key={idx}>
                        {category}{idx !== prop.categories.length - 1 ? ', ' : ''}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Card;
