import Skeleton from "./Skeleton";
import ReactMarkdown from 'react-markdown'
import { useState, useEffect } from 'react'

interface ComponentProps {
	content: contenttype;
	count?: number;
	lines?: number;
}

type contenttype = {
	[key: string]: any;
	name: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
	linkSrc: string;
	linkAlt: string;
};

const Card = ({ content, lines = 10 }: ComponentProps) => {
	const [tosText, setTosText] = useState('')
	fetch(content.description).then(res => res.text()).then(text => setTosText(text))

	return (
		<div key={content.name} className='card border-2 rounded-2xl h-full w-full overflow-clip relative bg-slate-300'>

			<div className="absolute z-0 inset-0">
				{content.imageSrc != "" ?
					<img src={content.imageSrc} alt={content.imageAlt} className="h-full w-full" /> :
					<Skeleton height="h-full" classname="absolute inset-0" count={1} />
				}
			</div>

			<div className="absolute z-20 inset-0 cursor-pointer">
				<a aria-label={content.linkAlt} href={content.linkSrc} className="h-full w-full" target="_self"></a>
			</div>

			<div className='relative h-full w-full bg-white opacity-95 translate-y-3/4 hover:translate-y-0 ease-in-out duration-500 ' >
				<div className='h-1/4 text-3xl w-full p-7 pb-0'>
					<h2 className='font-bold w-full flex item-center justify-center' aria-flowto="">
						{content.name != "" ? content.name : <Skeleton height="h-8" classname="" count={1} />}
					</h2>
				</div>
				<hr className='h-1 ml-5 mr-5' />
				<div className=' text-lg flex items-center p-5 '>
					{content.description != "" ? <ReactMarkdown>{tosText}</ReactMarkdown> : <Skeleton classname="" count={lines} />}
				</div>
			</div>

		</div>
	)
}

Card.defaultProps = {
	content: {
		name: '',
		description: '',
		imageSrc: '',
		imageAlt: '',
		linkSrc: '',
		linkAlt: '',
	}
};

export default Card
