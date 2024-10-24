import React from 'react';
import{render,screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/home/Hero";

describe("Hero component",()=>{   //describe -> function for tets suite
 test("render hero image",()=>{
    render(<Hero/>);             //we are giving instruction to browser to render hero image all this work will gonna be in backend
    const heroImage= screen.getByAltText("Hero Image"); //check its alt text
    expect(heroImage).toBeInTheDocument();              // chech weather it is in document or not
    expect(heroImage).toHaveAttribute("src","media/homeHero.png");  //chech its source
 });
});