import Head from 'next/head'
import Link from 'next/link'
import { Row, Col, Form } from 'react-bootstrap'

import Navbar from '../../components/Navbar'
import MyButton from '../../components/MyButton'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <div className={styles.container}>
        <Navbar />
      </div>

      <main>

        {/* Submit Section */}
        <div className={styles.submit_section}>
          <div className={styles.submit_card}>
            <h4 className={styles.submit_card_title}>Submit a Message</h4>
            <p className={styles.submit_card_detail}>
              Send us a message and a team member will get back to you as soon as possible.
            </p>
            <Form className={styles.submit_form}>
              <Form.Control
                className={styles.input_box}
                name="firstName"
                type="text"
                placeholder="First Name"
                required
              />
              <Form.Control
                className={styles.input_box}
                name="email"
                type="text"
                placeholder="Email"
                required
              />
              <Form.Control
                className={styles.input_box}
                name="messageDetail"
                as="textarea"
                rows={5}
                placeholder="Message Details"
              />

              <div className="d-sm-flex">
                <Link href="/">
                  <a className={styles.submit_btn}>
                    <MyButton width="180px" height="48px">Send Message</MyButton>
                  </a>
                </Link>
              </div>
            </Form>

          </div>
        </div>

      </main>
    </div>
  )
}
