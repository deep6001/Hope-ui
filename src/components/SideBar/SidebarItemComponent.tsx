'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { GoDotFill } from 'react-icons/go';
import type { RootState } from '@/redux/store';
import { setActiveItem } from '@/redux/sidebarSlice';

export type SidebarItem = {
  title: string;
  path?: string;
  icon?: React.ReactNode;
  children?: SidebarItem[];
};

type Props = {
  item: SidebarItem;
  collapsed?: boolean;
};

const SidebarItemComponent = ({ item, collapsed }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const activeTitle = useSelector((state: RootState) => state.sidebar.activeTitle);

  const isActive = activeTitle === item.title || item.path === pathname;

  const handleClick = () => {
    dispatch(setActiveItem(item.title));
    if (item.path) {
      router.push(item.path);
    }
  };

  const handleChildClick = (childPath?: string) => {
    if (childPath) {
      router.push(childPath);
    }
  };

  return (
    <div className={`${collapsed ? 'md:block hidden' : 'block'}`}>
      <div
        onClick={handleClick}
        className={`flex items-center justify-between p-2 cursor-pointer rounded-md transition-all ${
          isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-100 text-gray-500'
        }`}
      >
        <div className={`flex items-center gap-2 ${collapsed ? 'md:flex hidden' : 'flex'}`}>
          {item.icon}
          {!collapsed && <span className="font-medium">{item.title}</span>}
        </div>

        {item.children && !collapsed && (
          <FaArrowRight className={`transition-transform ${isActive ? 'rotate-90' : ''}`} />
        )}
      </div>

      {isActive && item.children && !collapsed && (
        <div className="ml-4 mt-2 space-y-1">
          {item.children.map((child, index) => (
            <div
              key={index}
              onClick={() => handleChildClick(child.path)}
              className="cursor-pointer p-2 rounded-md text-sm flex gap-1 items-center hover:bg-blue-100 text-gray-500"
            >
              <span className="flex gap-1 items-center">
                <GoDotFill />
                {child.title}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItemComponent;
