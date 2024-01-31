import { imageOptimizer } from "next/dist/server/image-optimizer";
import Image from "next/image";
import React from "react";
import olives from '@/public/assets/assorted-olives.jpg'
import { useTranslation } from "@/app/i18n";

export default async function Page({lng}) {
  const { t } = await useTranslation(lng, "about-us");

  return <>
  <div className="d-flex">
    <div>
      <h3>{t('part1')}</h3>
      <p>{t('part2')}</p>
      <p>{t('part3')}</p>


    </div>
    <div className="border border-rounded ">
    <Image
      src={olives}
      width={500}
      height={500}
      alt="assorted-olives"
    />
    </div>

  </div>
  
  
  </>;
}
