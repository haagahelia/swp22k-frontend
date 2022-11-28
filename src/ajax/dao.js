import axios from "axios";

const baseUrl = process.env.REACT_APP_BE_SERVER_BASE_URL;

const token = localStorage.getItem('token');

const getOrders = async () => {
  const req = await axios.get(`${baseUrl}/report`, 
  {headers:{Authorization: `Bearer ${token}`}});
  return req.data;
};

const getCountry = async () => {
  const req = await axios.get(`${baseUrl}/country`, 
  {headers:{Authorization: `Bearer ${token}`}});
  return req.data;
};

const getTypeOrder = async () => {
  const req = await axios.get(`${baseUrl}/type`, 
  {headers:{Authorization: `Bearer ${token}`}});
  return req.data;
};

const getUnsignedOrders = async () => {
  const req = await axios.get(`${baseUrl}/report/notsigned`, 
  {headers:{Authorization: `Bearer ${token}`}});
  return req.data;
};

const getStatsByOrderType = async () => {
  const req = await axios.get(`${baseUrl}/report/by_order_type`, 
  {headers:{Authorization: `Bearer ${token}`}});
  return req.data;
};

const signOrder = async (orderId, formData) => {
  const res = await axios.put(`${baseUrl}/signature/${orderId}`, formData, {
    headers: { "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}` },
  });
  return res;
};

const saveOrder = async (order) => {
  const res = await axios.post(`${baseUrl}/task`, order,
  {headers:{Authorization: `Bearer ${token}`}});
  return res;
};

const editOrder = async (order) => {
  const res = await axios.put(`${baseUrl}/task`, order,
  {headers:{Authorization: `Bearer ${token}`}})
  return res;
};

const deleteOrder = async (orderId) => {
  const res = await axios.delete(`${baseUrl}/task/${orderId}`,
  {headers:{Authorization: `Bearer ${token}`}})
  return res;
};

const logIn = async (user) => {
  const res = await axios.post(`${baseUrl}/login`, user);
  return res;
};

const dao = {
  getOrders,
  getCountry,
  getTypeOrder,

  getUnsignedOrders,
  getStatsByOrderType,

  signOrder,
  saveOrder,
  editOrder,
  deleteOrder,

  logIn,
};

export default dao;
// DAO stands for "data access object", our way to the business data model,
// this time via ajax to the backend
