import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';

type Props = {};

const CategorySearch = (props: Props) => {
  return (
    <div className='mb-10 flex items-center  flex-col gap-2'>
      <h2 className='font-bold text-4xl tracking-wide'>
        <span className='text-primary'>Эмч</span> Xайх
      </h2>
      <h2 className='text-gray-400 text-xl'>
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
    </div>
  );
};

export default CategorySearch;
