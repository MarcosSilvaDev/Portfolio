import aboutImage from "../../assets/About_img.webp";

export function About() {
  return (
    <div className="relative flex z-20 sm:min-h-full w-full flex-col sm:flex-row justify-center items-center gap-10 p-2">
      <div className=" bg-green-400">
        <img
          className="w-90 h-100 sm:w-110 sm:h-140 rainbow shadow-[0_0_10px_#24ebeb]"
          src={aboutImage}
        />
      </div>

      <div className=" bg-green-400 sm:w-1/2 px-4 py-8 flex flex-col gap-5 rounded-sm">
        <h1 className="uppercase text-7xl font-bold font-[Armarna]">
          Sobre mim
        </h1>

        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et
          perferendis labore unde minus possimus enim est eaque at itaque
        </p>
      </div>
    </div>
  );
}
