import style from './CommentItem.module.css';
import avatarImg from '../../assets/images/img_avatar.png';

function CommentItem() {
     return (
          <div className={style.mainContainer}>
               <img className={style.avatar} src={avatarImg} alt="avatar" />
               <div className={style.infoContainer}>
                    <h2 className={style.name}>Johnny Luu</h2>

                    <div className={style.ratingAndDate}>
                         <i className="fas fa-star"></i>
                         <i className="fas fa-star"></i>
                         <i className="fas fa-star"></i>
                         <i className="fas fa-star"></i>
                         <i className="far fa-star"></i>
                         <p className={style.date}>20/10/2019</p>
                    </div>

                    <p className={style.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </div>
          </div>
     );
}

export default CommentItem;