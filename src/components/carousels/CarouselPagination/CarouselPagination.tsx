// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './CarouselPagination.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { CardEvent } from '../..';

interface Props {
	data: Array<{
		image: string;
		alt: string;
		title: string;
		text: string;
		date: string;
	}>;
}

export default function CarouselPagination({ data }: Props) {
	return (
		<>
			<Swiper
				pagination={{
					type: 'fraction',
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className='CarouselPaginationr'
			>
				{data.map(({ image, alt, title, text, date }) => (
					<SwiperSlide>
						<CardEvent
							key={title}
							image={image}
							alt={alt}
							title={title}
							text={text}
							date={date}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
