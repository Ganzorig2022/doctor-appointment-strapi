/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../_utilities/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const CategorySearch = (props: Props) => {
  const [categoryList, setCategorylist] = useState<any[]>([]);

  const getCategoryList = () =>
    GlobalApi.getCategories().then((res: any) => {
      setCategorylist(res.data.data);
    });

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div className='mb-10 flex items-center  flex-col gap-2'>
      <h2 className='font-bold text-4xl tracking-wide'>
        <span className='text-primary'>Эмч</span> Xайх
      </h2>
      <h2 className='text-gray-400 text-xl px-5'>
        Нэг л click-ээр эмчээ хайж, цаг захиалга өгөх
      </h2>
      <div className='flex w-full mt-3 max-w-sm items-center space-x-2'>
        <Input
          type='text'
          placeholder='хайх...'
        />
        <Button type='submit'>
          <Search className='h-4 w-4 mr-2' />
          Хайх
        </Button>
      </div>
      {/* Category List */}
      <div className='mt-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2'>
        {categoryList.length > 0
          ? categoryList.map((item) => (
              <Link
                href={'/search/' + item.attributes.Name}
                key={item.id}
                className='flex flex-col text-center gap-2 items-center p-5 bg-blue-50 rounded-lg m-2 hover:scale-110 transition-all ease-in-out cursor-pointer'
              >
                <Image
                  src={item?.attributes?.Icon?.data?.attributes?.url}
                  alt='logo'
                  width={40}
                  height={40}
                />
                <label className='text-blue-600 text-sm'>
                  {item?.attributes?.Name}
                </label>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6].map((el) => (
              <div
                key={el}
                className='m-2 h-[120px] w-[130px] bg-slate-200 rounded-lg animate-pulse'
              ></div>
            ))}
      </div>
    </div>
  );
};

export default CategorySearch;
