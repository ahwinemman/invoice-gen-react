import React, { useContext, useState, useEffect } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { FileContext } from '../context/File-Context';


const UploadForm = () => {


    const [file, setFile] = useContext(FileContext);
    const [data, setData] = useState(null);

    const changeFile = (e) => {
        setData(e.target.files[0]);
    }

    const onClick = () => {
        setFile(data);
    }

    useEffect(() => {
        console.log("red", data);
    });


    return (
        <div>
            <div className="form-container form-group center">
                <input type="file" className="btn btn-secondary" name="file" onChange={changeFile} accept=".csv" />
                <BrowserRouter>
                    <Link to="/parse-csv">
                        <button disabled={!file === null} onClick={onClick} className="btn btn-primary"> Generate Invoice </button>
                    </Link>
                </BrowserRouter>
            </div>
        </div>




    )


}

export default UploadForm;
