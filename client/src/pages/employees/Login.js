import { Form, Input } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { HideLoading, ShowLoading } from '../../redux/alerts';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post('/api/employee/login', values);
      dispatch(HideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem('token', response.data.data);
        navigate('/employee');
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
      <div className="d-flex align-items-center justify-content-center w-screen py-5">
        <h1 className="text-xlarge secondary-text fw-bold">ADMIN LOGIN</h1>
      </div>

      <div className=" d-flex align-items-center justify-content-center py-1 ">
        <Form
          className="card-md"
          layout="vertical w-400 secondary p-4 text-white"
          onFinish={onFinish}
        >
          <h1 className=" text-white">LOGIN</h1>
          <hr />
          <Form.Item name="employeeId" label="Employee Id">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input type="password" />
          </Form.Item>

          <button className="button-72 px-5 my-4 w-100 ">Login</button>

          <div className="d-flex align-items-center justify-content-center">
            Not Yet Registered -{' '}
            <Link
              to="/register"
              className="text-white text-decoration-none text-small fw-bold lStyle"
            >
              Register
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
