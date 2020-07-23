import React, { useContext } from "react";
import { Context } from "../context";
import Image from "../components/image";
import { getClass } from "../utils/index";

function Photo(props) {
  const { allPhotos } = useContext(Context);

  const imageElements = allPhotos.map((img, i) => {
    return <Image key={img.id} img={img} className={getClass(i)} />;
  });
  return <main className="photos">{imageElements}</main>;
}

export default Photo;
