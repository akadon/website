import axios from "axios";
import { useQuery } from "react-query";
import Skeleton from "./Skeleton";

export const axifetch = async (url: any) => {
  return await axios.create({}).get(url).then((res: any) => { console.log("axi", res); return res.data });
}

const converter = (data: any) => {
  return {
    id: data.id,
    name: data.name,
    title: data.name,
    description: data.description,
    imageSrc: "/" + data.name + "/Image.jpg",
    imageAlt: data.name + 'github url',
    linkSrc: data.url,
    linkAlt: data.name + 'github url',
  };
}

const Imgcard = ({ content, index, to }: any) => {
  return (
    <>
      {(typeof content !== 'undefined') ? content.posts.slice(index, to).concat(new Array(to).fill(0)).slice(index, to).map((contentpart: any, itr: number) => (
        <>
          {(contentpart !== 0) ?
            <>
              <img key={itr} src={converter(contentpart).imageSrc} alt={converter(contentpart).imageAlt} className="h-64 w-44 opacity-20 rounded-3xl" />
            </>
            :
            <Skeleton key={itr} height="h-64" classname=" w-44 opacity-20 rounded-3xl" count={1} />
          }
        </>
      )) : [...Array(to)].map((x, itr) =>
        <Skeleton key={itr} height="h-64" classname=" w-44 opacity-20 rounded-3xl" count={1} />
      )}
    </>
  )
}

export function Hero() {
  const { data: content, status } = useQuery("github", async () => { return axifetch("/api") });

  return (
    <>
      <div className="h-screen w-1/2 flex flex-col justify-center">
        <h1 className="font text-6xl z-10 font-bold text-white textoutline text-center m-10">
          Willkommen zu Meinem Portfolio
        </h1>
      </div>
      <div className="absolute inset-0  z-0">
        <div className="flex items-center sm:justify-center lg:justify-end space-x-6 pointer-events-none z-0 p-10 mt-20  md:m-20" aria-hidden>

          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            <Imgcard content={content} index={0} to={3} />
          </div>

          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            <Imgcard content={content} index={3} to={7} />
          </div>

          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 opacity-0 md:opacity-100">
            <Imgcard content={content} index={7} to={10} />
          </div>

        </div>
      </div>
    </>
  )
};

export default Hero