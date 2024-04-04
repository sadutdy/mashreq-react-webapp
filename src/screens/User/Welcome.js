// Login.js
import React from 'react'
import { useAuth } from '../../context/AuthContext'
import UserNavBar from '../../components/UserNav'

import '../../styles/welcome.css'

const UserAvatar = require('../../assets/user-avatar.svg').default

const Welcome = () => {
    const { user, logout, lang, translate, getBgColor } = useAuth()

    const handleLogout = () => {
        logout()
    }

    return (
        <div className="welcome-main center">
            <div
                className={`welcome-block `}
                style={{ backgroundColor: getBgColor() }}
            >
                <UserNavBar title={'home'} />

                <div className="profile-body">
                    <img className="user-image" src={UserAvatar} alt="user-avatar" />
                    <span data-testid="user-welcome-span">
                        {' '}
                        {`${translate('welcome')} ${user?.name || ''}`}
                    </span>
                    <span data-testid="user-selected-lang-span">
                        {' '}
                        Your selected language is : {lang}
                    </span>
                    <button className="button" onClick={handleLogout}>
                        Logout{' '}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Welcome
