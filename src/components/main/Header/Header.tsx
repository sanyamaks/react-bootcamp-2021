import React from 'react'
import './Header.css'

const Header = (): JSX.Element => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__text">
                    Weather
                    <span className="header__additional-text"> forecast</span>
                </h1>
            </div>
        </header>
    )
}

export default Header
