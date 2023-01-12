import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <section className="section">
            <div>
                <h1 className="section__title">
                    Hello, you
                </h1>
            </div>
            <div className="header">
                <Link href="/" className="header__item">
                    <span className="header__item_span">Accordion</span>
                </Link>
                <Link href="/list" className="header__item">
                    <span className="header__item_span">Search</span>
                </Link>
                <Link href="/dropdown" className="header__item">
                    <span className="header__item_span">Dropdown</span>
                </Link>
                <Link href="/translate" className="header__item">
                    <span className="header__item_span">Translate</span>
                </Link>
            </div>
        </section>
    )
}

export default Header;