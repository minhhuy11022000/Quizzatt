import React, { useState } from "react";
import "./styles.css";
import { Avatar, Button, TextField } from "@material-ui/core";
import db, { storage } from "../../lib/firebase";
import firebase from "firebase";
import { useLocalContext } from "../../context/context";

const Main = ({ classData }) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState(null);

  const { loggedInMail } = useLocalContext();

  return (
    <div className="main">
      <div className="main__wrapper">
        <div className="main__content">
          <div className="main__wrapper1">
            <div className="main__bgImage">
              <div className="main__emptyStyles" />
            </div>
            <div className="main__text">
              <h1 className="main__heading main__overflow">
                {classData.className}
              </h1>
              <div className="main__section main__overflow">
                {classData.section}
              </div>
              <div className="main__wrapper2">
                <em className="main__code">Class Code :</em>
                <div className="main__id">{classData.id}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__announce">
          <div className="main__status">
            <p>Upcoming</p>
            <p className="main__subText">No work due</p>
          </div>
          <div className="main__announcements">
            <div className="main__announcementsWrapper">
              <div className="main__ancContent">
                {showInput ? (
                  <div className="main__form">
                    <TextField
                      id="filled-multiline-flexible"
                      multiline
                      label="Announce Something to class"
                      variant="filled"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div className="main__buttons">
                      <div>
                        <Button onClick={() => setShowInput(false)}>
                          Cancel
                        </Button>
                        <Button color="primary" variant="contained">
                          Post
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="main__wrapper100"
                    onClick={() => setShowInput(true)}
                  >
                    <Avatar />
                    <div className="">Announce something to class</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
