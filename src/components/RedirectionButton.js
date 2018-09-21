import React from 'react';
import { withRouter } from 'react-router-dom';
import MainButton from "./Buttons/MainButton";


const RedirectionButton = withRouter(({ title, route, history, className, }) => (
    <MainButton
        type={'primary'}
        size={'large'}
        title={title}
        onClick={() => {
            history.push(route)
        }}
        className={className}
    />
));

export {RedirectionButton};
