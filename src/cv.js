import React from 'react'
import Main from './Components/Main/main'
import Sub from './Components/Sub/sub'
import Header from "./Components/Main/header"

export default function cv() {
    return (
        <div>
            <div>
            <Header />
            <div className="grid">
                <Main />

                < Sub />
            </div>
        </div>
        </div>
    )
}
