'use client';

import { useEffect, useState } from 'react';
import CategorySearch from './_components/CategorySearch';
import DoctorList from './_components/DoctorList';
import Hero from './_components/Hero';
import GlobalApi from './_utilities/GlobalApi';

export default function Home() {
  const [doctorList, setDoctorList] = useState<any[]>([]);

  const getDoctorList = () =>
    GlobalApi.getDoctors().then((res: any) => {
      setDoctorList(res.data.data);
    });

  useEffect(() => {
    getDoctorList();
  }, []);
  return (
    <div>
      <Hero />
      <CategorySearch />
      <DoctorList doctorList={doctorList} />
    </div>
  );
}
