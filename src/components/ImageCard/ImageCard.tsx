import css from './ImageCard.module.css';
import { Props } from './ImageCard.types';

function ImageCard({
  desc,
  link,
  openModal,
  photoId,
  modalContent,
}: Props): JSX.Element {
  function handleClick(id: string) {
    modalContent(id);
    openModal();
  }

  return (
    <div>
      <img
        onClick={(): void => handleClick(photoId)}
        className={css.listImage}
        src={link}
        alt={desc}
      />
    </div>
  );
}

export default ImageCard;
