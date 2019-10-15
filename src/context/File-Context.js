import React, { createContext, useState } from 'react';

export const FileContext = createContext();

export const FileProvider = (props) => {
    const [file, setFile] = useState(null);

    return (
        <FileContext.Provider value={[file, setFile]}>
            {props.children}
        </FileContext.Provider>
    );

};
