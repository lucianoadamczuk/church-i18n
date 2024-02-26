import { v4 as uuidv4 } from 'uuid';
import './DoubleBox.css';

interface Props {
	title: string;
	text: string | string[];
	image: string;
	alt: string;
	inverted?: boolean;
}

export default function DoubleBox({
	title,
	text,
	image,
	alt,
	inverted,
}: Props) {
	return (
		<section className='doubleBox'>
			<article className={`box-1 ${inverted && 'box-1-inverted'}`}>
				<h3> {title} </h3>
				{!Array.isArray(text)
					? text
					: text?.map((item) => <p key={uuidv4()}> {item} </p>)}
			</article>
			<img
				src={image}
				alt={alt}
				className={`box-2 ${inverted && 'box-2-inverted'}`}
			/>
		</section>
	);
}
