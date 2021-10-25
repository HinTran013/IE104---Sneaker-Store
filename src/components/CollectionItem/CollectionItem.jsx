import style from './CollectionItem.module.css'

function CollectionItem({
     subTxtSneaker,
     mainTxtSneaker,
     sneakerImg,
     subTxtBanner,
     mainTxtBannerAbove,
     mainTxtBannerUnder,
     bannerImg,
     reverse=false
}) {
     return (
          <div className={reverse ? `${style.collectionContainer} ${style.reverseLayout}` : style.collectionContainer}>
               <div className={style.itemSneaker}>
                    <a className={style.itemLink} href='#'>
                         <img className={style.itemImgSneaker} src={sneakerImg} alt='sneaker' />
                         <div className={style.sneakerText}>
                              <h5>{subTxtSneaker}</h5>
                              <h2>{mainTxtSneaker}</h2>
                         </div>
                    </a>
               </div>

               <div className={style.itemBanner}>
                    <a className={style.itemLink} href='#'>
                         <img className={style.itemImgBanner} src={bannerImg} alt='banner' />
                    </a>

                    <div className={reverse ? `${style.bannerText} ${style.bannerTextRight}` : style.bannerText}>
                         <h2>
                              {mainTxtBannerAbove}
                              <br />
                              {mainTxtBannerUnder}
                         </h2>
                         <h5>{subTxtBanner}</h5>
                         <a className={style.bannerBtn} href='#'>More Info</a>
                    </div>
               </div>
          </div>
     )
}

export default CollectionItem