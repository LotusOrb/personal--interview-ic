import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="container vh-100 d-flex align-items-center">
      <div className="row w-100">
        <div className="col-lg-5 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="h4 text-center mb-5">Not Found</h1>
              <Link className="btn btn-primary d-block w-100" to={"/"}>Back To Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
