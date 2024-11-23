"use client";
import React, { useEffect, useState } from "react";

interface ImageData {
  [key: string]: string | undefined;
}

interface FolderData {
  desktop?: ImageData;
  mobile?: ImageData;
  tablet?: ImageData;
  common?: ImageData;
  [key: string]: string | ImageData | undefined;
}

interface Data {
  [key: string]: FolderData;
}

import rawData from "../public/data/assets.json";

const data: Data = rawData;

interface Props {
  folder: keyof Data;
  imageKey: string;
}

const ResponsiveImage: React.FC<Props> = ({ folder, imageKey }) => {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  const updateScreenSize = () => {
    const width = window.innerWidth;

    if (width >= 0 && width < 640) {
      setScreenSize("mobile");
    } else if (width >= 640 && width < 1024) {
      setScreenSize("tablet");
    } else {
      setScreenSize("desktop");
    }
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const folderData = data[folder];

  if (!folderData) {
    return <p>No folder found for &quot;{folder}&quot;.</p>;
  }

  const getImageForScreenSize = (): string | undefined => {
    if (screenSize && folderData[screenSize]?.[imageKey]) {
      return folderData[screenSize][imageKey];
    }

    if (folderData.common && folderData.common[imageKey]) {
      return folderData.common[imageKey];
    }

    if (typeof folderData[imageKey] === "string") {
      return folderData[imageKey] as string;
    }

    return undefined;
  };

  const imageSrc = getImageForScreenSize();

  if (!imageSrc) {
    return (
      <p>
        {`No image found for "${folder} > ${imageKey}" at "${screenSize}" size or in fallback options.`}
      </p>
    );
  }

  return <img src={imageSrc} alt={`${folder} ${imageKey}`} />;
};

export default ResponsiveImage;
