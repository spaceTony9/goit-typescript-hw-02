import css from './LoadMoreBtn.module.css';
import { Props } from './LoadMoreBtn.types';

function LoadMoreBtn({ handleLoadMoreBtnClick }: Props): JSX.Element {
  return (
    <div className={css.seeMoreBtnWrapper}>
      <button
        className={css.seeMoreBtn}
        type="button"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          handleLoadMoreBtnClick(e)
        }
      >
        Load More
      </button>
    </div>
  );
}

export default LoadMoreBtn;
