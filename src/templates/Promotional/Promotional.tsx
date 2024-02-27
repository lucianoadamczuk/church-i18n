import './Promotional.css';

interface Props {
	bgMobile: string;
	bgDesktop: string;
	title: string;
	verse: string;
	text: string;
}
export default function Promotional({
	bgMobile,
	bgDesktop,
	title,
	verse,
	text,
}: Props) {
	const background = window.innerWidth < 720 ? bgMobile : bgDesktop;

	return (
		<section
			className='promotional'
			style={{ backgroundImage: `url(${background})` }}
		>
			<div className='container'>
				<article className='box-1'>
					<div className='container-1'>
						<h3 className='title'> {title} </h3>
						<p className='verse'> {verse} </p>
					</div>

					<div className='container-2'>
						<p>{text}</p>
					</div>
				</article>
			</div>
		</section>
	);
}
