import React, { useEffect, useState } from "react";

const TextBox = props => {
  const [error, setError] = useState(props.error ? props.error : {});
  const [value, setValue] = useState(
    props.formdata[props.id] ? props.formdata[props.id] : ""
  );
  const onToDoChange = e => {
    setValue(e.target.value);
    props.formdata[props.id] = e.target.value;
    if (props.onChange) props.onChange(e);
  };
  const onBlur = () => {
    if (props.formdata[props.id] && props.onBlur)
      props.onBlur(props.formdata[props.id]);
  };
  useEffect(() => {
    setError(props.error ? props.error : {});
    setValue(props.formdata[props.id] ? props.formdata[props.id] : "");
  }, [props]);
  return (
    <div
      className={
        (props.className ? props.className : "form-group") +
        (error[props.id] ? " pb-2" : "")
      }
    >
      {!props.innerLabel ? (
        <label className="form-label">
          <>{props.label}</>
          {props.required ? <span className="text-danger"> *</span> : null}
        </label>
      ) : null}
      <input
        onBlur={onBlur}
        value={value}
        onChange={onToDoChange}
        type={props.type ? props.type : "text"}
        name={props.id}
        id={props.id}
        className="form-control"
        placeholder={props.placeholder ? props.placeholder : ""}
      />
      <span className="pull-left input-err">{error[props.id]}</span>
      {props.innerLabel ? <label>{props.label}</label> : null}
    </div>
  );
};

export default TextBox;
