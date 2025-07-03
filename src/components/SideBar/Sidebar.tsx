import SidebarItemComponent from './SidebarItemComponent';
import type { SidebarItem } from './SidebarItemComponent';
import { FaHome, FaUsers, FaCog , FaPagelines , FaArrowRight ,FaArrowLeft   } from 'react-icons/fa';
import { MdOutlineSecurity } from "react-icons/md";
import { FiAperture } from "react-icons/fi";
import { useState } from 'react';

const sidebarItems: SidebarItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <FaHome />,
  },
  {
    title: 'Menu Style',
    icon: <FaUsers />,
    children: [
      { title: 'All Users', path: '/users/all' },
      { title: 'Add User', path: '/users/add' },
    ],
  },
  {
    title: 'Design System',
    path: '/',
    icon: <FaCog />,
  },
];

const pagebarItems : SidebarItem[] = [
    {
        title : "Special Pages",
        icon : < FaPagelines/>,
        children: [
            { title: 'Billing', path: '/' },
            { title: 'Calendar', path: '/' },
            { title: 'Billing', path: '/' },
            { title: 'Calendar', path: '/' },
            { title: 'Billing', path: '/' },
            { title: 'Calendar', path: '/' },
          ],
    },
    {
        title : "Authentication",
        icon : <MdOutlineSecurity/>,
        children : [
            { title: 'Billing', path: '/' },
            { title: 'Calendar', path: '/' },
            { title: 'Billing', path: '/' },
            { title: 'Calendar', path: '/' },
            { title: 'Billing', path: '/' },
            { title: 'Calendar', path: '/' },
        ]
    },
    {
        title : "Users",
        icon : <FaUsers/>,
        children : [
            {title : 'Users Profile' , path:'/'},
            {title : 'Add Users' , path:'/add'},
            {title : 'Users List' , path:'/readuser'}
        ]
    },
    {
        title : "Utilities",
        icon : <FiAperture />,
        children : [
            {title : 'Users Profile' , path:'/'},
            {title : 'Add Users' , path:'/'},
            {title : 'Users List' , path:'/'}   
        ]

    }
]


const elementItems : SidebarItem[] = [
    {
        title : "Componnets",
        icon : < FaPagelines/>,
        children: [
            { title: 'Billing', path: '/' },
            { title: 'Calendar', path: '/' },
            { title: 'Billing', path: '/' },
            { title: 'Calendar', path: '/' },
            { title: 'Billing', path: '/' },
            { title: 'Calendar', path: '/' },
          ],
    },
    {
        title : "Security",
        icon : <MdOutlineSecurity/>,
        children : [
            { title: 'Billing', path: '/' },
            { title: 'Calendar', path: '/' },
            { title: 'Billing', path: '/' },
            { title: 'Calendar', path: '/' },
            { title: 'Billing', path: '/' },
            { title: 'Calendar', path: '/' },
        ]
    },
    {
        title : "People",
        icon : <FaUsers/>,
        children : [
            {title : 'Users Profile' , path:'/'},
            {title : 'Add Users' , path:'/'},
            {title : 'Users List' , path:'/'}
        ]
    },
    {
        title : "Utilities",
        icon : <FiAperture />,
        children : [
            {title : 'Users Profile' , path:'/'},
            {title : 'Add Users' , path:'/'},
            {title : 'Users List' , path:'/'}   
        ]

    }
]


const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

  return (
    <div
            className={`  overflow-y-auto h-screen space-y-2  md:flex md:flex-col md:static absolute left-0 z-20
                ${collapsed ? 'md:w-20 w-14 md:border-r-2  max-h-fit md:p-4 max-w-fit md:bg-white ' : 'w-64 border-r-2 p-4 bg-white'}
                transition-all duration-300 ease-in-out`}
            >

    <div className='flex justify-between'>
        {!collapsed ? <h1>Home</h1> : <h1 className='pl-3 hidden md:block '>-</h1>}
        <button onClick={() => setCollapsed(!collapsed)} className='bg-blue-500 text-white px-2 py-2 md:ml-2 ml-0 rounded-full'> {collapsed ? <FaArrowRight /> : <FaArrowLeft />} 
        </button>
    </div>

      {sidebarItems.map((item, index) => (
        <SidebarItemComponent key={index} item={item} collapsed={collapsed} />
      ))}

      <hr className={`${collapsed ? 'md:block hidden' : 'block'}`}></hr>
      {!collapsed ? <h1>Pages</h1> : <h1 className='pl-3 hidden md:block '>-</h1>}

      {pagebarItems.map((item, index) => (
        <SidebarItemComponent key={index} item={item} collapsed={collapsed}/>
      ))}

      <hr className={`${collapsed ? 'md:block hidden' : 'block'}`}></hr>
      {!collapsed ? <h1>Elements</h1> : <h1 className='pl-3 hidden md:block '>-</h1>}

      {elementItems.map((item, index) => (
        <SidebarItemComponent key={index} item={item} collapsed={collapsed} />
      ))}



    </div>
  );
};

export default Sidebar;
