import { NextPage } from 'next'

import beeImage from '~assets/img/getty-bees-honey.jpg'

import Layout from '../components/Layout'

const IndexPage: NextPage = () => (
  <Layout title="BeHoney">
    <h1>Hello 🐝</h1>

    <img alt="Bee" src={beeImage} />
  </Layout>
)

export default IndexPage
