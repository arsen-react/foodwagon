import "./App.css";
import burgerLogo from "./icons/burger-logo.svg";
import locationLogo from "./icons/map-marker-alt.svg";
import searchLogo from "./icons/Search.svg";
import userLogo from "./icons/user.svg";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-name">
          <img
            alt="foodwagon logo"
            className="main-logo-header"
            src={burgerLogo}
          />
          <div className="site-name-header">
            <a className="header-site-name-food" href="/">
              Food
            </a>
            <a className="header-site-name-wagon" href="/">
              Wagon
            </a>
          </div>
        </div>
        <div className="deliver-location">
          <p className="deliverto-button">Deliver to: </p>
          <div className="header-address-location">
            <img
              alt="location logo"
              src={locationLogo}
              className="location-logo"
            />
            <div className="header-location-address">
              <p className="current-location">Your Location </p>
              <input className="user-location-address"></input>
            </div>
          </div>
        </div>
        <div className="search-login-div">
          <div className="search-div">
            <img alt="serach icon" src={searchLogo} className="search-icon" />
            <input
              className="search-food-input"
              placeholder="Search Food"
            ></input>
          </div>
          <button className="login-button">
            <img src={userLogo} alt="user logo" className="user-logo" />
            <p className="login-text">Login</p>
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
