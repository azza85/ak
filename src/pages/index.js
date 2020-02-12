import React from 'react'
import Layout from '../components/layout'
import Flipper from './../components/Flipper'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage = () => {
  return (
    <Layout>
      <h2>About.</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        <Flipper />
        <Flipper />
        <Flipper />
      </div>
    </Layout>
  )
}

export default IndexPage
