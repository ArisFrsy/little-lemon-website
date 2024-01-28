

import logo from '../assets/images/lemon.png'

const Header = () => {
    return (
        <>
            <header className="sticky-header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded">
                    <div>
                        <a className="navbar-brand" href="#" >
                            <img src={logo} alt='lemon logo' style={{ width: '100px' }} />
                        </a>
                    </div>
                    <div className="container d-flex justify-content-center text-center">
                        <div className="collapse navbar-collapse text-center" id="navbarNav">
                            <ul className="navbar-nav text-center">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#menu">
                                        Menu
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#booking">
                                        Booking Table
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header