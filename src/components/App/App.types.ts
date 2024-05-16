export type Photo = {
  id: string;
  url: string;
  alt_description: string;
  likes: number;
  user: { username: string; profile_image: { medium: string } };
  urls: {
    small: string;
    regular: string;
  };
};
export {};
