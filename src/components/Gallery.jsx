import React from "react";

const media = [
  {
    type: "image",
    src: "https://cdn.pixabay.com/photo/2017/08/15/16/04/indian-flag-2644512_1280.jpg",
    alt: "Army Training",
  },
  {
    type: "image",
    src: "https://cdn.pixabay.com/photo/2022/08/23/16/03/parade-7406030_1280.jpg",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1586083944757-6fa33fdfd9c0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Army Drill",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1585802540432-60662b65ca62?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "image",
    src: "https://cdn.pixabay.com/photo/2020/01/15/19/44/soldier-4768757_1280.jpg",
    alt: "Marching Troops",
  },

  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1661964069634-2f493e28a14c?q=80&w=3273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Marching Troops",
  },
];

const Gallery = () => {
  return (
    <section className="bg-[#2B2E31] py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-10">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {media.map((item, idx) =>
          item.type === "image" ? (
            <div
              key={idx}
              className="overflow-hidden border border-[#333] "
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-60 object-cover"
              />
            </div>
          ) : (
            <div
              key={idx}
              className="overflow-hidden rounded-lg border border-[#333] aspect-video"
            >
              <iframe
                className="w-full h-full"
                src={item.src}
                title={`Video ${idx}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Gallery;
