import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import CompanyList from './components/CompanyList';
import UploadForm from './components/UploadForm';
import CompanyDetailsTable from './components/CompanyDetailsTable';
import { FileProvider } from './context/File-Context';
import { Empty } from './components/Empty';

import './App.css';

function App() {
  return (
    <FileProvider>
      <div className="App">
        <Header />
        <UploadForm />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Empty} exact />
            <Route path="/parse-csv"><CompanyList /></Route>
            <Route path="/company/:invoiceId"><CompanyDetailsTable /></Route>
          </Switch>


        </BrowserRouter>
      </div>
    </FileProvider>
  );
}

export default App;