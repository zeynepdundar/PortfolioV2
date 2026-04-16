import Image from "next/image";

export type PhotoItem = {
  src: string;
  alt: string;
  rotate?: string;
  y?: string;
};

type PhotoGalleryProps = {
  photos: PhotoItem[];
  className?: string;
};

export default function PhotoGallery({
  photos,
  className = "",
}: PhotoGalleryProps) {
  return (
    <ul
      className={`flex items-end gap-2 sm:gap-3 overflow-visible py-4 px-1 list-none ${className}`}
    >
      {photos.map((photo, index) => (
        <li
          key={index}
          className="group relative flex-1 min-w-0 max-w-[140px]
            overflow-hidden rounded-lg border border-border/20
            shadow-[0_6px_18px_-6px_rgba(0,0,0,0.2)]
            transition-all duration-300 ease-out
            hover:-translate-y-2 hover:scale-[1.04] hover:z-10"
          style={{
            transform: `rotate(${photo.rotate || "0deg"}) translateY(${
              photo.y || "0px"
            })`,
          }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={240}
            height={320}
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105 opacity-90"
          />
        </li>
      ))}
    </ul>
  );
}