import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

const Button = forwardRef(({
    to,
    href,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    separate = false,
    ...passProps
}, ref) => {
    let Comp;
    if (to) {
        Comp = Link;  // Directly assign to Link
    } else if (href) {
        Comp = 'a';  // Directly assign to 'a'
    } else {
        Comp = 'button';  // Default to 'button'
    }

    const props = {
        onClick,
        ...passProps,
        ...(to && { to }), // Only add 'to' for Link
        ...(href && { href }), // Only add 'href' for 'a'
        ref, // Passing ref appropriately
    };

    const buttonClass = cx('wrapper', className, {
        separate: separate
    });

    return (
        <Comp className={buttonClass} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
});

export default Button;
