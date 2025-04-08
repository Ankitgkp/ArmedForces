import React from "react";

const media = [
    {
        type: "image",
        src: "https://media-hosting.imagekit.io/04aabe9990c945c9/vecteezy_a-fighter-jet-is-taking-off-from-an-airport_55973827.jpeg?Expires=1838743512&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=J~2vIEcg7K9buOrkDIQVDQDuQvQwvFOq-cpicxXNVtMM2Nj4NojEMWXNPQbap4eBm4CxwhzhdZ3LqWaHh18Ykwd~YEthWhlq~924fPyucIrt9liGJifwjyCe9jXw2CDgW~bEH2W-BqUbs1TlZ1uMldd6yvkjw~GT~gCNNqNHH6Sd46oebhufV0a2DVmpjLz8wK0U~PH9-WkJyQiUaBNxyOZIJ~UKXmFkyWBL2qej9mjN04MBylEZdjFYAh2uYRfR3yKwVf0bUyQGbz-K0~O6gdXqzQLyqIUuLN8a4bqmHl6c5AD1VYBQzG7SWao614o04jayOwtBieF0UPHW5Tzi4A__",
        alt: "Army Training",
    },
    {
        type: "image",
        src: "https://media-hosting.imagekit.io/9f2b874f993a419c/StillFrame02-PaulALLEZARD.webp?Expires=1838743272&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xSf3QEHDbsYSk2~qENoaQBCJFa4kozef8N~9tbUGARESm2Nszl~w9aZpJNMENX4HvKuIV~Ze4ahFlBm~u9SqOUIQwtKzwCNd~UDrNxl58eHoFJF7V4EKGQY3Um54QlF2AD0iy62OobRy-pnfLdQIhtlxbA~yIuDfMjJrsiq6yq3Up0yfj8O-DhV3n7QnMw0kCAm4xE7P7iYAWBw9DL-U-k0afBCWVXWEk-NKjdcnhFAtpDlLYQwvCGUT3ZQgdUuNfo6EvLvU3LgfEtq4R66mJgMEBn3~EPg5vjdFp7BfXlOn9lZOWzA0xiAdYuQIMYpU05qNN1rYdj6VwzlVnROeTg__",
    },
    {
        type: "image",
        src: "https://media-hosting.imagekit.io/64c89d8bd999459a/pexels-aseem-borkar-2150493622-31351481.jpg?Expires=1838736290&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gu6YIjH8Nq2vjbDBZf4eLTHLX0Ax8CuZMbCyjdO6AM6369fnayY6tkNz18bbbtxOzluqPMGLA2Zt4iFzYBrBCE46jhxB9RueIoY48nKEO029dRO0Rxk7qhjTplXSkAgpHmjolb7nFYpqv~eswPPZYNJVI3RF34TZpfy5241s0x52j~QPdLLGLf112wkiT0n6ogKihcsy53x9-Zi0Pus3ElNdtpfa-IGf2Mi~HYVjETilzkzagd6Y9WexNACH7QdB1M7ECHF2xuzF2hk8HuN6LPTcfrfz0vY-a3ARa1v5jZEHtew0VjAjxCzVaX0e3RQCaal79srb2SFRiJaIl09WYQ__",
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
