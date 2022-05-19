import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className="w-100 d-flex justify-content-center align-items-center">
            <Spinner animation="grow" />
        </div>
    );
};

export default Loading;