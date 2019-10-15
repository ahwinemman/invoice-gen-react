import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';
import { SuccessMessage } from './SuccessMessage';
import { FailureMessage } from './FailureMessage';
import { FileContext } from '../context/File-Context';
import { BASE_URL } from '../constants';


const DownloadButton = () => {
    return (
        <a
            className="btn btn-primary btn__download"
            href={`${BASE_URL}/pdf-all`}
            target="_blank"
            rel="noopener noreferrer">
            Download Zip Files
      </a>
    )
}

const CompanyList = () => {

    const [file, setFile] = useContext(FileContext);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState('');


    useEffect(() => {
        const formData = new FormData();
        formData.append('file', file);
        console.log("red", file);
        uploadFile(formData);

    });

    const uploadFile = (formData) => {

        axios.post(`${BASE_URL}/parse-csv`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
            .then((response) => {
                setData(response.data);
                setMessage("");
                setIsLoading(false);
            })
            .catch((error) => {
                setData(null);
                setMessage(error.errorMessage);
                setIsLoading(false);
            });

    }

    return (
        <div>
            {message === "" && !isLoading ?
                <div className="messages">
                    <SuccessMessage />
                    <DownloadButton />
                </div> : ""}

            {message !== "" ? <FailureMessage message={message} /> : ""}
            <div className="company-div">
                {message === "" ?
                    <div>
                        {data.map((company, i) => {
                            return (
                                <div className="alert alert-dark messages" key={i}>
                                    <BrowserRouter>
                                        <Link to={`/company/${i + 1}`}>
                                            <span className="company-link">{company.projectName}</span>
                                        </Link>
                                    </BrowserRouter>

                                    <span>Total Amount : {company.projectTotalAmount}</span>
                                </div>
                            )
                        })
                        }
                    </div> : ""}
            </div>
        </div >


    );
}

export default CompanyList;
