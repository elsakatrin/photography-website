import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import styles from './../../styles/Footer/footer.module.css'

/**
 * @typedef {import("@prismicio/client").Content.FooterSliceSlice} FooterSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSliceSlice>} FooterSliceProps
 * @param { FooterSliceProps }
 */
const FooterSlice = ({ slice }) => (
  <section className={styles.contentwrapper}>
    <span className="title">
      <title>Elsa Katrín Ljósmyndari</title>
    </span>

  {/* Text over the footer image - CTA text */}
  <div className={styles.textwrapper}>
    <div className={styles.cta}>
      <PrismicRichText field={slice.primary.title} />
    </div>
    <div className={styles.email}>
      <PrismicRichText field={slice.primary.description} />
    </div>
  </div>
  {/* Overlay color and image */}
  <div className={styles.overlay}> 
    <div className={styles.footerimg}>
    <PrismicNextImage field={slice.primary.footerimage} 
        alt=""
        width={1239} 
        height={622}
        imgixParams={{ 
          q: 100, 
          sharp: 10,
          auto: 'format', 
          fm: 'jpg', 
          cs: 'srgb'
          }}/>
    </div>
  </div>
</section>
)

export default FooterSlice