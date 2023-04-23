import React from 'react'
import { PrismicRichText } from '@prismicio/react' 
import { PrismicNextImage } from '@prismicio/next'
import styles from './../../styles/Openingimg/openingimg.module.css'
import Imgix from 'react-imgix'
/**
 * @typedef {import("@prismicio/client").Content.OpeningImgSlice} OpeningImgSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OpeningImgSlice>} OpeningImgProps
 * @param { OpeningImgProps }
 */
const OpeningImg = ({ slice }) => (
  <section className={styles.contentwrapper}>
    <span className="title">
        <title>Elsa Katrín Ljósmyndari</title>
    </span>
    <div>
      <Imgix 
      src={slice.primary.openingimg.url} 
      srcset={slice.primary.openingimg.url} 
        className={styles.bannerimg}
        alt={slice.primary.openingimg.alt}
          sizes="  (max-width: 64em) 90vw, 1300px"
          priority={true} //The image was concidered "Largest Contentful Paint" which means that it's big and takes longer to load. Because it's the first image it was recommended to have as a priority
          imgixParams={{ 
            q: 100, 
            usm: 10, 
            auto: 'format',
            fm: 'jpg', 
            cs: 'srgb', 
            ar: '16:7',
            // ar: '2:1',
            fit: 'crop',
          }}/>
      {/* <Imgix 
      src={slice.primary.openingimg.url} 
      srcset={slice.primary.openingimg.url} 
        className={styles.bannerimg}
        alt={slice.primary.openingimg.alt}
          sizes="  (max-width: 64em) 90vw, 1300px"
          priority={true} //The image was concidered "Largest Contentful Paint" which means that it's big and takes longer to load. Because it's the first image it was recommended to have as a priority
          imgixParams={{ 
            q: 100, 
            usm: 10, 
            auto: 'format',
            fm: 'jpg', 
            cs: 'srgb', 
            ar: '16:7',
            // ar: '2:1',
            fit: 'crop',
          }}/> */}













      {/* <PrismicNextImage field={slice.primary.openingimg} 
        className={styles.bannerimg}
        alt=""
        width={1239} 
        height={622}
        priority={true} //The image was concidered "Largest Contentful Paint" which means that it's big and takes longer to load. Because it's the first image it was recommended to have as a priority
          imgixParams={{ 
            q: 80, //quality is automatically is set to 45 with prismic. I tried to use 100 in all fields but this one is big so I tried to lower the q a little for better performance 
            sharp: 10, //Give the image a bit sharpness after they lost some in the compression 
            auto: 'format', //imgix deternmines if the image can be served by a better format, the process is called automatic content negotiation. Logic will attempt to serve images in AVIF format when supported, if not then WebP, if that's not supported then jpg
            fm: 'jpg', //When AVIF and WebP is not supported our fallback is jpg
            cs: 'srgb' // When the image is compressed the colorspace is removed. I added sRGB in here.
          }}/> */}
    </div>
  </section>
)

export default OpeningImg

// sizes='(min-width: 63.75em ) 70em, (min-width: 48em ) 53em, (min-width: 29em ) 38em,  (min-width: 23em ) 20em,' 
//breakpoints