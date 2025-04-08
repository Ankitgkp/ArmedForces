import React from "react";

const media = [
    {
        type: "image",
        src: "https://images.pexels.com/photos/29850312/pexels-photo-29850312/free-photo-of-indian-naval-officers-marching-in-formation.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Army Training",
    },
    {
        type: "image",
        src: "https://images.pexels.com/photos/11472026/pexels-photo-11472026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        type: "image",
        src: "https://images.unsplash.com/photo-1586083944757-6fa33fdfd9c0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Army Drill",
    },
    {
        type: "image",
        src: "https://images.pexels.com/photos/12243700/pexels-photo-12243700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        type: "image",
        src: "https://images.pexels.com/photos/30386546/pexels-photo-30386546/free-photo-of-military-personnel-in-uniforms-marching-in-formation.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Marching Troops",
    },

    {
        type: "image",
        src: "https://images.unsplash.com/photo-1508530786855-dfea35260b8d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbmF2eXxlbnwwfHwwfHx8MA%3D%3D",
        alt: "Marching Troops",
    },
];

const NavyGallery = () => {
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

export default NavyGallery;
