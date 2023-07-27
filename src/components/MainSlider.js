import React from 'react';

// import swiper react components
import {Swiper, SwiperSlide} from'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';

//import required modules
import {Pagination} from 'swiper';

// images
import GohanImg from '../img/6.png';
import GaaraImg from '../img/22.png';
import KatchanImg from '../img/13.png';

//data
const sliderData =[
  {
    img: GohanImg,
    pretitle: 'Offre spéciale',
    titlePart1: 'économise 20%',
    titlePart2: 'sur ta',
    titlePart3: 'première commande',
    btnText: 'Acheter maintenant',
  },
  {
    img: GaaraImg,
    pretitle: 'Offre spéciale',
    titlePart1: 'économise 20%',
    titlePart2: 'sur ta',
    titlePart3: 'première commande',
    btnText: 'Acheter maintenant',
  },
  {
    img: KatchanImg,
    pretitle: 'Offre spéciale',
    titlePart1: 'économise 20%',
    titlePart2: 'sur ta',
    titlePart3: 'première commande',
    btnText: 'Acheter maintenant',
  },
]



const MainSlider = () => {
  return( 
     <Swiper modules={[Pagination]}
      loop={true}
        pagination={{
          clickable: true,
        }}
        className='mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat
        max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2x1'
     >

  <>
   {sliderData.map((slide, index) => {
       return (
         <SwiperSlide key={index}>
        <div className='flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]'>
          {/* text */}
          <div className='w-full lg:flex-1 '>
            <div className='uppercase mb-1 text-center lg:text-left'>{slide.pretitle}</div>
            <div className='text-3xl md:text-[46px] font-semibold
            uppercase leading-none text-center lg:text-left mb-8 xl:mb-20 '>
              {slide.titlePart1} <br />
              {slide.titlePart2} <br />
              {slide.titlePart3}
            </div>
            <button className='btn btn-accent mx-auto lg:mx-0'>Achetez maintenant</button>
          </div>
          {/* img */}
          <div className='flex-1'>
            <img className='xl:absolute xl:-right-1 xl:-bottom-12:' src={slide.img} alt='' />
            </div>
        </div>
       </SwiperSlide>
       );
   })}
  
  </>
    </Swiper>
  
  );
};

export default MainSlider