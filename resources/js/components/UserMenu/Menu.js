import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../css/loading.css';

import Skeleton from '../Loading/Skeleton';

function ShowCources(){
    if (document.getElementById('display')) {
        ReactDOM.render(<Courses /> , document.getElementById('display'));
      }
}

function ShowMaterials(){
    if (document.getElementById('display')) {
        ReactDOM.render(<Materials /> , document.getElementById('display'));
      }
}

function ShowUsers(){
    if (document.getElementById('display')) {
        ReactDOM.render(<Users /> , document.getElementById('display'));
      }
}


function Menu() {
  return (
    <div>
      <button onClick={ShowCources}>Courses</button>
      <hr />
      <button onClick={ShowMaterials}>Materials</button>
      <hr />
      <button onClick={ShowUsers}>Users</button>
    </div>
  );
}

function Display(props) {
  return <div>{props.data}</div>;
}


function Materials() {
  const [isLoading, setIsLoading] = useState([]);
  const [materialData, setMaterialData] = useState([]);

  useEffect(() => {

    setIsLoading(true);

    axios
      .get('/show-materials/0')
      .then(function (response) {
        console.log(response.data);
        const stringifiedData = JSON.stringify(response.data);
        setMaterialData(stringifiedData);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });

  }, []);


  return (
    <div>
      {isLoading ? (

        <div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </div>
      ) : (
        <Display data={materialData} />
      )}
    </div>
  );
}



function Users() {
  const [isLoading, setIsLoading] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get('/show-users/0')
      .then(function (response) {
        console.log(response.data);
        const stringifiedData = JSON.stringify(response.data);
        setUserData(stringifiedData);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }, []);

  return (
    <div>
      {isLoading ? (
            <div>
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
      ) : (
        <Display data={userData} />
      )}
    </div>
  );
}



function Courses() {
  const [isLoading, setIsLoading] = useState([]);
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get('/show-courses/0')
      .then(function (response) {
        console.log(response.data);
        const stringifiedData = JSON.stringify(response.data);
        setCourseData(stringifiedData);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }, []);

  return (
    <div>
      {isLoading ? (
            <div>
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
      ) : (
        <Display data={courseData} />
      )}
    </div>
  );
}


export default { Menu, Display, Courses, Materials, Users };

if (document.getElementById('menu')) {
  ReactDOM.render(<Menu />, document.getElementById('menu'));
}

if (document.getElementById('display')) {
    ReactDOM.render(<Users />, document.getElementById('display'));
  }