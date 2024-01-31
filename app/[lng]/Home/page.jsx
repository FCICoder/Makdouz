import Link from 'next/link'
import React from 'react'
import styles from './home.module.css'
import { useTranslation } from "../../i18n";
import Carusel from './carusel';

export default async function Content({ lng }) {

  const { t } = await useTranslation(lng, 'home');


  return <>
    <Carusel />

    <section>
      

    </section>

    <section className={`${styles.infoSection}`} >
      
    </section>

  </>

}
