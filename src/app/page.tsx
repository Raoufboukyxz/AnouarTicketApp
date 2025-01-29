"use client"

import MainEvent from "./mainEvent";
import * as React from "react"
import { NavigationMenuDemo } from "./navigationMenu";


export default function Home() {
  return (
    <div className="flex flex-col  w-screen h-40 bg-orange-300">

        <MainEvent />  
        <div className="flex justify-around">
        <NavigationMenuDemo />
        <NavigationMenuDemo />
        <NavigationMenuDemo />
        <NavigationMenuDemo />
        <NavigationMenuDemo />
        <NavigationMenuDemo />
        <NavigationMenuDemo />
        <NavigationMenuDemo />

        </div>
    </div>
  );
}







