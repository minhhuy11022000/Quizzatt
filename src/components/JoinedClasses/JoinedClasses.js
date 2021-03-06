import { Avatar } from "@material-ui/core";
import { FolderOpen, PermContactCalendar } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const JoinedClasses = ({ classData }) => {
    console.log(classData);
  return (
    <li className="joined__list">
      <div className="joined__container">
        <div className="joined__imgWrapper" />
        <div className="joined__image" />
        <div className="joined__content">
          <Link className="joined__title" to={`/${classData.id}`}>
            <h2>{classData.className}</h2>
          </Link>
          <p className="joined__owner">{classData.owner}</p>
        </div>
      </div>
      <div className="joined__bottom">
        <PermContactCalendar />
        <FolderOpen />
      </div>
    </li>
  );
};

export default JoinedClasses;
