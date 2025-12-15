

import Image from "next/image";

interface CategorySvgProps{
    filePath : string
}

const CategorySvg = ({ filePath }:CategorySvgProps) => {
  return (
    <div>
      <Image
        src={filePath}
        alt="photo"
        width={500}
        height={500}
        className="w-full h-full"
      />
    </div>
  );
};

export default CategorySvg;
