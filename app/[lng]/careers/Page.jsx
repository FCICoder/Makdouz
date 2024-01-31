import { useTranslation } from "@/app/i18n";
import React from "react";
import Cstyles from "./career.module.css";

export default async function Page({ lng }) {
  const { t } = await useTranslation(lng, "careers");

  return (
    <>
      <div></div>
      <div
        className={`${Cstyles.custom}`}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className={`${Cstyles.container}`}>
          <h1 className={``}>{t("part1")}</h1>
        </div>
        <div className={`${Cstyles.container}`}>
          <h1 className={`${Cstyles.head1}`}>{t("part2")}</h1>
          <p className={`${Cstyles.para}`}>{t("part2.1")}</p>
        </div>
        <div className={`${Cstyles.container}`}>
          <h1 className={`${Cstyles.head1}`}>{t("part3")}</h1>
          <p className={`${Cstyles.para}`}>{t("part3.1")}</p>
        </div>
        <div className={`${Cstyles.container}`}>
          <h1 className={`${Cstyles.head1}`}>{t("part4")}</h1>
          <p className={`${Cstyles.para}`}>{t("part4.1")}</p>
        </div>
        <div className={`${Cstyles.container}`}>
          <h1 className={`${Cstyles.head1}`}>{t("part5")}</h1>
          <p className={`${Cstyles.para}`}>{t("part5.1")}</p>
        </div>
      </div>
      <div className="d-block p-1 mx-2">
        <hr></hr>
        <p className={`${Cstyles.para}`}>{t("part6")}</p>
        <p className={`${Cstyles.para}`}>{t("part7")}</p>

      </div>
    </>
  );
}
