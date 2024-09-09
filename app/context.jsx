"use client"
import { createContext, useContext } from "react";


export const MyContext = createContext()

export const MyProvider = ({ children, value }) => {

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}

export const useMyContext = () => useContext(MyContext);