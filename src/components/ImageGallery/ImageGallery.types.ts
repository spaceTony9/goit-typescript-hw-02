export type Props = {
  photos: Photo[];
  openModal: () => void;
  modalContent: (id: string) => void;
};

export type Photo = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
  };
};
export {};
