import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const legends = [
  {
    name: "Captain Vikram Batra",
    birth: "1974",
    death: "1999",
    title: "Param Vir Chakra - Kargil War Hero",
    img: "https://media-hosting.imagekit.io/c7865995dacc4a23/01_Vikram_Batra.jpg?Expires=1838304603&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xUfgJrAVwB3nRrpqUuT0h3kFfywWCA0blPbyXAw1k8k5J5zRccCuiE7oJ~WVMu-v0K3I~O8DuYEEp4UjpPixD3y3~9s39vKITmraCcT0vh-SDuC-Xd72q5N932W~iaNRKAZ7LLUF4fcfElT6Z00hGthqOKNCZb-4IMZaH0NRZ7Ti~cZKQ4rXURWHhQpT8360A0x8Y4N-O3QwnZks7NyE-jQlqdnGbBue5GEgeYz3E6t-D2ypxQmPZXmrgsnnc0GxLLByMeC6IOxC2RFTz28NmZ8AouFq-O2GDKn01lukBrlaLsmXjCA2qL~jJNcVss9M6zTPaWUZ5ijy9~b-CMScxw__",
    wiki: "https://en.wikipedia.org/wiki/Vikram_Batra",
  },
  {
    name: "Major General Ian Cardozo",
    birth: "1937",
    death: "Present",
    title: "The Legendary War Veteran",
    img: "https://media-hosting.imagekit.io/fff6d55a9dda441c/02_Major%20General%20Ian%20Cardozo.jpg?Expires=1838304603&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=R2-WLqlOgnj~TjZPdM0hY7XB5w7S1kBanApYfrsy1xQyOiq-vrUXMCWwTU6U6ogKcgv4OAzN6CoaSjLmrQwdQ5EPQtciRpFV4pjCBNWpnX4YoQut0kVSOP0Z2ecLGLc5gHIIJlFqoGSN~xsH9TJXV3ZttOdZ7iw1aPnMNK2Ti5mO0s3Hn52mupCZS4YTqUKQhBM8b8USVwZAPGP9M7rNLNKDkVn2-eSYA9jf5bz0k8TAAJ6vuMz8kPao1IimEEq7duS50uEgTnMVHKHajLeYwLFG-~aZ~osEh2q4b8cMes-xcb5sIAJG1i8AsJfIrE2L-UqDG1G-23u277AJNM3XSQ__",
    wiki: "https://en.wikipedia.org/wiki/Ian_Cardozo",
  },
  {
    name: "Brigadier Mohammad Usman",
    birth: "1912",
    death: "1948",
    title: "The Lion of Nowshera",
    img: "https://media-hosting.imagekit.io/4a23c7b4bd424404/03_Brigadier%20Mohammad%20Usman.jpg?Expires=1838304603&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jYB0~CBCi--XwgovaX9M--Njp0kep2GnJHbGkn0IFxtk1434OfhSX~jOqMgLtMBBJY6K0Z60luoHv6cQtVNf9vPdb5kbnZKlDGWY3-nUTZz5KfvWgA-G~QSotheXr5sQ6lfYD7kAQj107QjpTxC6EePkibN6POy4uXywNl9LrHdndjzc9xXQkiO-5lN0l2uPnTuSor~IhnIBL~74p-vPcuH7AzqA2PwHmmXL3mrN318VWkqHdp5HQXRwzmM7jVE9jZW1ukSRfyIlSxbdUKkMfhtcV0Ky3ulHlkK0U7SdSjNNH0xBtJbQ3YQzLGO3Y~GAbzVnX9pwTHJvzhZifGDhyQ__",
    wiki: "https://en.wikipedia.org/wiki/Mohammad_Usman",
  },
  {
    name: "Subedar Yogendra Singh Yadav",
    birth: "1980",
    death: "Present",
    title: "Param Vir Chakra Awardee",
    img: "https://media-hosting.imagekit.io/c1410ce900ab47d1/04_Subedar%20Yogendra%20Singh%20Yadav.jpg?Expires=1838304603&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uruiLG91tpTnK-byzSCwJPFifYhBcmULrzf0RUfTR0DZTmVnciHkHObNCSGXvNrOB6x83LenUP0FiNbR7l97K9GYQxMlWiv1HZHql~U7279VFW4f9amfQBkK1y6xiO9ZLaSHaMpvYt~V-CY9JX4pTQcpMiA-dc5tYfpEoEiwVzkCq9ZX-j-sF6IN6quoy1H0kVylFyw9HO7osBut4mzjffQGmwFWgEuul-7CnPKZcin4YZwHouKzEeY6sZHURXnMx9M-9o84hzG4hWLUWf~xJBRqIlDMR-jFaM5Rlpt2SIYyVHyKKjJmYYMIiSqJy-87ivbknE7ExFpffLm92TBK1g__",
    wiki: "https://en.wikipedia.org/wiki/Yogendra_Singh_Yadav",
  },
  {
    name: "Rifleman Jaswant Singh Rawat",
    birth: "1941",
    death: "1962",
    title: "Hero of the 1962 War",
    img: "https://media-hosting.imagekit.io/7e9d57a4484e4711/05_Rifleman%20Jaswant%20Singh%20Rawat.jpg?Expires=1838304603&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Al3c-pWtSNxC9WEpEQOKIJ1MXp00AmZ96EhWWaLCWPLbh-emgCkTk-jbTRvmFJ5UK~qTWpUzXbS8z0IBtEbgVxU2LG2ebsfOkcVDk5kv6jyP8Lr6XX6STx8FKDnnoINqr98CdMWxK0X52eiS0wz6OogRnuVOVyQW-lUNjd8RKA-FmUj6N2w7LsvgiHKuTeaRWJFjZBtjNToisrEG2FsnWNGBTJ-GlksJFrQFiq0GtKlchP9-v9BECGyvXM0-OTxuQFf2r~FosXbRG3uBDqeTTeRazZAquzIhUzoeTTHrbj6XHBAMd5DT8GGeQLMfOlxdVwvgt0kJISrANTmxzwQsgw__",
    wiki: "https://en.wikipedia.org/wiki/Jaswant_Singh_Rawat",
  },
  {
    name: "Second Lieutenant Arun Khetarpal",
    birth: "1950",
    death: "1971",
    title: "The Tank Warrior",
    img: "https://media-hosting.imagekit.io/5dcccbbf967a4a18/06_Second%20Lieutenant%20Arun%20Khetarpal.jpg?Expires=1838304603&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MJNTZgnW~Vi-rHax4mxlZ7MgrPgIu9e5StZ3ulvbTN-FjNgyiw74VdkxlzmmGXy~Gq66qXxhOth5VDmxWqWwQwN6FPSEnfvjyh96vQFwT41feO9h53XhV0PaO2xwKs9r7CiVRD~VgsvkdWW-5HjOye-okVbpQUpPC5rWrBcpv0PTOqeMHSfPAaHXLvFx3rwY~zVPMEXJFz1FnJn0ELXptOPPV3rZYZsT9mFBGZKsieul4CL7IPtcPoD-hm7TiHXcqw9Oe0r6poeR1WSjTx9XqxSWX~eFGykyGyo0mfE2jWQg41a3J5SfGmZNbfwfsyOtJ-Kgt2ut-3g7drg0RLbrRQ__",
    wiki: "https://en.wikipedia.org/wiki/Arun_Khetarpal",
  },
  {
    name: "Major Somnath Sharma",
    birth: "1923",
    death: "1947",
    title: "India’s First Param Vir Chakra Awardee",
    img: "https://media-hosting.imagekit.io/98a3691c4ee649b3/07_Major%20Somnath%20Sharma%20.jpg?Expires=1838304603&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uT-J7SkJnri07rPz2-dgz1fHSkqMWEisiGglUcxAQnmzjsYLme53lX3CNZFbJuTazehG~xh7N60TvSZGVE3c7fI4PKl2qXfl3TqrBaIgCJTooK7q2ojDz07yPjMpfjaEnzqVR47adCOrMEhDw105Hqn3WlRakIuINbIiOFf7uLcxfsXJt7c3fB70lTO4hiZjF0CLIIuznxHVvE8nHEliGa3t9TtdYeurlZxNF2p2OD~PntlEkJSRVvkulq1c19REnkNzTSvy2mbPvkHaxnugARDTgtOvtKgvWznEA1YsaWCFsIGgG1b4EBfU2Cfoi-XVJIKZOQ~PAyFDW9KaVn9t0w__",
    wiki: "https://en.wikipedia.org/wiki/Somnath_Sharma",
  },
  {
    name: "Naik Jaduath Singh",
    birth: "1916",
    death: "1948",
    title: "Param Vir Chakra Awardee",
    img: "https://media-hosting.imagekit.io/b0d56c4d7d1441dd/08_Naik%20Jadu%20Nath%20Singh.jpg?Expires=1838304603&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VRhvmQV3aCqpjo2zOBjhN6I1bHC4hB~CPInrCSdtfToJQFE87bMTUaqPAo496DE3cHcg7FTqO~w~2leMJczFzBxDvgLBynjJctXy3dHC8MJ7w5bYlG1bB-fde6dv4WxJ5gcO415SE6Frf0Idug8-x-k8SVNsAwwzmOAJIkAXjx~1NLGuF15w-aQEa7eqPbqXXfjn0~ywVvnahghDp1U9GN~ogMtdI-ozFBtR4zpjaoRM1DUcuGhbj7zIrWd3hYkifCf5j3zhkP~Fy-OhOJKY~XJRGL9CvtbA8uMznPykPn~g3ReAQZDFOKaJ2ENW1olg6xQn0V1495-8R6TVKLCcsA__",
    wiki: "https://en.wikipedia.org/wiki/Jadunath_Singh",
  },
];

const PhotoFrames = () => {
  const sectionRef = useRef(null);
  const birdRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      birdRef.current,
      { y: "-100px", x: "-50px", opacity: 0, rotate: -20 },
      {
        y: "0px",
        x: "0px",
        opacity: 1,
        rotate: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#2B2E31] min-h-screen py-14 px-6 lg:px-35">
      <div className="relative flex justify-center mb-12">
        <h2 className="text-center text-5xl font-bold text-[#D7D2CB] relative">
          <img
            ref={birdRef}
            src="https://media-hosting.imagekit.io/35d00a52f29c4002/Bird.png?Expires=1838305531&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qINqZNKJSNb4DaSfT7tzM4mSZnRjEJbM1XBM3d7sdM-uGCL-RN8-JMoBe5m46xzSKA5DcF4mAlrtD10n9pcvceFfPNStc4KQIUTFJ3psfC9IgJRXGjAKVNP7uMy3DYlexRz4DbkfOrqoWhpVbD7Env3cXrFaycTHC9o2pP8-QYXMnRwekP~j2BUsA7C375QsPT6fhDAe532uM9S~ptf7oKZGPSy3E21k1fAjrwu1Jbpr6JeH8nWGQd~sdUSfB-kdeeeoaEXGUZMYTdepPoGK-D4cacNFIOW6b-eWV5apmQ2sXlItR42bwDvlEsmff1xreozA4DEf-muGwClL6DKg5g__"
            alt="White Bird"
            className="absolute -top-20 left-0 w-24 h-24"
          />
          <span className="text-[#9D2444]">Legends</span> of Valor
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {legends.map((legend, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <div className="w-48 h-64 bg-[#3A3F44] overflow-hidden shadow-lg rounded-lg p-2">
              <img
                src={legend.img}
                alt={legend.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            <div className="mt-5 bg-[#3a3f4476] p-3 rounded-lg text-center w-48 shadow-md">
              <h3 className="text-lg font-semibold text-white">{legend.name}</h3>
              <span className="text-xs text-[#9D2444] bg-[#D7D2CB] px-3 py-1 rounded-md inline-block mt-2">
                {legend.birth} - {legend.death}
              </span>
              <p className="mt-2 text-gray-400 text-sm italic">{legend.title}</p>
              <a
                href={legend.wiki}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block bg-[#9D2444] text-white px-4 py-1 text-sm rounded-md hover:bg-[#7b1d36] transition"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoFrames;
