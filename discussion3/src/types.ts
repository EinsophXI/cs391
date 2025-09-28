export type ThumbnailProps = {
  lqip: string;
  width: number;
  height: number;
  alt_text: string;
};

export type ArtworkProps = {
  id: number;
  title: string;
  thumbnail: ThumbnailProps;
  place_of_origin: string;
  medium_display: string;
  is_public_download: boolean;
  is_on_view: boolean;
  image_id: string;
  api_link: string;
}