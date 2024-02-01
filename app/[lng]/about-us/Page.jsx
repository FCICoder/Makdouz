import { imageOptimizer } from "next/dist/server/image-optimizer";
import Image from "next/image";
import React from "react";
import Astyles from './about.module.css'
import olives from '@/public/assets/assorted-olives.jpg'
import { useTranslation } from "@/app/i18n";

export default async function Page({lng}) {
  const { t } = await useTranslation(lng, "about-us");

  return <>
  <div className="row m-auto my-2">
    <div className="col-md-6" >
      <h3>{t('part1')}</h3>
      <p className={`${Astyles.para}`}>{t('part1.1')}</p>
      <p className={`${Astyles.para}`}>{t('part2')}</p>
      <p className={`${Astyles.para}`}>{t('part3')}</p>


    </div>
    <div className="border rounded col-md-6 p-1">
    <Image
      src={olives}
      width={500}
      height={400}
      alt="assorted-olives"
      className="img-fluid rounded"
    />
    </div>

  </div>
  <div className="row m-0 p-0">
    <div className="col-md-6">
      <h3 className={`${Astyles.head1}`}>{t('part4')}</h3>
      <p className={`${Astyles.para}`}>{t('part5')}</p>


    </div>
    <div className="col-md-6">
    <h3 className={`${Astyles.head1}`}>{t('part6')}</h3>
      <p className={`${Astyles.para}`}>{t('part7')}</p>
    </div>
    <div className="col-md-6">
    <h3 className={`${Astyles.head1}`}>{t('part8')}</h3>
      <p className={`${Astyles.para}`}>{t('part9')}</p>
    </div>
    <div className="col-md-6">
    <h3 className={`${Astyles.head1}`}>{t('part10')}</h3>
      <p className={`${Astyles.para}`}>{t('part11')}</p>
    </div>
    <div className="col-md-6">
    <h3 className={`${Astyles.head1}`}>{t('part12')}</h3>
      <p className={`${Astyles.para}`}>{t('part13')}</p>
    </div>
    <div className="col-md-6">
    <h3 className={`${Astyles.head1}`}>{t('part14')}</h3>
      <p className={`${Astyles.para}`}>{t('part15')}</p>
    </div>
  </div>
  
  
  </>;
}
