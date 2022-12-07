import React from 'react'
import Head from 'next/head'
import { Row, Col } from 'react-bootstrap'

import Navbar from '../../components/Navbar'
import styles from './Faq.module.css'

export default class secondPage extends React.Component {

  render() {

    return (
      <div>
        <Head>
          <title>Second Page</title>
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
                    <h1 className={styles.hero_title}>Frequently Asked Questions</h1>
                    <p className={styles.hero_detail}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                  </div>
                </Col>

                <Col lg={7}>
                  <div className={styles.hero_right}>
                    <img className={styles.hero_img} src="img2.png" alt="hero" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          {/* Question Section */}

        </main>
      </div>
    )
  }
}
