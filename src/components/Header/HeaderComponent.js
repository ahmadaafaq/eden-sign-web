import "./Header.css";
import bgHeader from "../../salon-bg-header.webp";

const HeaderComponent = () => {
    return (
        <header
        style={{
          backgroundImage: `url(${bgHeader})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay">
          <h1>Eden Sign</h1>
          <h3>Promote your Salons and Parlours.</h3>
          <br />
          <a target="_blank" href="https://forms.gle/7p8BLAUbEv7gBT6UA" rel="noreferrer">
            <button>Register</button>
          </a>
        </div>
      </header>
    )
}

export default HeaderComponent;