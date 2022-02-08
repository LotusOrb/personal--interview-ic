import React from "react";
import { useNavigate } from "react-router-dom";
import { FScreateBlog } from "../../../common/service/firestore/FScreateBlog";
import BaseNavbar from "../../../component/BaseNavbar/BaseNavbar";
import { BlogCreateEditComponent } from "../../../component/Blog/BlogCreateComponent/BlogCreateEditComponent";

export default () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <BaseNavbar />
      <div className="container py-3">
        <BlogCreateEditComponent
          handler={{
            onSubmit: (val) => FScreateBlog(val).then(() => navigate("/app/blog/list")),
          }}
        />
      </div>
    </React.Fragment>
  );
};
