
  import { Swiper, SwiperSlide } from 'swiper/react';

  import CountUp from 'react-countup';
  import 'swiper/css';
  import 'swiper/css/pagination';

  const cards = [
    { title: 'Avg Users', end: 500000, suffix: 'k' },
    { title: 'Avg Age', end: 20 },
    { title: 'Avg Salary', end: 40000, prefix: '$' },
    { title: 'Avg Time Spent', end: 30, suffix: ' mins' },
    { title: 'Avg Posts', end: 120 },
    { title: 'Avg Likes', end: 1500 },
    { title: 'Avg Comments', end: 300 },
  ];

  const CardSwiper = () => {
    return (
      <div className='lg:w-[900px] md:w-[600px] sm:w-[600px] w-[300px]'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1} // 👈 Default for below `sm`
          breakpoints={{
            400: {
              slidesPerView : 2,
            },
            640: {
              slidesPerView: 3, // `sm` and up
            }
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="h-[150px] bg-white shadow-md rounded-lg p-4 flex flex-col justify-center items-center border border-gray-200">
                <h2 className="md:text-xl text-md  font-semibold text-gray-700">{card.title}</h2>
                <p className="sm:text-3xl text-md font-bold text-blue-600 mt-2">
                  <CountUp
                    start={0}
                    end={card.end}
                    duration={2}
                    separator=","
                    prefix={card.prefix || ''}
                    suffix={card.suffix || ''}
                  />
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  export default CardSwiper;
