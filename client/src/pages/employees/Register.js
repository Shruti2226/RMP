import { Form, Input } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { HideLoading, ShowLoading } from '../../redux/alerts';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post('/api/employee/register', values);
      dispatch(HideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate('/login');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      toast.error(error.message);
    }
  };
  return (
    <div className="primary ">
      <div className="d-flex align-items-center justify-content-center p-2 ">
        <h1 className="text-large secondary-text fw-bold mt-4 ">
          ADMIN REGISTRATION
        </h1>
      </div>

      <div className=" d-flex align-items-center justify-content-center ">
        <Form
          className="card-md"
          layout="vertical w-400 secondary p-4 text-white"
          onFinish={onFinish}
        >
          <h1 className=" text-medium text-white">Register Yourself Here...</h1>
          <hr />
          <Form.Item name="name" label="Employee Name">
            <Input />
          </Form.Item>
          <Form.Item name="employeeId" label="Employee Id">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input type="password" />
          </Form.Item>
          <Form.Item name="confirmPassword" label="Confirm Password">
            <Input type="password" />
          </Form.Item>

          <button className="button-72 px-5 my-4 w-100 ">Register</button>

          <div className="d-flex align-items-center justify-content-center">
            Already Registered -{' '}
            <Link
              to="/login"
              className="text-white text-decoration-none text-small fw-bold lStyle"
            >
              Login
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
