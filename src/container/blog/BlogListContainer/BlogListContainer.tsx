import React, { useEffect, useState } from "react";
import { FSgetBlogList } from "../../../common/service/firestore/FSgetBlog";
import { BlogListComponent } from "../../../component/Blog/BlogListComponent/BlogListComponent";
import { FSDeleteBlog } from "../../../common/service/firestore/FSDeleteBlog";
import { useNavigate } from "react-router-dom";

export const BlogListContainer = () => {
  const navigate = useNavigate();
  const [tickerChange, setTickerChange] = useState(0);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    FSgetBlogList().then((ct) => setData(ct));
  }, [tickerChange]);

  return (
    <React.Fragment>
      <div className="row mb-3">
        <div className="col-6">
          <button className="btn btn-primary" onClick={() => navigate("/app/blog/create")}>
            Add New
          </button>
        </div>
      </div>
      <BlogListComponent
        handler={{
          onDelete: (id) => FSDeleteBlog(id).then(() => setTickerChange(Math.random())),
          onEdit: (id) => navigate("/app/blog/update/" + id),
        }}
        data={data}
      />
    </React.Fragment>
  );
};
