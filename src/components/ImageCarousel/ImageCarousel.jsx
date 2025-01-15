import React, { useEffect, useState, useCallback } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
const ImageCarousel = ({ url, limit, page }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [errMessage, setErrMessage] = useState("");

  const fetchImages = useCallback(
    async (getUrl) => {
      try {
        setLoading(true);
        const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
        const data = await response.json();

        if (data) {
          setLoading(false);
          setImages(data);
        }
      } catch (e) {
        setErrMessage(e.message);
      }
    },
    [limit, page]
  );

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [fetchImages, url]);

  const handlePrevious = () => {
    setCurrentSlide(
      currentSlide === 0 ? currentSlide === images.length - 1 : currentSlide - 1
    );
  };

  if (loading) {
    return <div> The context is loading</div>;
  }
  if (errMessage) {
    return <div>Error Message {errMessage}</div>;
  }

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  return (
    <div className="container">
      <BsArrowLeftCircleFill className = 'arrow arrow-left' onClick={handlePrevious} />
      {/* images here */}
      {images && images.length > 0
        ? images.map((imageItem , index) => (
            <img
              src={imageItem.download_url}
              alt={imageItem.download_url}
              key={imageItem.id}
              className={currentSlide === index ? 'current-image' : 'hide-current-image'}
            />
          ))
        : null}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext} />
      <span className="circle-indicators">
      {images && images.length > 0
        ? images.map((item, index) => (
            <div
              className={
                currentSlide === index
                  ? " current-indicator "
                  : "current-indicator inactive-indicator"
              }
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))
        : null}
      </span>
      
    </div>
  );
};

export default ImageCarousel;
