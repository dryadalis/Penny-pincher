import React from 'react';
import c from 'classnames'
import '../Buttons/button.css';


export const TYPES = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
};

const MainButton = ({ title, onClick, type, disabled}) => (
    <button
        disabled={disabled}
        onClick={onClick}
        className={
            c(
                'button',
                {
                    'primary': type === TYPES.PRIMARY,

                    'secondary': type === TYPES.SECONDARY,
                },
            )
        }
    >
        {title}
    </button>
);

export default MainButton;