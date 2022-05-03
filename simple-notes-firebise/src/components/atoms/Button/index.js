import React from "react";

const Button = ({ title, onClick, loading }) => {
  if (loading) {
    return (
      <button className="btn btn-primary btn-register disable" onClick={onClick}>
        {title}
      </button>
    );
  }
  return (
    <div>
      <button className="btn btn-primary btn-register" onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
