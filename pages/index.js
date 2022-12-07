import Head from 'next/head'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'

import Navbar from '../components/Navbar'
import MyButton from '../components/MyButton'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>RentBarker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <div className={styles.container}>
        <Navbar />
      </div>

      <main>
        {/* Hero Section */}
        <div className={styles.hero_section}>
          <div className={styles.container}>
            <Row>
              <Col lg={5} className="d-flex align-items-center pr-xl-0">
                <div className={styles.hero_content}>
                  <h1 className={styles.hero_title}>Lorem Ipsum is Simply Dummy Text of the Printing Industry.</h1>
                  <p className={styles.hero_detail}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                  </p>
                  <div className="d-none d-sm-flex">
                    <Link href="contact">
                      <a className={styles.tenant_btn}>
                        <MyButton width="180px" height="48px">Contact Us</MyButton>
                      </a>
                    </Link>

                    <Link href="#">
                      <a className="">
                        <MyButton width="180px" height="48px" color="#126660" backgroundColor="#fff">Button 2</MyButton>
                      </a>
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg={7}>
                <div className={styles.hero_right}>
                  <img className={styles.hero_img} src="/img0.png" alt="img0" />
                  <div className={styles.hero_orange}>
                    <h4 className={styles.orange_title}>Test  React</h4>
                    <p className={styles.orange_detail}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                    <p className={styles.orange_name}>Felicia Harrison</p>
                    <p className={styles.orange_address}>Dallas, TX</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </main>
    </div>
  )
}
