import React from "react";
import CompanyList from "./companyList";
import RecentArticles from "./recentArticles";

function ListArticle() {
  return <div className="main-data">
    <CompanyList />
    <RecentArticles />
  </div>;
}

export default ListArticle;
