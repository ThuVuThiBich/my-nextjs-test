import { FC } from 'react';
import { IReview } from 'types/product';
import styles from './Review.module.css';

interface ReviewProps {
  review: IReview;
}

const Review: FC<ReviewProps> = ({ review }) => {
  return (
    <div className={styles.card}>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-gray-300 w-10 h-10"></div>{' '}
            <span>{review.Author}</span>
          </div>
          <span className="text-yellow-500">{review.Rating}/5 stars</span>
        </div>
        <h3 className="font-semibold text-xl">{review.Title}</h3>
        <div>{review.Description}</div>
        <div className="italic text-end">{new Date(review.Date).toLocaleDateString()}</div>
      </div>
    </div>
  );
};

export default Review;
