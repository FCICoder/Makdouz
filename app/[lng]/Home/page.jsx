import React from "react";
import styles from "./home.module.css";
import { useTranslation } from "../../i18n";

import Carusel from "./carusel";
import Image from "next/image";
import img from "../../../public/home1.svg";
import Swiper2 from "./Swiper2";
import img5 from "../../../public/home5.webp";

export default async function Content({ lng }) {
  return (
    <>
      <Carusel />

      <section>
        <div className="row gx-4 container m-auto">
          <div className="col-md-6" id="partOne-left">
            {lng == "en" ? (
              <strong>Why Choose Makdouz Pickles?</strong>
            ) : (
              <strong>لماذا تختار مخللات مكدوز؟</strong>
            )}
            <div style={{ marginTop: "4%" }}>
              <ul>
                <li>
                  {lng == "en"
                    ? "Premium Quality Ingredients: At Makdouz, we believe in using only the finest ingredients. Our olives, including Manzanilla, Kalamata, and Azzizi varieties, are carefully selected from reputable growers to ensure exceptional flavor and texture. Additionally, our cucumbers, peppers, carrots, and turnips are sourced locally, guaranteeing freshness and optimal taste."
                    : "مكونات عالية الجودة: في مكدوز، نحن نؤمن باستخدام أجود المكونات فقط. يتم اختيار زيتوننا، بما في ذلك أصناف مانزانيلا، وكالاماتا، وعزيزي، بعناية من مزارعين ذوي سمعة طيبة لضمان نكهة وملمس استثنائيين. بالإضافة إلى ذلك، يتم الحصول على الخيار والفلفل والجزر واللفت محليًا، مما يضمن النضارة والذوق الأمثل."}
                </li>
                <li>
                  {lng == "en"
                    ? "ISO 22000 Certified: We take food safety seriously. Makdouz is proud to be ISO 22000 certified, meeting international food safety standards. From production to packaging, we adhere to stringent quality control measures to provide you with pickles that are safe, hygienic, and meet the highest industry standards."
                    : "شهادة ISO 22000: نحن نأخذ سلامة الأغذية على محمل الجد. مكدوز فخورة بحصولها على شهادة ISO 22000، التي تلبي المعايير الدولية لسلامة الأغذية. من الإنتاج إلى التعبئة والتغليف، نحن نلتزم بإجراءات مراقبة الجودة الصارمة لتزويدك بمخللات آمنة وصحية وتلبي أعلى معايير الصناعة."}
                </li>
                <li>
                  {lng == "en"
                    ? "Customized Solutions for Export: As a dedicated pickle manufacturer for export, we understand the importance of meeting the unique specifications and preferences of different countries and regions. Whether you require specific flavors, packaging sizes, or labeling requirements, our team is experienced in tailoring solutions to meet your export needs."
                    : "حلول مخصصة للتصدير: باعتبارنا شركة تصنيع مخللات مخصصة للتصدير، فإننا ندرك أهمية تلبية المواصفات والتفضيلات الفريدة لمختلف البلدان والمناطق. سواء كنت تحتاج إلى نكهات معينة، أو أحجام تعبئة، أو متطلبات وضع العلامات، فإن فريقنا يتمتع بالخبرة في تصميم الحلول لتلبية احتياجات التصدير الخاصة بك."}
                </li>
                <li>
                  {lng == "en"
                    ? "Samples Available: We believe in the quality of our products and are pleased to offer samples for your evaluation. Contact us today to request samples and experience the exceptional taste and quality of Makdouz pickles and preserves."
                    : "العينات المتاحة: نحن نؤمن بجودة منتجاتنا ويسعدنا تقديم عينات لتقييمك. اتصل بنا اليوم لطلب عينات وتجربة المذاق الاستثنائي وجودة مخللات مكدوس والمعلبات."}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6" id="partOne-right">
            <div className="bg-danger">
              <Image
                src={img}
                width={100}
                height={1000}
                className=" h-100 w-100 "
                alt="pickles olives"
                priority="true"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="row gx-4 container  m-auto">
          <div className=" col-md-6" id="partTwo-left">
            <Swiper2 />
          </div>
          <div className="col-md-6" id="partTwo-right">
            <div className="row w-100 ">
              <div className="col-sm-3">
                <Image
                  src={img5}
                  alt="Iso certification Logo"
                  width={100}
                  height={100}
                />
              </div>
              <div id="connnntent" className="col-sm-9" >
                {
                  (lng== 'en')?
                  <h3>ISO 22000 Certified</h3>:
                  <h3>شهادة ISO 22000</h3>
                }
                {
                  (lng== 'en')?
                  <p>
                    We take food safety seriously. Makdouz is proud to be ISO
                    22000 certified, meeting international food safety standards.
                    From production to packaging, we adhere to stringent quality
                    control measures to provide you with pickles that are safe,
                    hygienic, and meet the highest industry standards.
                  </p>:
                  <p>
                    حن نأخذ سلامة الأغذية على محمل الجد. مكدوز فخور بالحصول على ISO
                     22000 معتمد، يلبي المعايير الدولية لسلامة الأغذية.
                     من الإنتاج إلى التعبئة والتغليف، نحن نلتزم بالجودة الصارمة
                     تدابير رقابية لتزويدك بالمخللات الآمنة،
                     صحية، وتلبية أعلى معايير الصناعة.
                  </p>
                }
                
              </div>
            </div>
            <div className="mt-3">
              {
                (lng == 'en')?
              <h2 className="p-1">Nurtured by nature, our farms yield pristine harvests!</h2>
                :
                <h2>مزارعنا التي تغذيها الطبيعة تنتج محاصيل نقية!</h2>
              }
              <div  >
                <div className="d-flex justify-content-around">
                  <div>
                    <ul className="list-unstyled">
                      <li>
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          ></i>
                        </span>
                        {
                          (lng == 'en')?
                        <span>Organic</span>
                        :
                        <span>عضوي</span>
                        }
                      </li>
                      <li>
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          ></i>
                        </span>
                        {
                          (lng == 'en')?
                          <span>Sustainable</span>
                          :
                          <span>مستمر</span>
                        }
                      </li>
                      <li>
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          ></i>
                        </span>
                        {
                          (lng == 'en')?
                          <span>Nutrient-rich</span>
                          :
                          <span>غنية بالمغذيات</span>
                        }
                      </li>
                      <li>
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          ></i>
                        </span>
                        {
                          (lng == 'en')?
                          <span>Pesticide-free</span>

                          :
                          <span>خالية من المبيدات الحشرية</span>
                        }
                      </li>
                      <li>
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          ></i>
                        </span>
                        {
                          (lng == 'en')?
                          <span>Traceable</span>
                          :
                          <span>تعقبها</span>
                        }
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-unstyled">
                      <li>
                        <span>
                          <i aria-hidden="true" className="far fa-check-circle"></i>
                        </span>
                        {
                          (lng == 'en')?
                          <span>Certified</span>
                          :
                          <span>معتمد</span>
                        }
                      </li>
                      <li>
                        <span>
                          <i aria-hidden="true" className="far fa-check-circle"></i>
                        </span>
                        {
                          (lng == 'en')?
                          <span>Eco-friendly</span>
                          :
                          <span>صديقة للبيئة</span>
                        }
                      </li>
                      <li>
                        <span>
                          <i aria-hidden="true" className="far fa-check-circle"></i>
                        </span>
                        {
                          (lng == 'en')?
                          <span>Food-safe</span>
                          :
                          <span>اكل امن</span>
                        }
                      </li>
                      <li>
                        <span>
                          <i aria-hidden="true" className="far fa-check-circle"></i>
                        </span>
                        {
                          (lng == 'en')?
                        <span>Biodiverse</span>
                          :
                          <span>التنوع البيولوجي</span>
                        }
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
