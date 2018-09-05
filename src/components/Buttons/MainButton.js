import React from 'react';
import c from 'classnames'
import '../Buttons/button.css';


export
const TYPES = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    ADD: 'add',
    SIGNOUT: 'signOut',
};
const SIZES = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
};


const MainButton = ({ title, onClick, type, disabled, size}) => (
    <button
        disabled={disabled}
        onClick={onClick}
        className={
            c(
                'button',
                {
                    'primary': type === TYPES.PRIMARY,

                    'secondary': type === TYPES.SECONDARY,

                    'add': type === TYPES.ADD,

                    'signOut': type === TYPES.SIGNOUT,

                    'large': size ===  SIZES.LARGE,

                    'medium': size === SIZES.MEDIUM,

                    'small': size === SIZES.SMALL,

                },
            )
        }
    >
        {title}
    </button>
);

export default MainButton;