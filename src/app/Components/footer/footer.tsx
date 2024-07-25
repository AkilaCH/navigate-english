"use client";
import Link from 'next/link';
import React from 'react';
import styles from './footer.module.scss';
import { CONNECT_LINKS, RESOURCE_LINKS, SOCIALS } from '../../../../constant';

const Footer = () => {
    return (
        <>
            <section className={`pt-5 pb-5 ${styles.footer_wrapper}`}>
                <div className={`mt-3 ${styles.footer_container}`}>
                    <h4 className={`mb-5`}>Navigate English</h4>
                    <div className={`${styles.footer_links}`}>
                        {RESOURCE_LINKS.map((resourcelinks) => (
                            <div key={resourcelinks.id}>
                                <h3 className={styles.links_title}>{resourcelinks.title}</h3>
                                <ul className={styles.links_wrapper}>
                                    {resourcelinks.links.map((sublinks) => (
                                        <li key={sublinks.id} className={`mt-3 ${styles.links}`}>
                                            <Link href={sublinks.href}>
                                                {sublinks.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className={`${styles.footer_links}`}>
                        {CONNECT_LINKS.map((connectlinks) => (
                            <div key={connectlinks.id}>
                                <h3 className={styles.links_title}>{connectlinks.title}</h3>
                                <ul className={styles.links_wrapper}>
                                    {connectlinks.links.map((sublinks) => (
                                        <li key={sublinks.id} className={`mt-3 ${styles.links}`}>
                                            <Link href={sublinks.href} key={sublinks.id}>
                                                {sublinks.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className={`${styles.footer_links}`}>
                        {SOCIALS.map((sociallinks) => (
                            <div key={sociallinks.id}>
                                <h3 className={styles.links_title}>{sociallinks.title}</h3>
                                <ul className={styles.links_wrapper}>
                                    {sociallinks.links.map((sublinks) => (
                                        <li key={sublinks.id} className={`mt-3 ${styles.links}`}>
                                            <Link href={sublinks.href}>
                                                {sublinks.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
                <p className={styles.copright}>© 2024,  English Navigate. All rights reserved.</p>
            </section >
        </>

    )
}

export default Footer