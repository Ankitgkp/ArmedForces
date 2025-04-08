function NavyVideoSection() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#D7D2CB] font-bold font-univers mb-6 text-center">
                Witness the <span className='text-[#9D2444]'>Power</span> in Action
            </h2>

            <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
                <video autoPlay controls muted controlsList="nodownload" className="w-full h-auto rounded-lg">
                    <source src="https://media-hosting.imagekit.io/2e0cde2b09a9491d/Hero_Animation_With_Audio.mp4?Expires=1838305376&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=S8GTyoszJC66Za864fcSKJfkDuqRIYzim2YRUZOZ2WooriMzEboZKQyaQOrID0luMEM54WumHQ4zhqssDUXl5zStqaXLe~0VevL8MF47wzqHfsm1UoigUFyfXmqt6mOSoESTJ0svjkF8NIgB6q5dhsSsXMc6gtPFzwhiipyidoHFqlgSOUk6Uh8LV8CRsuj8cw-81FSXDfnx5GcTJa6bCyn3ocdBiUWTUWxJTQndB2Zk~BKcxDyi2vtjYWScGyIXAhRh~1QF5OZixERYfee6axRm5FMwxmJmKf0U6opU2eV2K7Qfg1f78xg2h7ef4HzcpLWQBfBrqTDRnetxVvwmLQ__" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default NavyVideoSection;
