import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageTitle({ title }) {
  const navigate = useNavigate();
  return (
    <div className="px-5 py-5 d-flex gap-5 align-items-center">
      <i
        className="ri-arrow-left-line"
        onClick={() => {
          navigate(-1);
        }}
      ></i>
      <h1 className="text-large title">{title}</h1>
      <hr />
    </div>
  );
}

export default PageTitle;
