import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

type TProps = {
  handler: {
    onEdit: (id: any) => void;
    onDelete: (id: any) => void;
  };
  data?: Array<{
    id?: any;
    title?: string;
    body?: string;
  }>;
};

export const BlogListComponent: React.FC<TProps> = (props) => {
  return (
    <div className="row g-4">
      {props.data && props.data?.length > 0 ? (
        props.data.map((ctx, idx) => (
          <div className="col-lg-4" key={idx}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ctx.title || "-"}</h5>
                <p className="card-text">{ctx.body || "-"}</p>
                <div className="btn-group w-100" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-warning" onClick={() => props.handler.onEdit(ctx.id)}>
                    Edit
                  </button>
                  <button type="button" className="btn btn-danger" onClick={() => props.handler.onDelete(ctx.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-12">
          <h5>No Data</h5>
        </div>
      )}
    </div>
  );
};
