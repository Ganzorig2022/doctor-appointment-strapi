'use client';
import DoctorList from '@/app/_components/DoctorList';
import GlobalApi from '@/app/_utilities/GlobalApi';
import React, { useEffect, useState } from 'react';

type Props = {
  params: { cname: string };
};

const SearchPage = ({ params }: Props) => {
  const [doctors, setDoctors] = useState<any[]>([]);

  const getCategoryList = () =>
    GlobalApi.getDoctorByCategory(params.cname).then((res: any) => {
      setDoctors(res.data.data);
    });

  useEffect(() => {
    getCategoryList();
  }, []);
  return (
    <div>
      <DoctorList
        doctorList={doctors}
        heading={params.cname}
      />
    </div>
  );
};

export default SearchPage;
