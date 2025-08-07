import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles/MatchedImageTextRow.css";

export default function MatchedImageTextRow({ imgSrc, alt, title, body }) {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const matchHeight = () => {
      if (textRef.current && imgRef.current) {
        const height = textRef.current.offsetHeight;
        imgRef.current.style.height = `${height}px`;
      }
    };

    matchHeight();
    window.addEventListener("resize", matchHeight);
    return () => window.removeEventListener("resize", matchHeight);
  }, []);

  return (
    <div className="matched-row">
      <div className="matched-text" ref={textRef}>
        <h1>{title}</h1>
        <p>{body}</p>
        
      </div>
      <div className="matched-image">
        <img ref={imgRef} src={imgSrc} alt={alt} />
      </div>
    </div>
  );
}

MatchedImageTextRow.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
};
