import React, { Component } from "react";
import Header from '../Header/Header';
import "./PageTemplate.css";

const PageTemplate = ({children}) => {
    return (
      <div className="page-template">
        <Header></Header>
        <main className="main">
            {children}
        </main>
      </div>
    );
}

export default PageTemplate;
