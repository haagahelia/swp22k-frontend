import axios from "axios";

const baseUrl = process.env.REACT_APP_BE_SERVER_BASE_URL;

const getOrders = async () => {
  const req = await axios.get(`${baseUrl}/report`);
  return req.data;
};

const getCountry = async () => {
  const req = await axios.get(`${baseUrl}/country`);
  return req.data;
};

const getTypeOrder = async () => {
  const req = await axios.get(`${baseUrl}/type`);
  return req.data;
};

const getUnsignedOrders = async () => {
  const req = await axios.get(`${baseUrl}/report/notsigned`);
  return req.data;
};

const getStatsByOrderType = async () => {
  const req = await axios.get(`${baseUrl}/report/by_order_type`);
  return req.data;
};

const signOrder = async (orderId, formData) => {
  const res = await axios.put(`${baseUrl}/signature/${orderId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res;
};

const saveOrder = async (order) => {
  const res = await axios.post(`${baseUrl}/task`, order);
  return res;
};

const editOrder = async (order) => {
  const res = await axios.put(`${baseUrl}/task`, order);
  return res;
};

const deleteOrder = async (orderId) => {
  const res = await axios.delete(`${baseUrl}/task/${orderId}`);
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
};

export default dao;
// DAO stands for "data access object", our way to the business data model,
// this time via ajax to the backend
