'use client';
import GlobalApi from '@/app/_utilities/GlobalApi';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type Props = {};

const CategoryList = (props: Props) => {
  const [categoryList, setCategorylist] = useState<any[]>([]);
  const params = usePathname();
  const category = params.split('/')[2];

  const getCategoryList = () =>
    GlobalApi.getCategories().then((res: any) => {
      setCategorylist(res.data.data);
    });

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div className='h-screen flex flex-col mt-5'>
      <Command>
        <CommandInput placeholder='Категороор хайна уу...' />
        <CommandList className='overflow-visible'>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup
            heading='Категориуд'
            className='overflow-visible'
          >
            {categoryList &&
              categoryList.map((cat) => (
                <CommandItem key={cat.id}>
                  <Link
                    href={'/search/' + cat.attributes.Name}
                    className={`p-2 flex gap-2 text-[1₮px] text-blue-600 rounded-md cursor-pointer w-full ${
                      category === cat.attributes.Name && 'bg-blue-100'
                    }`}
                  >
                    <Image
                      src={cat?.attributes?.Icon?.data?.attributes?.url}
                      alt='icon'
                      width={25}
                      height={25}
                    />
                    {cat?.attributes?.Name}
                  </Link>
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
    </div>
  );
};

export default CategoryList;
