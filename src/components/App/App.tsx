import {
  SearchBar,
  ImageGallery,
  ErrorMessage,
  ImageModal,
  LoadMoreBtn,
  Loader,
} from '../index.js';
import { useEffect, useState } from 'react';
import fetchPhotosWithKeyWord from '../../apiService.js';
import '../../App.css';
import { Photo } from './App.types';

export default function App() {
  const [query, setQuery] = useState<string>('');
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalFilter, setModalFilter] = useState<string | null>(null);
  const [contentForModal] = photos.filter(
    (photo: Photo) => photo.id === modalFilter
  );

  useEffect(() => {
    async function fetchPhotos() {
      if (query === '') {
        return;
      }
      try {
        setError(false);
        setLoading(true);
        const apiRequest = await fetchPhotosWithKeyWord(query, page);
        setPhotos(prevState => [...prevState, ...apiRequest]);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();
  }, [query, page]);

  function onFormSubmit(searchedWord: string) {
    if (query.toLowerCase() !== searchedWord.toLowerCase()) {
      setPhotos([]);
      setQuery(searchedWord);
    }
    setPage(1);
  }

  function handleLoadMoreBtnClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    setPage(prevState => prevState + 1);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function createModalContent(id: string) {
    setModalFilter(id);
  }

  return (
    <>
      <SearchBar onSubmit={onFormSubmit} />
      <main>
        <ImageGallery
          modalContent={createModalContent}
          openModal={openModal}
          photos={photos}
        />
        {error && <ErrorMessage />}
        {loading && <Loader />}
        {photos.length > 0 && !loading && (
          <LoadMoreBtn handleLoadMoreBtnClick={handleLoadMoreBtnClick} />
        )}
        <ImageModal
          modalContent={contentForModal}
          isOpen={modalIsOpen}
          closeModal={closeModal}
        />
      </main>
    </>
  );
}
