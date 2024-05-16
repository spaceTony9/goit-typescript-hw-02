import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { Props } from './ImageModal.types';
import React from 'react';

function ImageModal({
  isOpen,
  closeModal,
  modalContent,
}: Props): React.ReactElement {
  return (
    <div>
      <Modal
        overlayClassName={css.customOverlay}
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            padding: '0',
          },
        }}
      >
        {modalContent && (
          <div>
            <img
              className={css.modalImg}
              src={modalContent.urls.regular}
              alt={modalContent.alt_description}
            />
            <div className={css.modalContentWrapper}>
              <img
                className={css.userPhoto}
                src={modalContent.user.profile_image.medium}
                alt={modalContent.user.username}
              />
              <p>Posted by: {modalContent.user.username}</p>
              <p>likes:{modalContent.likes}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default ImageModal;
