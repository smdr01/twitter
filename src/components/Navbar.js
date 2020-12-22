import Link from 'next/link';

const Navbar = () => {
    return(
        <div className="navbar-main">
            <div className="navbar-content-body">
                <div className="navbar-content-1">
                    <h2 className="navbar-header">Twitter</h2>
                </div>
                <div className="navbar-content">
                    <Link href="/">
                    <a className="navbar-text">Home</a>
                    </Link>
                </div>
                <div className="navbar-content">
                    <Link href="/about">
                    <a className="navbar-text">About</a>
                    </Link>
                </div>
                <div className="navbar-content">
                    <div className="avatar-wrapper">
	                    <img className="profile-pic" src="/goat.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Navbar