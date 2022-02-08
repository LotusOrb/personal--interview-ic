import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { BaseInput } from "../../BaseInput/BaseInput";

type TProps = {
  handler: {
    onSubmit: (val: { title: any; body: any }) => void;
  };
  status?: {
    isEdit?: boolean;
  };
  data?: {
    title?: any;
    body?: any;
  };
};

export const BlogCreateEditComponent: React.FC<TProps> = (props) => {
  const formik = useFormik({
    initialValues: {
      title: props.status?.isEdit ? props.data?.title : "",
      body: props.status?.isEdit ? props.data?.body : "",
    },
    validationSchema: yup.object({
      title: yup.string().required(),
      body: yup.string().required(),
    }),
    onSubmit: (val) => {
      props.handler.onSubmit(val);
      formik.resetForm();
    },
  });
  return (
    <div className="row mb-3">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title mb-3">{`${props.status?.isEdit ? "Edit Blog" : "New Blog"}`}</h5>
            <div className="row g-4">
              <div className="col-12">
                <form onSubmit={formik.handleSubmit}>
                  <BaseInput
                    title="Title"
                    errorText={formik.touched.title && (formik.errors.title as any)}
                    inputProps={{ value: formik.values.title, onChange: formik.handleChange("title") }}
                  />
                  <BaseInput
                    title="body"
                    errorText={formik.touched.body && (formik.errors.body as any)}
                    type="textArea"
                    inputProps={{ value: formik.values.body, onChange: formik.handleChange("body") }}
                  />
                  <button className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
