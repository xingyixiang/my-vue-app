import { ImgStore } from './Engine';

type ImgStoreKey = keyof ImgStore;

export type ImageElementStore = Record<ImgStoreKey, HTMLImageElement>;

function loadImage(
  imgStore: ImgStore
): Promise<[ImgStoreKey, HTMLImageElement]> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const key = Object.keys(imgStore)[0];
    img.src = imgStore[key];
    img.onload = () => {
      resolve([key, img]);
    };
    img.onerror = error => {
      reject(error);
    };
  });
}

export default async function loadImages(
  imageStore: ImgStore
): Promise<Record<ImgStoreKey, HTMLImageElement>> {
  const imagesAjax = Object.entries(imageStore).map(([key, value]) => {
    return loadImage({ [key]: value });
  });
  const images = await Promise.all(imagesAjax);
  return Object.fromEntries(images);
}
