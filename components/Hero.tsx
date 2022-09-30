import { useQuery } from "react-query";
import Skeleton from "./Skeleton";
import { converter } from "./Types";
import { axifetch } from "./Helper";
import Image from 'next/image'


const Imgcard = ({ content, index, to }: any) => {
  return (
    <>
      {(typeof content !== 'undefined') ? content.slice(index, to).concat(new Array((to - index)).fill(0)).slice(0, (to - index)).map((contentpart: any, itr: number) => (
        <>
          {(contentpart !== 0) ?
            <div className="h-64 w-44 opacity-20 rounded-3xl" >
              <Image height={300} width={200} key={"Imgcard" + index + to + itr} src={converter(contentpart).imageSrc} alt={converter(contentpart).imageAlt} className="h-full w-full rounded-3xl" />
            </div>
            :
            <Skeleton key={"Imgcardskell" + index + to + itr} height="h-64" classname=" w-44 opacity-20 rounded-3xl" count={1} />
          }
        </>
      )) : [...Array((to - index))].map((x, itr) =>
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