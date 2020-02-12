import React from 'react'
import { Link } from 'gatsby'
//import {devicon} from "devicon"
import Layout from '../components/layout'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage = () => {
  //console.log(devicon)
  return (
  <Layout>
    <h3>About</h3>
  </Layout>
)}

export default IndexPage