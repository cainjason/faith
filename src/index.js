import React from 'react';
import ReactDom from 'react-dom';
import Header from "./components/header";
import Navbar from "./components/navbar";
import Image from "./components/image";
import Footer from "./components/footer";
import MainOne from "./components/main-one";

function Faith () {
    return (
        <>
            <Header />
        <h2> We have Faith </h2>
            <Navbar />
            <Image />
            <MainOne />
            <Footer />
        </>
    );
}

ReactDom.render(<Faith />, document.getElementById('root'))
