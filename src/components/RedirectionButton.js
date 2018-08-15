import React from 'react';
import { withRouter } from 'react-router-dom';
import MainButton from "./MainButton";


const RedirectionButton = withRouter(({ title, route, history, className }) => (
    <MainButton
        title={title}
        onClick={() => {
            history.push(route)
        }}
        className={className}
    />
));

export {RedirectionButton};
