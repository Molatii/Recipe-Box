"use client"

import React from "react"
import { store } from "./store"
import { Provider } from "react-redux";
import { childrenProps } from "@/utils/types";

const ReduxProvider: React.FC<childrenProps> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider;