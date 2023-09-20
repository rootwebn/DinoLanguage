import Image from "next/image";
import LogoImage from "../../../../public/Logo.png";

export function HomePage() {
  return (
    <div className={"pr-16 pl-16"}>
      <div
        className={
          "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pl-16 pr-16 pt-16 text-center"
        }
      >
        Dive into the languages, where every word is a step into a world of
        wonder and discovery.
      </div>
      {/*<Image*/}
      {/*  src={LogoImage}*/}
      {/*  alt={""}*/}
      {/*  className={"-scale-x-100"}*/}
      {/*  width={300}*/}
      {/*  height={300}*/}
      {/*/>*/}
    </div>
  );
}