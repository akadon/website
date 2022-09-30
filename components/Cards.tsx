import Card from './Card'
import axios from "axios";
import { useQuery } from "react-query";

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
    imageAlt: data.name + ' github Project Image',
    linkSrc: data.url,
    linkAlt: data.name + 'github url',
  };
}

const Cards = ({ }: any) => {
  const { data: content, status } = useQuery("github", async () => { return axifetch("/api") });

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto lg:max-w-none">
        <ul aria-label="projects" className="lg:grid lg:grid-cols-2">
          {(typeof content !== 'undefined') ? content.posts.map((contentpart: any, itr: number) => (
            <li key={itr} className="group relative h-96 p-6">
              <Card content={converter(contentpart)} />
            </li>
          )) : [...Array(4)].map((x, itr) =>
            <li key={itr} className="group relative h-96 p-6">
              <Card />
            </li>
          )}
        </ul >
      </div>
    </div>
  )
}


export default Cards
