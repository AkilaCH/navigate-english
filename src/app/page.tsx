"use client";
import styles from "./global.module.scss";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Home() {

  const countersRef = useRef<(HTMLHeadingElement | null)[]>([]);

  //check the number is below 1000 and change the const on scroll animation
  useEffect(() => {
    const formatNumber = (num: number): string => {
      if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'M';
      } else if (num <= 1000) {
        return (num).toFixed(0) + 'K';
      }
      else {
        return num.toString();
      }
    };

    const animateCounter = (counter: HTMLHeadingElement, endValue: number) => {
      const duration = 2;
      gsap.fromTo(counter, { innerHTML: 0 }, {
        innerHTML: endValue,
        duration,
        ease: 'power1.inOut',
        snap: { innerHTML: 1 },
        onUpdate: function () {
          counter.innerHTML = formatNumber(Number(this.targets()[0].innerHTML));
        }
      });
    };

    const counters = countersRef.current.filter((counter): counter is HTMLHeadingElement => counter !== null);
    const counts = [1500, 1500, 100]; // The actual counts

    const handleScroll = () => {
      counters.forEach((counter, index) => {
        const rect = counter.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          animateCounter(counter, counts[index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);;


  return (
    <>
      <main>
        {/* Hero Section */}
        <section className={`d-flex ${styles.hero_wrapper}`}>
          <div className={`col-lg-5 col-md-12  ${styles.hero_img_wrapper}`}>
            <img src="./hero_img.png" alt="hero_img" className={`me-1 ${styles.hero_img}`} />
          </div>
          <div className={`col-lg-7 col-md-12 my-5 ${styles.hero_text_wrapper}`}>
            <h1 className={`mb-3 ${styles.hero_title}`}>Master English with Confidence and Ease.</h1>
            <p className={`mb-5 ${styles.hero_paragraph}`}>
              Helping you to Elevate your English language skills and offer personalized support and
              engaging content to guide you every step of the way. Begin your transformation today!
            </p>

            <div className={`mt-5 ${styles.hero_button_wrapper}`}>
              <Button variant="primary" className={`${styles.hero_btn}`}>Free Course</Button>{' '}
              <Button variant="secondary" className={`ms-3 ${styles.hero_btn} ${styles.learn_more_btn}`}>Learn More</Button>{' '}
            </div>
          </div>
        </section >

        {/* Hero Section */}
        <section className={`my-5 ${styles.learn_more_section}`}>
          <h1 className={`text-center ${styles.learn_more_title}`}>Your Journey to Fluent English <br /> Starts Here!</h1>
          <img src="./learn_more_img.png" alt="" className={`mt-3 ${styles.learn_more_img}`} />
          <p className={`mt-5 ${styles.learn_more_para}`}>
            Join our immersive and interactive English courses designed to help you achieve fluency.
            With expert instructors, personalized lessons, and a supportive community, mastering
            English has never been more accessible. Start your journey to confident communication now!
          </p>
          <Button variant="primary" className={`mt-3 ${styles.learn_more_btn}`}>Want to Learn More?</Button>{' '}
        </section>

        {/* Learn faster section */}
        <section className={`my-5 ${styles.learn_faster_section}`}>
          <h3 className={`text-center pt-5 ${styles.learn_faster_title}`}>Learn Faster and see the quick difference</h3>

          <div className={`mt-5 d-flex ${styles.ads_section_wrapper}`}>
            <div className={`col-lg-6 col-md-12 ps-3 ${styles.ads_image_section}`}>
              <img src="./tab-img.png" alt="" className={`${styles.ads_ads_image}`} />
            </div>
            <div className={`col-lg-6 col-md-12 mb-3 p-3 ${styles.ad_text_section}`}>
              <p className={`${styles.ad_text}`}>
                Elevate your English language skills through dynamic
                lessons and practical exercises. Whether you're a
                beginner or looking to refine your proficiency, our
                expert-led courses offer personalized support and
                engaging content to guide you every step of the way.
                Begin your transformation today
              </p>
              <Form.Control
                type="text"
                placeholder="youremail@mail.com"
                aria-label="Disabled input example"
                className={`${styles.email_input}`}
              />
              <Button variant="primary" className={`my-3 ${styles.ads_section_btn}`}>Free Course</Button>{' '}
            </div>
          </div>
        </section>

        {/* about me section */}
        <section className={`pt-3 mb-5 ${styles.about_me_section}`}>
          <h3 className={`text-center py-3 ${styles.learn_faster_title}`}>About the Instructor</h3>

          <img src="./About_me.png" alt="about-me" className={styles.about_me_img} />

          <div className={`mt-5 ${styles.about_me_text}`}>
            <p className={styles.about_me_para}>
              Welcome to your gateway to mastering English!
              I’m <span className={styles.span_text}>Harshani Dissanayake</span>, an experienced English
              instructor dedicated to helping you achieve fluency
              and confidence in the language.
            </p><br />
            <p className={styles.about_me_para}>
              My personalized, interactive courses are designed to
              meet your unique needs and learning style. Whether
              you're looking to enhance your communication skills
              for personal growth or professional advancement, I'm
              here to guide you every step of the way.
            </p><br />
            <p className={styles.about_me_para}>
              Start your journey to English excellence with tailored
              lessons and supportive guidance today!
            </p>

            <Button variant="primary" className={`my-5 ${styles.about_me_btn}`}>Let’s Get Start with me!</Button>{' '}
          </div>
        </section>

        {/* about me section */}
        <section className={`pt-5 pb-5 ${styles.static_section}`}>
          <div className={styles.static_info}>
            <h1 className={styles.static_number} ref={el => { countersRef.current[0] = el; }}>0<span className={styles.points}></span></h1>
            <div className={styles.static_number_info}>subscribe to weekly <br />
              lessons on YouTube</div>
          </div>
          <div className={styles.static_info}>
            <h1 className={styles.static_number} ref={el => { countersRef.current[1] = el; }}>0<span className={styles.points}></span></h1>
            <div className={styles.static_number_info}>Student have <br />
              taken my course</div>
          </div>
          <div className={styles.static_info}>
            <h1 className={styles.static_number}>100</h1>
            <div className={styles.static_number_info}>Free videos of <br />
              English Lessons</div>
          </div>
        </section>

        {/* Find me  section */}
        <section className={`pt-3 pb-5 ${styles.find_me_section}`}>
          <h3 className={`text-center py-5 ${styles.learn_faster_title}`}>Find Me Here!</h3>
          <div className={`row`}>
            
            <div className={`col-lg-7 ${styles.social_media_boxs}`}>
              <Card className={`${styles.social_media_links_boxs}`}>
                <Card.Img variant="top" src="./youtube.png" className={styles.box_img} />
                <Card.Body>
                  <Card.Text className={styles.card_text}>
                    YouTube
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className={`col-lg-5 ${styles.social_media_boxs}`}>
              <Card className={`${styles.social_media_links_boxs}`}>
                <Card.Img variant="top" src="./Instagram.png" className={styles.box_img} />
                <Card.Body>
                  <Card.Text className={styles.card_text}>
                    Instagram
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className={`row ${styles.social_media_boxs_row}`}>
            
            <div className={`col-lg-5 ${styles.social_media_boxs}`}>
              <Card className={`${styles.social_media_links_boxs}`}>
                <Card.Img variant="top" src="./facebook.png" className={styles.box_img} />
                <Card.Body>
                  <Card.Text className={styles.card_text}>
                    Facebook
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className={`col-lg-7 ${styles.social_media_boxs}`}>
              <Card className={`${styles.social_media_links_boxs}`}>
                <Card.Img variant="top" src="./podcast.png" className={styles.box_img} />
                <Card.Body>
                  <Card.Text className={styles.card_text}>
                    Podcast
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}

function formatNumber(innerHTML: any): any {
  throw new Error("Function not implemented.");
}

