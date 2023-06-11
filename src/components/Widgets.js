import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading} </h4>
        <p>{subtitle} </p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("LinkedIn is hiring", "Top News: 4000 readers")}
      {newsArticle("Is Redux good?", "Coding: 560 readers")}
      {newsArticle("Will AI replace your Job?", "AI: 2400 readers")}
      {newsArticle("How to use ChatGPT to ease your life", "Tech: 800 readers")}
    </div>
  );
};

export default Widgets;
