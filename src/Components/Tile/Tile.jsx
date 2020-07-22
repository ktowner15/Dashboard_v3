import React, { Component } from "react";
import "./tile.css";
import infoPage from "../rawHTML/infoPage.html";

class Tile extends Component {
  redirect() {
    //Redirects the current window to a raw HTML page where info will be displayed.

    /* This was difficult to figure out, so be wary of changing it.  See
     * https://www.w3schools.com/js/js_htmldom_navigation.asp
     * for more info on walking through the JS DOM tree.
     * My mistake was trying to accomplish this exclusively through the HTML DOM
     * instead of using both the HTML DOM + the JS DOM.
     */

    // Early attempt at printing info to console:
    // console.log(document.getElementById("applications").innerHTML);

    //Logging DOM tree info to console (test):
    //console.log(document.getRootNode().body.innerHTML);
    document.getRootNode().body.innerHTML = infoPage;
  }
  render() {
    return (
      <div className="tile">
        <div className="top">
          <h2 className="qppName">{this.props.appName}</h2>
        </div>
        <div className="bottom">
          <p className="info">{this.props.description}</p>
          <p className="info">{this.props.owner}</p>
          <button className=" button" onClick={this.redirect}>
            Environments
          </button>
        </div>
      </div>
    );
  }
}

export default Tile;
