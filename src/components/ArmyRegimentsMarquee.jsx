/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const regiments = [
  { name: "Ladakh Scouts", image: "https://media-hosting.imagekit.io/67b9b1ff8dcb4f26/Ladakh_Scouts-removebg-preview.png?Expires=1838308082&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=w5M9LNyblaJq8Dr3VcgXxT0CEM16PtKRbL9nOP1eAZrJu3qZ7gyLAlK0~HTBiAA2l2R7wdPFVp3SuIR0fHwsA-8WlvRzO9plJ9m5cyrxoNGepKfmqEZWW7OUGL52fH9K61cLIqRknF2WD00Euvu98s7Tsuyx~mwlDBashDOZejbIL5Xk4TJ2Y0gmB4IwIS~QQcb1Ej90BLwrageh~sFeCWcZpAANK3dDLmyjVFvbe1wUufHHUyPA4NwVnAOsXzB1Dgap8tymeji4Ox09CCWkHATPaxiYDJieGKxuAKzb1RFgRMWhG4QFpt2Hr4kTIKNIpdGMznUJEjjpE987zTK-qQ__", link: "https://www.indianarmy.nic.in" },
  { name: "Jammu and Kashmir Light Infantry", image: "https://media-hosting.imagekit.io/8f1f96b33a48420b/Jammu_and_Kashmir_Light_Infantry_Insignia_(India).svg.png?Expires=1838308082&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BflvZzLJyKen9NS5~hL6FysM8bYBBQee1jx2JMn1Ucrdo6z5uKFp7j2LuCOHt72AFmf1R8ZsL1OmbmGjCp5iLKFGVe90xZOTG4UkDebTHdSwfb38N17EPtlW8~EutBgDJaOYgTd8KQSWKgQHRBpqEAeOHovtaaph-hT8To-mgvIv3URjxP6eVo-VO0O8GU04C-nE1vtMKE0mwUCiNdWlWVWLKu8Lte-yNIHqeT59qV-KhlGcBnEzZx4DQ7i6cI7sMLArahH3FDCrkfjVlBrrKT0YJs5ZtntZyzdmeY8QgmCKpwybQuxruZZRiHsSHTmB9Bd~wpv05f3KWK7efv~6NQ__", link: "https://www.indianarmy.nic.in" },
  { name: "Brigade of The Guards", image: "https://media-hosting.imagekit.io/11628e5cc5e048be/Brigade_of_the_Guards_Insignia_(India).svg.png?Expires=1838308082&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nP~YVH2t6jdSZxJDHYe062nW~WqTX3dYyai2OZ36CiquxHXqkpTB2iVKdcQaPA99iDzlZp~wsMRJs1Qzb7jcbcsyDzMZcdtM7FRK0sLjawy1T8DRtNd3GiTx6C9Xm-4TcmlSl9fHuZxIIfnhT8gU1~mqvrrT1rASF3WBkEo4pw9jfQ49XjW~lt38TbIpPIhd145LPKmAp9A6U37C9WWvSorrN~NkTiQPwFcndbnDzFGa8Jl-P8lwUPRA07yZyK6HpdEF2YnR74BoXEjcOVAEk4gJSlacKXW3IShNto4KL~n3Y95mUGKKI5xeYbPGC-~OCYZ2hG04Lw9lemY3ohlhgQ__", link: "https://www.indianarmy.nic.in" },
  { name: "Mahar Regiment", image: "https://media-hosting.imagekit.io/b80d5b503f4c4503/Mahar_Regiment_Insignia_(India).svg?Expires=1838308082&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RVX~TttL31dsIGD13z6F8VBwK~sBEnGpfumKShvXBqLsF2YvIB9~kcWjGX1pAgPDU7NV5~olGIach5xXtKdwwhwZlqqXcQoH7DfzzXGn~ig9Ve49Ozicl32Np5f9mKWDJl0Ndi5CANjdqr8jl3hZL1uliBye4cp38TnjWZC4~CJzR2-nycZavG4qCrsY~iKKnjWiD8v4aYx8NTVme3NRCZC7~5seWfPoP6kpGED5BmkPUhZCTdNu6XjFey5ftBZR79ELPij6wm0IywOHUMXElV7yFxgwwrfbTV40Ihj2FnP18dQ2sl9fi19j0VDPLT4h2guEcOTpExtGu0YwCTjIvw__", link: "https://www.indianarmy.nic.in" },
  { name: "Grenadiers", image: "https://media-hosting.imagekit.io/c6396aa44a2749e2/Grenadiers_Insignia_(India).svg.png?Expires=1838308082&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DwnzAqWJFfwGpK29IejDjPg-elby7QD2XcUCrhFC2v92XdXsDxNDVlShmZ-Kl5LL~-z0~F-lKqrPD6l-zQpokvy-PAWZSCxVRHk0BEkWMu0utQQ0j4B39f6MHLVaFjrcQeVsPbOU7zXo9kGRKkWnC5uJcWoY1FWVmNmWs2tUMrVv7gJ1GmHGjQWrbxFH0qJCknxijABTXrb9wTFWR3BEtXe0NUee925iDCfdZe9v5pc-WA6NIouXvIqAPBnsK8IE2TmOfisWzekkufwBxJ3iGwJ0gz35SKx4FvHfy6tLOsBJINSGLR4AVF05WMlwWGkANrKmh3AkUmPHcPTtlyHepg__", link: "https://www.indianarmy.nic.in" },
  { name: "Assam Regiment", image: "https://media-hosting.imagekit.io/fd21b58c4baa4bac/Assam_Regiment_Insignia_(India).svg.png?Expires=1838308273&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dVjvEg3hAyBn8zm77hCsz3Xek6raILv8lnoK8~mgkcXRtyN-LJfAD-C5RcCFslDCs75iyX75uFnlPKKDgiTI1HcD0KB-hYI7yTYP7MjFM7akar86q9feTqlr0cWzRsrp5n45b8vCvRJ9DLZ6pxnXm3jq-KV1mrZnZXc~31m2gkPEsFfGFSIsmslxnhGQaDoZuywPwNvICDLgGhOILRInOVFSRAWUF7u2-ultJyyRdiTFqEO6xwMViBVKjCswU3hwHjLkpfMipoE~3ZDk7uIb9io7ruf~rcybSXeqY~AD5VOIR2wkveveqKIPUnUCLvcTbwKy8RANAaHhbewUJmqeIg__", link: "https://www.indianarmy.nic.in" },
  { name: "Bihar Regiment", image: "https://media-hosting.imagekit.io/2d2afff58b4145b5/BiharRegiment.webp?Expires=1838308082&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JzCbMY5AfPl5T~LW72QEcHltIr31GgiiOw5iMIOK0qaKtFrpnDTtJeXVOmAaQbeY3WEk-uFj8SOoB6a2OslYr28BGBBiAlD3u8nUsVTG6WaXG1OEsfISIoLhyGzU3nA~0VphR~enTm0Yfi9YDf8PQXiH~7ubhQtNXlQEmJiXcc58Pr8SyLH-9iVoUH-UFGXD5YdPxX3jCx7Nkx9rZExqNQHcc9Adr00uu5za8vYZeUn5SboshY~EOj3GV3RnoO7E8PPgvJqbHUcrnY5QWiyKlNbYzGoivdwiViYn6MWUm9Pm6uzx-R~fCi8w9wOHwe0YSbr-cJZ7c6GDeF4le0msVQ__", link: "https://www.indianarmy.nic.in" },
  { name: "Naga Regiment", image: "https://media-hosting.imagekit.io/61c2d0b425d7451f/Naga_Regiment_Insignia_(India).svg.png?Expires=1838308082&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mHez56iFIPKdZyiN2NR-PNics2W2i5Vg6hL-8b5f1g5nVoqUS7Fn5vQ8zEZejjkXOQJ1DTSxkufvpIL087nWlcbqGdOHeFSIpjJTypt6TzpL-1HRQTgye2g0061vxto3a48JdXeHUgD0826cmaoGJH6TFv4hcDFD43WxDaydHltYho~F29MvorCm1rSxkvuHViwtF96cx-nWwozRVewfD~4QjqcczPNUn1EEuWUcOmZ8w-LK7W8~4RDk8sOLBbIyosoX~UswiyQWCBhzYjOP74kXi6t3bTvdpjqXTcVmeY~JIVLp3EpiZh5j4j0p3Nsl1ypbSTcEumMKkLkMAVSeag__", link: "https://www.indianarmy.nic.in" },
];

function ArmyRegimentsMarquee() {
  return (
    <div className="overflow-hidden w-full bg-[#2B2E31] mb-25 py-6">
      <motion.div
        className="flex gap-10 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
      >
        {[...regiments, ...regiments].map((regiment, index) => (
          <div key={index} className="flex flex-col items-center text-center px-6">
            <img
              src={regiment.image}
              alt={regiment.name}
              className="h-18 w-18 object-contain grayscale opacity-80 hover:opacity-100 transition duration-300"
            />
            <span className="text-[#D7D2CB] text-xs mt-2">{regiment.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default ArmyRegimentsMarquee;
