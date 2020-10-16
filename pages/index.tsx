import { NextPage } from 'next'

import beeImage from '~assets/img/getty-bees-honey.jpg'

import Layout from '../components/Layout'
import styles from './index.module.scss'

const IndexPage: NextPage = () => (
  <Layout title="BeHoney">
    <div className="container">
      <h1>Hello 🐝</h1>

      <img alt="Bee" src={beeImage} className={styles.image} />
    </div>
  </Layout>
)

export default IndexPage
