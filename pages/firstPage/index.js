import Head from 'next/head'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'

import Navbar from '../../components/Navbar'
import MyButton from '../../components/MyButton'
import styles from './Landlord.module.css'

export default function FirstPage() {
  return (
    <div>
      <Head>
        <title>First Page</title>
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
                  <h1 className={styles.hero_title}>Finding Great Tenants Made Easier</h1>
                  <p className={styles.hero_detail}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                  </p>
                  <div className="d-none d-sm-flex">
                    <Link href="contact">
                      <a className={styles.tenant_btn}>
                        <MyButton width="180px" height="48px">Get Started</MyButton>
                      </a>
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg={7}>
                <div className={styles.hero_right}>
                  <img className={styles.hero_img} src="/img0.png" alt="hero" />
                </div>
              </Col>
            </Row>

            <div className="d-block d-sm-none">
              <Link href="#">
                <a className={styles.tenant_btn_1}>
                  <MyButton width="180px" height="48px">GET STARTED</MyButton>
                </a>
              </Link>
            </div>
          </div>
        </div>


      </main>
    </div>
  )
}
