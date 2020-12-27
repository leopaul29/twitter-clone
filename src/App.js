import React from "react";
import GithubCorner from "react-github-corner";

import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  const githubCornerUrl = "https://github.com/leopaul29/twitter-clone"
  return (
    // BEM
    <div className="app">
      <GithubCorner
        href={githubCornerUrl}
        bannerColor="#50b7f5"
        octoColor="#fff"
        size={80}
        direction="right"
        target="_blank"
        rel="noreferrer"
      />
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
