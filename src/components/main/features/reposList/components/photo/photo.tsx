import "./photo.css";
import { photos } from "../../utils/content.json";
import LinkedCamera from "@mui/icons-material/LinkedCamera";
import { grabDimension } from "./utils/grabDimension";
import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

export function PhotoComponent({
  photo,
  i,
}: {
  photo: (typeof photos)[0];
  i: number;
}) {
  // const [imageLoaded, setImageLoaded] = useState(false);
  // const { width, height } = grabDimension(photo.src.large);

  // useEffect(() => {
  //   const img = new Image();
  //   img.addEventListener("load", (e: Event) => setImageLoaded(true));
  //   img.src = photo.src.large;
  // }, [imageLoaded]);

  return (
    <>
      {/* {!imageLoaded && (
        <Blurhash
          hash={photo.blurhash}
          height={height}
          width={width}
        />
      )} */}
      {/* {imageLoaded && ( */}
        <li className="photo-card" key={i}>
          <img
            className="photo-card-img"
            alt={photo.alt}
            src={photo.src.large}
          />
          <div
            className="photo-card-overlay"
            style={{ backgroundColor: photo.avg_color }}
          >
            <span className="photo-by">
              {photo.photographer}
            </span>

            <a
              target="_blank"
              className="photographer-page-link"
              href={photo.photographer_url}
            >
              <LinkedCamera className="link-camera" />
              <span className="photographer-span">Pagina do fotógrafo</span>
            </a>
          </div>
        </li>
      {/* )} */}
    </>
  );
}
