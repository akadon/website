import Card from './Card'
import { useQuery } from "react-query";
import { converter } from "./Types";
import { axifetch } from "./Helper";

const Cards = ({ }: any) => {
  const { data: content, status } = useQuery("github", async () => { return axifetch("/api") });

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto lg:max-w-none">
        <ul aria-label="projects" className="lg:grid lg:grid-cols-2">
          {(typeof content !== 'undefined') ? content.map((contentpart: any, itr: number) => (
            <li key={"Cards" + itr} className="group relative h-96 p-6">
              <Card content={converter(contentpart)} />
            </li>
          )) : [...Array(4)].map((x, itr) =>
            <li key={"Cardsskell" + itr} className="group relative h-96 p-6">
              <Card />
            </li>
          )}
        </ul >
      </div>
    </div>
  )
}


export default Cards
