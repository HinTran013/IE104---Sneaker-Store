import style from './CmtAndRating.module.css'
import CommentItem from './CommentItem';
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

               <h3 className={style.yourCommentTitle}>Your Comment</h3>
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