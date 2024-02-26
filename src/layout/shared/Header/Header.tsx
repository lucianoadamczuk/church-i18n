import './index.css';

export default function Header() {
	return (
		<header>
			<div className='container'>
				<h2>Dejate ser alcanzado por su amor.</h2>
				<h1>Iglesia del Padre</h1>
				<p>
					<b>
						Y cuando yo haya sido elevado sobre la tierra, atraeré a todos hacia
						mí.
					</b>
					- Juan 12:32
				</p>
			</div>
			<video
				autoPlay
				muted
				loop
				src='/home/header-mobile.mp4'
				className='video-mobile'
			></video>
			<video
				autoPlay
				muted
				loop
				src='/home/header-desktop.mp4'
				className='video-desktop'
			></video>
		</header>
	);
}
