import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <header className="container header">
        <section className="logoSection">
          <img src={Logo}/>
        </section>
        <section className="linkSection">
          <a>Our Story</a>
          <a>Projects</a>
          <a>Careers</a>
        </section>
      </header>
    </>
  )
}

export default Header;