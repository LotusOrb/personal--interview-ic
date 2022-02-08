import React, { InputHTMLAttributes } from "react";

interface IBaseInputProps {
  prefix?: any;
  suffix?: any;
  errorText?: string | boolean;
  title?: string;
  type?: "textArea" | "input" | undefined;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export const BaseInput: React.FC<IBaseInputProps> = (props) => {
  return (
    <div className="mb-3">
      {props.title && <label className="form-label">{props.title}</label>}
      <div className="input-group mb-3">
        {props.prefix && <span className="input-group-text">{props.prefix}</span>}
        {props.type === "textArea" && (
          <textarea
            rows={6}
            className={`form-control ${props.errorText ? "is-invalid" : ""}`}
            placeholder={props.title ? `Type ${props.title}` : ""}
            {...(props.inputProps as any)}
          />
        )}
        {(typeof props.type === "undefined" || props.type === "input") && (
          <input
            type="text"
            className={`form-control ${props.errorText ? "is-invalid" : ""}`}
            placeholder={props.title ? `Type ${props.title}` : ""}
            {...props.inputProps}
          />
        )}
        {props.suffix && <span className="input-group-text">{props.suffix}</span>}
        {props.errorText && <div className="invalid-feedback">{props.errorText}</div>}
      </div>
    </div>
  );
};
