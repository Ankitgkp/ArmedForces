function NavyVideoSection() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#D7D2CB] font-bold font-univers mb-6 text-center">
                Witness the <span className='text-[#9D2444]'>Power</span> in Action
            </h2>

            <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
                <iframe
                    width="100%"
                    height="480"
                    src="https://imagekit.io/player/embed/c9dhdggke/Hero_Animation_With_Audio.mp4?updatedAt=1749556676341&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fc9dhdggke%2FHero_Animation_With_Audio.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1749556676341&updatedAt=1749556676341"
                    title="ImageKit video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowFullScreen
                    className="w-full rounded-lg"
                ></iframe>
            </div>

        </div>
    );
}

export default NavyVideoSection;
