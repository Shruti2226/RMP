import React from 'react';
import { Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

function EmployeeHome() {
  const navigate = useNavigate();
  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <Row gutter={[20, 20]} className="rowStyle">
        <Col span={12}>
          <div
            className=" p-5 card1 cursor-pointer align-items-center justify-content-center gap-3"
            onClick={() => {
              navigate('/employee/students');
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/2995/2995459.png"
              height={100}
              width={100}
              className="mx-4"
              alt="logo"
            />
            <h1 className="heading2 px-2">Students</h1>
          </div>
        </Col>
        <Col span={12}>
          <div
            className="p-5 card1 cursor-pointer align-items-center justify-content-center gap-3"
            onClick={() => {
              navigate('/employee/results');
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/3701/3701722.png"
              height={100}
              width={100}
              className="mx-4"
              alt="logo"
            />
            <h1 className="heading2 px-3">Results</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default EmployeeHome;
