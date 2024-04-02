import CategoryList from '@/app/_components/search/category-list';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className='grid grid-cols-4'>
      <div className='hidde md:block'>
        <CategoryList />
      </div>
      <div className='col-span-3'>{children}</div>
    </div>
  );
};

export default layout;
