import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="about-wrapper">
            <img
              src={config.userAvatar}
              className="about-img"
              alt={config.userName}
            />
            <CardText>
              <p className="about-text md-body-1">This is the company blog for <a href="https://www.hasslefreebeats.com" >HassleFreeBeats</a>, the web's top destination for quality rap and hip hop beats. We have spent years refining our craft, and we want to share what we have learned in the process with you. Our team of producers and writers will post tips to help you make the next hit song, or simply to help you streamline your creative process. We work hard to try and identify topics that might prove useful to our readers, but we are always accepting suggestions at <a href="mailto:support@hasslefreebeats.com">support@hasslefreebeats.com.</a></p>
            </CardText>
            <UserLinks labeled config={config} />
          </div>
        </Card>
      </div>
    );
  }
}

export default About;
