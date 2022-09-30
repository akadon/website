
interface ComponentProps {
  height?: string,
  bgcolor?: string,
  circle?: boolean;
  classname?: string;
  count?: number;
}

export default function Skeleton({
  circle = false,
  height = "h-5",
  bgcolor = "bg-gray-300",
  classname, count = 1
}: ComponentProps): JSX.Element {
  return (
    <span className="w-full flex flex-col space-y-3 animate-pulse">
      {
        Array.from(Array(count), (e, i) => {
          return <span key={i}
            className={height + " " + bgcolor + " " + (circle ? "rounded-full" : "rounded-md") + " " + classname}>
          </span>
        })
      }
    </span>
  )
}

