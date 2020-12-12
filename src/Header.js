import React from "react";
import "./Header.css";

import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton
          onClick={() => {
            history.replace(backButton);
          }}
        >
          <ArrowBackIosIcon fontSize="large" className="header__ios" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}
      {/* <h2>header</h2> */}
      <Link to="/">
        <IconButton>
          <img
            className="header__logo"
            src="https://1000logos.net//wp-content/uploads/2018/07/tinder-logo.png"
            alt="tinder logo"
          />
        </IconButton>
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
