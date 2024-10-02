import React from "react";
import Banner from "../components/Banner";
import Category from "../components/Category";
import FlashSale from "../components/FlashSale";

export const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <FlashSale></FlashSale>
        </div>
    )
}