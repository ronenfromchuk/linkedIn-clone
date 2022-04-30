import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
    const newsArticle = (heading, subtitle) => {
      return (
        <div className="widgets__article">
          <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
          </div>
  
          <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
          </div>
        </div>
      );
    };
  
    return (
      <div className="widgets">
        <div className="widgets__header">
          <h2>LinkedIn News</h2>
          <InfoIcon />
        </div>
  
        {newsArticle("Ronen Fromchuk innit", "Top news - 9099 readers")}
        {newsArticle("Coronavius: UK updates", "Top news - 886 readers")}
        {newsArticle("Tesla hits new highs", "Top news - 300 readers")}
        {newsArticle("Bitcoin Breaks $22k", "Top news - 8000 readers")}
        {newsArticle("Is Redux too good?", "Top news - 123 readers")}
        {newsArticle("AJ TRACY LIVE AND DIRECT", "Top news - 6503 readers")}
      </div>
    );
  }
  
  export default Widgets;