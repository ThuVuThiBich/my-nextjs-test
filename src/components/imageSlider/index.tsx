import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { IPicture } from 'types/product';
import styles from './ImageSlider.module.css';

interface ImageSliderProps {
  pictures: IPicture[];
}

const ImageSlider: FC<ImageSliderProps> = ({ pictures }) => {
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState<IPicture>(pictures[0]);
  return (
    <div className="flex items-center" onClick={() => {}}>
      <div className="p-4 w-4/5">
        <img src={currentImage?.url} alt={''} />
      </div>
      <div className="flex flex-col w-1/5 justify-center">
        {pictures.map((picture) => (
          <div key={picture.id} className="p-4">
            <img
              src={currentImage?.url}
              alt={''}
              className="h-full w-full object-scale-down"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
