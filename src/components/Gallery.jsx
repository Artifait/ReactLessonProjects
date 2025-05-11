import { useState } from "react";
import GalleryImage from "./GalleryImage";
import initialImages from "../data/images";

export default function Gallery() {
  const [images, setImages] = useState(
    initialImages.map((img) => ({ ...img, count: 0 }))
  );

  const updateRating = (index, newCount) => {
    const updated = [...images];
    updated[index].count = newCount;
    updated.sort((a, b) => b.count - a.count);
    setImages(updated);
  };

  return (
    <div className="gallery">
      {images.map((img, idx) => (
        <GalleryImage
          key={img.title}
          path={img.path}
          title={img.title}
          count={img.count}
          setCount={(newCount) => updateRating(idx, newCount)}
        />
      ))}
    </div>
  );
}
