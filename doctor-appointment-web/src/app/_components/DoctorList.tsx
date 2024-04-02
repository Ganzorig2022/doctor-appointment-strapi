/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  doctorList: any[];
  heading?: string;
};

const DoctorList = ({ doctorList, heading = 'Зарим эмч нар' }: Props) => {
  return (
    <div className='mb-10 px-8'>
      <h2 className='font-bold text-xl text-center mt-4'>{heading}</h2>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7 '>
        {doctorList.length > 0
          ? doctorList.map((doctor) => (
              <div
                key={doctor.id}
                className='border-[1px] rounded-lg p-4 cursor-pointer hover:border-primary hover:shadow-sm transition-all ease-in-out'
              >
                <Image
                  src={doctor?.attributes?.Image?.data[0]?.attributes?.url}
                  alt='doctor'
                  width={500}
                  height={200}
                  className='h-[200px] w-full object-cover rounded'
                />
                <div className='mt-3 items-baseline flex flex-col gap-1'>
                  <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary '>
                    {doctor.attributes?.categories?.data?.attributes.Name}
                  </h2>
                  <h2 className='font-bold'>Др.{doctor.attributes?.Name}</h2>
                  <h2 className='font-bold text-primary'>
                    {doctor.attributes?.Year_of_experience} years
                  </h2>
                  <h2 className='font-bold text-gray-500'>
                    {doctor.attributes?.Address}
                  </h2>
                  <Link
                    href={'/details/' + doctor.id}
                    className='w-full'
                  >
                    <h2 className='p-2 px-3 border-[1px] border-primary w-full text-center rounded-full mt-2 cursor-pointer text-[11px] hover:bg-primary hover:text-white'>
                      Захиалах
                    </h2>
                  </Link>
                </div>
              </div>
            ))
          : [1, 2, 3, 4, 5, 6].map((el) => (
              <div
                key={el}
                className='h-[220px] bg-slate-200 w-full rounded-lg animate-pulse'
              ></div>
            ))}
      </div>
    </div>
  );
};

export default DoctorList;
