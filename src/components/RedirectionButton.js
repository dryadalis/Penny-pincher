import React from 'react';
import { withRouter } from 'react-router-dom';
import MainButton from "./MainButton";


const RedirectionButton = withRouter(({ title, route, history }) => (
    <MainButton
        title={title}
        onClick={() => {
            history.push(route)
        }}
    />
));

export {RedirectionButton};
