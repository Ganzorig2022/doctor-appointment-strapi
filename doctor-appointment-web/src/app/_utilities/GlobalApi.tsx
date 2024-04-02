/* eslint-disable import/no-anonymous-default-export */
'use client';
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getCategories = () => axiosClient.get('/categories?populate=*');
const getDoctors = () => axiosClient.get('/doctors?populate=*');
//https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication#example-find-users-having-john-as-a-first-name
const getDoctorByCategory = (category: string) =>
  axiosClient.get(
    `/doctors?filters[categories][Name][$in]=${category}&populate=*`,
  );

const getDoctorById = (id: string) =>
  axiosClient.get('/doctors/' + id + '?populate=*');

const bookAppointment = (data: any) => axiosClient.post('/appointments', data);

const getUserBookingList = (userEmail: string) =>
  axiosClient.get(
    '/appointments?[filters][Email][$eq]=' +
      userEmail +
      '&populate[doctor][populate][image][populate][0]=url&populate=*',
  );

const deleteBooking = (id: string) => axiosClient.delete('/appointments/' + id);

const sendEmail = (data: any) => axios.post('/api/sendEmail', data);

export default {
  getCategories,
  getDoctors,
  getDoctorByCategory,
  getDoctorById,
  bookAppointment,
  getUserBookingList,
  deleteBooking,
  sendEmail,
};
