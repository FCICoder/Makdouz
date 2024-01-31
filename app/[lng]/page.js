import styles from "../page.module.css";
import Content from "./Home/page";

export default function Home({ params: { lng } }) {

  return (
    <>
      <Content lng={lng} />
    </>
  );
}
