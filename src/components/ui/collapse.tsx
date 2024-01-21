import React, { useEffect, useState } from 'react';
import ExpandUpIcon from '@/assets/icons/expand-up-icon';
import ExpandDownIcon from '@/assets/icons/expand-down-icon';
import UsersIcon from '@/assets/icons/users-icon';
import Link from 'next/link';

type Props = {
  items: any;
  title: string;
  icon?: string;
  index?: number;
  indexCollapse?: number;
  setIndexCollapse?: any;
};

function Collapse({
  items,
  title,
  icon,
  index,
  indexCollapse,
  setIndexCollapse,
}: Props) {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [indexColor, setIndexColor] = useState(0);

  return (
    <div className='mb-4 w-full'>
      <div className='flex w-full flex-row justify-between border-b-2 border-orange-300 shadow-sm'>
        <div className='flex flex-row gap-1 p-1'>
          <div>
            <Link
              onClick={() => {
                setIndexColor(999);
                setIndexCollapse(index);
              }}
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              className={`flex flex-row items-center justify-center gap-1 hover:text-orange-300 ${indexColor === 999 && indexCollapse === index ? 'text-orange-300' : ''}`}
              href='/admin/dashboard/'
            >
              {icon === 'person' ? (
                <UsersIcon
                  color={
                    hover
                      ? '#FDBA74'
                      : indexColor === 999 && indexCollapse === index
                        ? '#FDBA74'
                        : '#000000'
                  }
                />
              ) : null}
              <span>{title}</span>
            </Link>
          </div>
        </div>
        <div
          onClick={() => {
            setOpen(!open);
            setIndexCollapse(0);
          }}
          className='flex cursor-pointer items-center p-1'
        >
          {open ? <ExpandDownIcon /> : <ExpandUpIcon />}
        </div>
      </div>
      <div className='ml-2 mt-1 gap-1'>
        {open ? (
          <div>
            {items.map((a: any, i: any) => (
              <Link
                onClick={() => {
                  setIndexColor(i + 1);
                  setIndexCollapse(index);
                }}
                key={i}
                className={`flex flex-row hover:text-orange-300 ${indexColor === i + 1 && indexCollapse === index ? 'text-orange-300' : ''}`}
                href={a.href}
              >
                <span>{a.title}</span>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Collapse;
