import Image from "next/image";

const investorsLogos = [
  {
    imageSrc: "/trusted-by/uba.png",
    width: "160px",
    height: "100px",
  },
  {
    imageSrc: "/trusted-by/wise.png",
    width: "152px",
    height: "62px",
  },
  {
    imageSrc: "/trusted-by/fairmoney.png",
    width: "190px",
    height: "108px",
  },
  {
    imageSrc: "/trusted-by/kuda.png",
    width: "162px",
    height: "86px",
  },
];

function TrustedBy() {
  return (
    <section className="flex flex-col flex-wrap items-center justify-center gap-4 py-14">
      <div className="relative h-[300px] w-full md:h-[937px]">
        <Image
          src="/trusted-by/trusted-by.png"
          alt="Radial Gradient"
          className="object-contain md:object-cover"
          fill
          sizes="100vw"
        />
      </div>

      {/* investors */}
      <p className="font-poppins text-2xl font-semibold text-gray-600">
        Our Investors
      </p>
      <div className="flex w-full flex-col items-center justify-center gap-2 font-poppins md:flex-row">
        {investorsLogos.map((logo, i) => (
          <div
            className="relative"
            style={{ height: logo.height, width: logo.width }} // dynamically set sizes of logos
            key={i}
          >
            <Image src={logo.imageSrc} alt="Investor" fill sizes="100vw" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedBy;
