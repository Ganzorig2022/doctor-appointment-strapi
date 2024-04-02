'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { MENU } from '../_constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { LogOut } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Props = {};

const Header = (props: Props) => {
  const { push } = useRouter();
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log('user', user);
  }, [user]);
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
      {user ? (
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src={user.picture!} />
              <AvatarFallback>
                {user.given_name?.charAt(0)}
                {user.family_name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <ul className='flex flex-col gap-2'>
              <li className='cursor-pointer'>Profile</li>
              <li>
                <LogoutLink>Гарах</LogoutLink>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      ) : (
        <LoginLink>
          <Button>Нэвтрэх</Button>
        </LoginLink>
      )}
    </div>
  );
};

export default Header;
