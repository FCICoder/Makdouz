import Link from 'next/link'
import styles from './ShopNowCard.module.css'
import Image from 'next/image'
export default function ShopNowCard(props) {
  return <>
  <div className={styles.card}>
    <img className='img img-fluid' src={props.src}   alt={props.title} />
    <div>
    {/* <h3 style={{color:props.txtColor,width:props.titleWidth}} >{props.title}</h3> */}
    {/* <Link href='#' style={{color:props.txtColor}}>Shop now</Link> */}
    </div>
  </div>
  </>
}
