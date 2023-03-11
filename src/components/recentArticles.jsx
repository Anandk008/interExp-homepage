import React from "react";
import ArticleCard from "./articleCard";

function recentArticles() {
  return (
      <div className="recentA">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
  );
}

export default recentArticles;
