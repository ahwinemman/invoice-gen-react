import React from 'react';

export const FailureMessage = (props) => {

    return (
        <div className="alert alert-danger" role="alert" >
            {props.message}
        </div >
    )
}
