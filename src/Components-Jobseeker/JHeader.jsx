import { React, useEffect, useState } from 'react'
import './JHeader.css'
import { Link, NavLink, useLocation } from 'react-router-dom';
import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import { JNotification } from './JNotification';
import bell_dot from '../assets/header_bell_dot.png'
import { AvatarMenu } from './AvatarMenu';
import home_icon from '../assets/home_icon.png'

//Remove after back end integration
const notificationsData = [
    {
        id: 1,
        text: 'Recruiter viewed your profile',
        time: 'Today, 10:45 am',
        isRead: false,
    },
    {
        id: 2,
        text: 'You have an interview invitation from XYZ Pvt Ltd',
        time: 'Yesterday, 4:20 pm',
        isRead: false,
    },
    {
        id: 3,
        text: 'Application submitted successfully for UI/UX Designer',
        time: 'Yesterday, 4:20 pm',
        isRead: true,
    },
    {
        id: 4,
        text: 'Your profile is 90% complete — finish to get more calls',
        time: 'Yesterday, 4:20 pm',
        isRead: true,
    },
    {
        id: 5,
        text: '5 new jobs match your preferences',
        time: '17 Aug 2025, 9:30 am',
        isRead: true,
    },
    {
        id: 6,
        text: '5 new jobs match your preferences',
        time: '17 Aug 2025, 9:30 am',
        isRead: true,
    },
];

export const JHeader = () => {
  const [showNotification, setShowNotification] = useState(false)
  const location = useLocation()
  const newNotificationsCount = notificationsData.filter(n => !n.isRead).length

  const NavLinks = [
    { name: 'Home', path: '/Job-portal/jobseeker/' },
    { name: 'Jobs', path: '/Job-portal/jobseeker/jobs' },
    { name: 'Companies', path: '/Job-portal/jobseeker/companies' },
  ]

  return (
    <header className="header">
      <div className="logo">job portal</div>

      {/* Desktop text navigation */}
      <nav className="jheader-nav-links">
        {NavLinks.map(n => (
          <NavLink
            key={n.name}
            to={n.path}
            className={
              location.pathname === n.path
                ? 'jheader-nav-active'
                : 'jheader-nav-items'
            }
          >
            {n.name}
          </NavLink>
        ))}
      </nav>

      <div className="auth-links">
        <Link
          to="/Job-portal/jobseeker/"
          className="nav-icons mobile-home-icon"
        >
          <img src={home_icon} className="jheader-icons" alt="Home" />
        </Link>

        <Link to="/Job-portal/jobseeker/myjobs" className="nav-icons">
          <img src={breifcase} className="jheader-icons" alt="My Jobs" />
        </Link>

        <Link to="#" className="nav-icons">
          <img src={chat} className="jheader-icons" alt="Chat" />
        </Link>

        <div
          className="nav-icons"
          onClick={() => setShowNotification(!showNotification)}
        >
          <img
            src={newNotificationsCount > 0 ? bell_dot : bell}
            className="jheader-icons"
            alt="Notifications"
          />
        </div>

        <AvatarMenu />
      </div>

      <JNotification
        notificationsData={notificationsData}
        showNotification={showNotification}
        setShowNotification={setShowNotification}
      />
    </header>
  )
}
