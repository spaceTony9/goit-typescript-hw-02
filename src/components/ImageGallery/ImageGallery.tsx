import { ImageCard } from '../index.js';
import css from './ImageGallery.module.css';
import { Props, Photo } from './ImageGallery.types';
import React from 'react';

function ImageGallery({
  photos,
  openModal,
  modalContent,
}: Props): React.ReactElement {
  return (
    <ul className={css.galleryList}>
      {photos.map((photo: Photo) => (
        <li className={css.galleryListItem} key={photo.id}>
          <ImageCard
            openModal={openModal}
            photoId={photo.id}
            modalContent={modalContent}
            desc={photo.alt_description}
            link={photo.urls.small}
          />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
