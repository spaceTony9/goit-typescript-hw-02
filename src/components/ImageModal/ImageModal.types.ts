export type Props = {
  isOpen: boolean;
  closeModal: () => void;
  modalContent: Photo | undefined;
};

export type Photo = {
  id: string;
  alt_description: string;
  likes: number;
  user: {
    username: string;
    profile_image: {
      medium: string;
    };
  };
  urls: {
    regular: string;
  };
};

export {};
