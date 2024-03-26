'use client';
import Image from 'next/image';
import React from 'react';
import { MENU } from '../_constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Props = {};

const Header = (props: Props) => {
  const { push } = useRouter();
  return (
    <div className='flex items-center justify-between p-4 shadow-sm'>
      <div className='flex items-center gap-10 '>
        <Image
          className='cursor-pointer'
          src='/logo.svg'
          alt='logo'
          width={180}
          height={80}
          onClick={() => push('/')}
        />
        <ul className='md:flex gap-8 hidden'>
          {MENU.map((item, i) => (
            <Link
              href={item.path}
              className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'
              key={item.id}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
      <Button>Одоо захиал</Button>
    </div>
  );
};

export default Header;
