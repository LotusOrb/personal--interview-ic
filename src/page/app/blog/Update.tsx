import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FSgetOneBlog } from "../../../common/service/firestore/FSgetBlog";
import { FSUpdateBlog } from "../../../common/service/firestore/FSUpdateBlog";
import BaseNavbar from "../../../component/BaseNavbar/BaseNavbar";
import { BlogCreateEditComponent } from "../../../component/Blog/BlogCreateComponent/BlogCreateEditComponent";

export default () => {
  const navigate = useNavigate();
  const param = useParams();
  const [data, setData] = useState<any>();

  useEffect(() => {
    FSgetOneBlog(param.id).then((ct) => {
      setData(ct);
    });
  }, []);

  return (
    <React.Fragment>
      <BaseNavbar />
      <div className="container py-3">
        {data && (
          <BlogCreateEditComponent
            handler={{ onSubmit: (e) => FSUpdateBlog(param.id, e).then(() => navigate("/app/blog/list")) }}
            data={data}
            status={{ isEdit: true }}
          />
        )}
      </div>
    </React.Fragment>
  );
};
