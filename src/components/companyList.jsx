import React from "react";
import CompanyRow from "./companyRow";

function companyList() {
  return (
      <div className="cList">
        <CompanyRow />
        <CompanyRow />
        <CompanyRow />
        <CompanyRow />
        <CompanyRow />
        {/* Implmenting Dynamically List of company with no. of articles  */}
      </div>
  );
}

export default companyList;
