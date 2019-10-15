import React from 'react';

export const Header = () => {
    return (
        <div>
            <div className="center">
                <h1>Invoice Generator</h1>
            </div>
            <Instruction />
        </div>

    )
};

const Instruction = () => {
    return (
        <div className="center">
            <p>You can download a sample csv from this link <a href="/sample.csv" download>sample csv</a></p>
        </div>
    )
}