import React from "react";
import Search from "./Search";
import Nav from "./Nav";
import Photo from "./Photo";

const PhotoList = () => {
    return (
        <div className="contianer">
            <Search />
            <Nav />
            <Photo />
        </div>
    );
}

export default PhotoList;