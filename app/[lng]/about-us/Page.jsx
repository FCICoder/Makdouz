import { imageOptimizer } from "next/dist/server/image-optimizer";
import Image from "next/image";
import React from "react";
import Astyles from './about.module.css'
import olives from '@/public/assets/assorted-olives.jpg'
import { useTranslation } from "@/app/i18n";

export default async function page({params:{lng}}) {
  const { t } = await useTranslation(lng, "about-us");

  return <>

<div id="container-aboutus">
  <div className="row m-auto my-5">
    <div className="col-md-6 " >
      <h3  className={`${lng === 'en' ? Astyles.head1 : Astyles.head1Ar} `}>{t('part1')}</h3>
      <p className={`${Astyles.para} pt-3`}>{t('part1.1')}</p>
      <p className={`${Astyles.para}`}>{t('part2')}</p>
      <p className={`${Astyles.para}`}>{t('part3')}</p>
    </div>
    <div className=" col-md-6 p-1 text-center">
    <Image
      src={olives}
      width={500}
      height={400}
      alt="assorted-olives"
      className="img-fluid rounded center"
    />
    </div>

  </div>
  <div className="row my-5 mx-0 p-0">
    <div className="col-md-6 my-2">
      <h3  className={`${lng === 'en' ? Astyles.head1 : Astyles.head1Ar}`}>{t('part4')}</h3>
      <p className={`${Astyles.para} pt-3`}>{t('part5')}</p>


    </div>
    <div className="col-md-6 mb-2">
    <h3  className={`${lng === 'en' ? Astyles.head1 :Astyles.head1Ar}`}>{t('part6')}</h3>
      <p className={`${Astyles.para} pt-3`}>{t('part7')}</p>
    </div>
    <div className="col-md-6 mb-2">
    <h3  className={`${lng === 'en' ? Astyles.head1 : Astyles.head1Ar}`}>{t('part8')}</h3>
      <p className={`${Astyles.para} pt-3`}>{t('part9')}</p>
    </div>
    <div className="col-md-6 mb-5">
    <h3  className={`${lng === 'en' ? Astyles.head1 : Astyles.head1Ar}`}>{t('part10')}</h3>
      <p className={`${Astyles.para} pt-3`}>{t('part11')}</p>
    </div>
    <div className="col-md-6 mb-5">
    <h3 className={`${lng === 'en' ? Astyles.head1 : Astyles.head1Ar}`}>{t('part12')}</h3>
      <p className={`${Astyles.para} pt-3`}>{t('part13')}</p>
    </div>
    <div className="col-md-6 mb-5">
    <h3 className={`${lng === 'en' ? Astyles.head1 : Astyles.head1Ar}`}>{t('part14')}</h3>
      <p className={`${Astyles.para} pt-3`}>{t('part15')}</p>
    </div>
  </div>
  </div>
  
  </>;
}
