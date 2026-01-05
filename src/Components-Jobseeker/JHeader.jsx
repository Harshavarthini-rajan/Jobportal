import React, { useState } from 'react'
import './JHeader.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import breifcase from '../assets/header_case.png'
import chat from '../assets/header_message.png'
import bell from '../assets/header_bell.png'
import bell_dot from '../assets/header_bell_dot.png'
import headerhome from '../assets/fa-home.png'
import { JNotification } from './JNotification'
import { AvatarMenu } from './AvatarMenu'

// Temporary notification data
const notificationsData = [
  { id: 1, text: 'Recruiter viewed your profile', time: 'Today, 10:45 am', isRead: false },
  { id: 2, text: 'You have an interview invitation from XYZ Pvt Ltd', time: 'Yesterday, 4:20 pm', isRead: false },
  { id: 3, text: 'Application submitted successfully for UI/UX Designer', time: 'Yesterday, 4:20 pm', isRead: true },
]

export const JHeader = () => {
  const [showNotification, setShowNotification] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
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

      <nav className="jheader-nav-links">
        {NavLinks.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            className={
              location.pathname === link.path
                ? 'jheader-nav-active'
                : 'jheader-nav-items'
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      <div className="auth-links">
        <div
          className="nav-icons home-icon"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <img src={headerhome} className="jheader-icons" alt="Home Menu" />
        </div>

        {showMobileMenu && (
          <div className="mobile-home-menu">
            {NavLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className="mobile-menu-item"
                onClick={() => setShowMobileMenu(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}

        <Link to="/Job-portal/jobseeker/myjobs" className="nav-icons">
          <img src={breifcase} className="jheader-icons" alt="My Jobs" />
        </Link>
        <Link to="#" className="nav-icons">
          <img src={chat} className="jheader-icons" alt="Chat" />
        </Link>

        <div onClick={() => setShowNotification(!showNotification)}>
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
