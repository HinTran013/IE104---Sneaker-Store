import style from './CmtAndRating.module.css'
import { useState } from 'react';
import CommentItem from './CommentItem';
import Nike1 from '../../assets/images/sneaker-transparent/nike-1.png'
import ReactStars from "react-rating-stars-component";
import { Bar } from 'react-chartjs-2';
import {
     Chart as ChartJS,
     CategoryScale,
     LinearScale,
     BarElement,
     Title,
     Tooltip,
     Legend,
} from 'chart.js';

ChartJS.register(
     CategoryScale,
     LinearScale,
     BarElement,
     // Title,
     Tooltip,
     // Legend
);

const options = {
     indexAxis: 'y',
     responsive: true,
     maintainAspectRatio: false,
     scales: {
          x: {
               grid: {
                    display: false
               }
          },
          y:
          {
               grid: {
                    display: false
               }
          }
     }
};

const labels = ['5', '4', '3', '2', '1'];

const data = {
     labels,
     datasets: [
          {
               label: 'Vote',
               data: [12, 31, 22, 17, 25],
               backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(220, 98, 9, 0.5)',
                    'rgba(125, 120, 132, 0.5)',
                    'rgba(55, 99, 132, 0.5)',
                    'rgba(155, 99, 132, 0.5)'
               ],
          },
     ],
};

function CmtAndRating() {
     const [openModal, setopenModal] = useState(false);
     const [ratingVote, setRatingVote] = useState(0);
     const [ratingText, setRatingText] = useState('');

     const ratingChanged = (newRating) => {
          setRatingVote(newRating);

          switch (newRating) {
               case 1:
                    setRatingText('Awful');
                    break;
               case 2:
                    setRatingText('Bad');
                    break;
               case 3:
                    setRatingText('Normal');
                    break;
               case 4:
                    setRatingText('Good');
                    break;
               case 5:
                    setRatingText('Excellent');
                    break;
               default:
                    setRatingText('');
          }
     };

     const handleOpenModal = () => {
          setopenModal(!openModal);
          setRatingText('');
     };

     return (
     <div className={style.outerContainer}>
          <h2 className={style.titleText}>Comments and Rating</h2>
          <div className={style.mainContainer}>
               <div className={style.ratingSection}>
                    <div className={style.ratingInfo}>
                         <h2 className={style.ratingTotalPoint}>4.4</h2>
                         <p className={style.ratingTotalText}>Total: 120</p>
                    </div>

                    <div className={style.ratingChart}>
                         <Bar options={options} data={data} />
                    </div>
               </div>

               <div className={style.yourCommentSection}>
                    <h3 className={style.yourCommentTitle}>Your Comment</h3>
                    <button className={style.yourCommentButton} onClick={handleOpenModal}>Leave a comment</button>

                    {openModal && 
                         <div className={style.yourCommentModal} onClick={handleOpenModal}>
                              <div className={style.modalContainer} onClick={e => {
                                   e.preventDefault()
                                   e.stopPropagation()
                              }}>
                                   <h2 className={style.modalHeader}>Leave Your Comment Here!</h2>
                                   <div className={style.modalContent}>
                                        <p className={style.modalContentText}>Just public your comment to everyone, let's the others know what do you think about this product. Remember, everyone can see your public information like name, avatar, time you write this comment.</p>

                                        <div className={style.modalMainSection}>
                                             <div className={style.modalThumb}>
                                                  <img className={style.modalThumbImg} src={Nike1} alt="thumb" />
                                                  <h4 className={style.modalThumbName}>Nike Pegasus</h4>
                                             </div>
                                             <textarea className={style.modalContentInput} type="text" placeholder="Write something..." />
                                        </div>

                                        <ReactStars
                                             classNames={style.modalRating}
                                             count={5}
                                             onChange={ratingChanged}
                                             size={24}
                                             activeColor="#ffd700"
                                        />

                                        <p className={style.modalRatingText}>{ratingText}</p>

                                        <div className={style.modalButtonSection}>
                                             <button className={style.modalButtonCancel} onClick={handleOpenModal}>Cancel</button>
                                             <button className={style.modalButtonSubmit}>Submit</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    }
               </div>

               <div className={style.commentSection}>
                    <CommentItem />
               </div>

               <h3 className={style.allCommentTitle}>All Comments</h3>
               <div className={style.commentSection}>  
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
               </div>
          </div>
     </div>
     );
}

export default CmtAndRating;