import "./style.css";
import burgerLogo from "./icons/burger-logo.svg";
import locationLogo from "./icons/map-marker-alt.svg";
import searchLogo from "./icons/Search.svg";
import userLogo from "./icons/user.svg";
import deliveryLogo from "./icons/bike.svg";
import pickUpLogo from "./icons/cart.svg";
import locationTitleLogo from "./icons/location.svg";
import findLogo from "./icons/find.svg";
import titleImg from "./icons/title-image.png";

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
      <div className="title-main">
        <div>
          <div className="title-order">
            <div className="title-div">
              <h1 className="title-h1">Are you starving?</h1>
              <p className="title-description">
                Within a few clicks, find meals that are accessible near you
              </p>
            </div>
          </div>
          <div className="order-div">
            <div className="buttons-for-order">
              <button className="delivery-button">
                <img
                  className="delivery-icon"
                  alt="delivery icon"
                  src={deliveryLogo}
                />{" "}
                <p className="delivery-p">Delivery</p>
              </button>

              <button className="pickup-button">
                <img
                  className="pickup-icon"
                  alt="pickup icon"
                  src={pickUpLogo}
                />
                <p className="pickup-p">Pickup</p>
              </button>
            </div>
            <div className="grey-line"></div>

            <div className="enter-address-title">
              <div className="input-title-area">
                <div className="location-logo">
                  <img
                    src={locationTitleLogo}
                    className="location-logo-title"
                    alt="location logo"
                  />
                </div>
                <input
                  placeholder="Enter Your Address"
                  className="input-title-address"
                ></input>
              </div>
              <button className="find-food-button">
                <img
                  src={findLogo}
                  className="find-food-icon"
                  alt="find icon"
                />
                <p className="find-food-p">Find Food</p>
              </button>
            </div>
          </div>
        </div>
        <div className="main-photo">
          <img className="title-img" alt="title pizza img" src={titleImg} />
        </div>
      </div>
    </div>
  );
}

export default App;
