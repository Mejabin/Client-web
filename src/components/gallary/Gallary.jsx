import React from "react";


export const Gallary = () => {
  return (
    <div className="container mx-auto">
      <section>
        <h4 className="text-center border-b-2 mt-5">গ্যালারী</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          <div className="corner-gallery-item">
            <img
              src="https://dicmadrasha.com/uploads/frontend/gallery/gallery-1674452145.jpg"
              alt="image-not-found"
              className="w-full"
            />
          </div>
          <div className="corner-gallery-item">
            <img
              src="https://dicmadrasha.com/uploads/frontend/gallery/gallery-1674452183.jpg"
              alt="image-not-found"
              className="w-full"
            />
          </div>
          <div className="corner-gallery-item">
            <img
              src="https://dicmadrasha.com/uploads/frontend/gallery/gallery-1674452217.jpg"
              alt="image-not-found"
              className="w-full"
            />
          </div>
          <div className="corner-gallery-item">
            <img
              src="https://dicmadrasha.com/uploads/frontend/gallery/gallery-1674452267.jpg"
              alt="image-not-found"
              className="w-full"
            />
          </div>
          <div className="corner-gallery-item">
            <img
              src="https://dicmadrasha.com/uploads/frontend/gallery/gallery-1674452320.jpg"
              alt="image-not-found"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
