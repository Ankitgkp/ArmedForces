import React from "react";

const media = [
    {
        type: "image",
        src: "https://static.theprint.in/wp-content/uploads/2018/08/Exercise-Pitch-Black-2018-Concludes.jpg",
        alt: "Army Training",
    },
    {
        type: "image",
        src: "https://tidesacademy.com/2024/wp-content/uploads/2023/06/indian-air-force.jpg",
    },
    {
        type: "image",
        src: "https://ssbcrackexams.com/wp-content/uploads/2024/11/Indian-Air-Force_th.jpg",
        alt: "Army Drill",
    },
    {
        type: "image",
        src: "https://images.pexels.com/photos/55819/aircraft-cargo-aircraft-cargo-transport-55819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        type: "image",
        src: "https://images.news18.com/ibnlive/uploads/2018/10/Indian-Air-Force-Day-2018-Celebrations-825x510.jpg",
        alt: "Marching Troops",
    },

    {
        type: "image",
        src: "https://i.pinimg.com/736x/ce/bb/97/cebb97c8279600b96167b6b91aba10d5.jpg",
        alt: "Marching Troops",
    },
];

const AirforceGallery = () => {
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

export default AirforceGallery;
