import Logo from "../assets/logo.png";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footerTop">
                        <section className="infoSection">
                            <div className="logoSection">
                                <img src={Logo} />
                            </div>
                            <p>More about Dev Troubleshoot</p>
                        </section>
                        <section className="menuSection">
                            <a>Our Story</a>
                            <a>Projects</a>
                            <a>Careers</a>
                        </section>
                        <section className="followSection">
                            <a>Our Story</a>
                            <a>Projects</a>
                            <a>Careers</a>
                        </section>
                        <section className="subscribeSection">
                            <a>Our Story</a>
                            <a>Projects</a>
                            <a>Careers</a>
                        </section>
                    </div>
                    <div className="footerBottom"></div>
                </div>
            </footer>
        </>
    )
}

export default Footer;