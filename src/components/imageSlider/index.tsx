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
    <div onClick={() => {}}>
      <div>
        <img src={currentImage?.url} alt={''} />
      </div>
      <div className="flex flex-nowrap">
        {pictures.map((picture) => (
          <div key={picture.id}>
            <img src={currentImage?.url} alt={''} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
