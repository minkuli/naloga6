import React from 'react';

const Navbar = () => {
    return (
        <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
            <nav className="f6 fw6 ttu tracked">
                <a className="link dim white dib mr3" href="/" title="Home">Link1</a>
                <a className="link dim white dib mr3" href="/" title="Home">Link2</a>
            </nav>
        </header>
    );
}

export default Navbar;
