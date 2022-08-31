import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';

//import * from "react-icons/md";

export const SidebarData = [
  {
    title: 'Applicant List',
    path: '/admin/adminpanel',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Record Track',
    path: '/admin/recordlist',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Booking Slots',
    path: '/admin/bookingslots',
    icon: <GiIcons.GiNotebook />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Schedule Events',
  //   path: '/team',
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Videos',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Payments',
  //   path: '/support',
  //   icon: <MdIcons.MdOutlinePayment />,
  //   cName: 'nav-text'
  // },
  //  {
  //   title: 'Logout',
  //   path: '/user/logout',
  //   icon: <IoIcons.IoMdLogOut />,
  //   // icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];