import React from 'react'
import { Link } from 'gatsby'

import { navigate } from '@reach/router'

import { logout, isLoggedIn } from '../utils/auth'
import Auth from '@aws-amplify/auth'
import { primary } from '../utils/colors'
import Github from './svg/Github'

const Header = ({ siteTitle, author }) => (
  <div
    style={{
      background: primary,
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={styles.headerTitle}>
          {siteTitle}
        </Link>
      </h1>
      {isLoggedIn() ? (
        <p
          onClick={() =>
            Auth.signOut()
              .then(logout(() => navigate('/app/login')))
              .catch(err => console.log('eror:', err))
          }
          style={styles.link}
        >
          Sign Out
        </p>
      ) : (
        <div style={styles.icons}>
          <Github author={author} />
        </div>
      )}
    </div>
  </div>
)

const styles = {
  headerTitle: {
    color: 'white',
    textDecoration: 'none',
  },
  link: {
    cursor: 'pointer',
    color: 'white',
    textDecoration: 'underline',
  },
  icons: {
    display: 'flex',
  },
}

export default Header
