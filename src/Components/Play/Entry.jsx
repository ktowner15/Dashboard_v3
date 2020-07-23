import React, { Component } from "react";
import "./Entry.css";
import infoPage from "../rawHTML/infoPage.html";
//How to import the table
import e_list from "../../Resources/env_table";

class Entry extends Component {
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
      <div className="Entry">
        <dt>
          <span className="tile" role="img" aria-label="Click" />
          <span> Click </span>
        </dt>
        <dd>FSE</dd>
        <dd>
          <button className=" button" onClick={this.redirect}>
            Environments
          </button>
        </dd>
      </div>
    );
  }
}

export default Entry;
