import React from 'react';

const ErrorMessage = (props) => {
    return (
        <div>
            <h1>Opps!!, It seems that the {props.error}</h1>
            <i class="far fa-sad-tear"></i>
        </div>
    )
}
export default ErrorMessage;