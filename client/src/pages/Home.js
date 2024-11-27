import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { Col, Row, Table } from 'antd';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from '../redux/alerts';

function Home() {
  const dispatch = useDispatch();

  const [results, setResults] = React.useState([]);
  const navigate = useNavigate();
  const getResults = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        '/api/results/get-all-results',
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      dispatch(HideLoading());
      if (response.data.success) {
        setResults(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (results.length == 0) {
      getResults();
    }
  }, []);

  return (
    <div className="p-4 primary">
      <div className="header d-flex justify-content-between align-items-center py-3">
        <h1 className="logo"> ScoreSphere</h1>
        <div>
          <h1
            className="cursor-pointer button-7"
            onClick={() => {
              navigate('/login');
            }}
          >
            Login
          </h1>
        </div>
      </div>

      {results.length > 0 ? (
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <h1 className="heading3 text-large mt-5 mx-5">
              Welcome to ScoreSphere{' '}
            </h1>
            <h1 className="heading3 text-medium my-3 mx-5">
              Select Your Examination Below...{' '}
            </h1>
            <hr className="mx-5" />
          </Col>

          {results.map((result) => {
            return (
              <Col span={8}>
                <div
                  className="card2 p-2 mt-2 cursor-pointer mx-5"
                  onClick={() => {
                    navigate(`/result/${result._id}`);
                  }}
                >
                  <h1 className="secondary-text px-5">{result.examination}</h1>
                  <hr />
                  <h1 className="secondary-text px-5">
                    Class : {result.class}
                  </h1>
                </div>
              </Col>
            );
          })}
        </Row>
      ) : (
        <div className="d-flex align-items-center justify-content-center mt-5 pt-5">
          <h1 className="text-medium">No Results Found</h1>
        </div>
      )}
    </div>
  );
}

export default Home;
