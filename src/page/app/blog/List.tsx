import React, { useEffect, useState } from "react";
import BaseNavbar from "../../../component/BaseNavbar/BaseNavbar";
import { BlogListContainer } from "../../../container/blog/BlogListContainer/BlogListContainer";

export default () => {
    return (
    <React.Fragment>
      <BaseNavbar />
      <div className="container py-4">
        <BlogListContainer />
      </div>
    </React.Fragment>
  );
};
