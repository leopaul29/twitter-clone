import React from "react";
import GithubCorner from "react-github-corner";

import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  return (
    // BEM
    <div className="app">
      <GithubCorner
        href="https://github.com/leopaul29/twitter-clone"
        bannerColor="#50b7f5"
        octoColor="#fff"
        size={80}
        direction="right"
      />
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
