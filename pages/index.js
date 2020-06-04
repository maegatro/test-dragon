import React, { Component } from "react";
// import "./index.css";
import Sandbox from "./Sandbox";
import Link from "next/link";

class Index extends Component {
  state = {};
  render() {
    return (
      <Link href="/Sandbox">
        <a>go to Sandbox</a>
      </Link>
    );
  }
}

export default Index;
