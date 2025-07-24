import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination ,Navigation,Autoplay} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'
import homeSliderImage from '../../assets/images/home-slider-1.png'


export default function HomeSlider() {
  return <>
  <Swiper modules={[Pagination,Navigation,Autoplay]} autoplay={true} slidesPerView={1} spaceBetween={3} loop={true} pagination={{clickable:true}} navigation>
    <SwiperSlide>
        <div style={{backgroundImage:`url(${homeSliderImage})`,backgroundSize:'cover',backgroundPosition:'center'}}>
            <div className=" py-30 overlay bg-gradient-to-r from-primary-600/95 to-primary-600/40">
                <div className="container space-y-4 text-white">
                    <h2 className='text-3xl  font-semibold'>Fresh Organic Produce<br/> Deliverd to your Door</h2>
                    <p >Get 20% off on your first order</p>
                    <div className="space-x-2">
                    <button className='btn bg-white text-primary-500 font-semibold border-white! hover:bg-gray-100 transition-colors duration-200'>Shop Now</button>
                    <button className='btn border-white! font-semibold hover:bg-white hover:text-primary-500 transition-colors duration-200'>View Deals</button>
                    </div>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div style={{backgroundImage:`url(${homeSliderImage})`,backgroundSize:'cover',backgroundPosition:'center'}}>
            <div className=" py-30 overlay bg-gradient-to-r from-primary-600/95 to-primary-600/40">
                <div className="container space-y-4 text-white">
                    <h2 className='text-3xl  font-semibold'>Fresh Organic Produce<br/> Deliverd to your Door</h2>
                    <p >Get 20% off on your first order</p>
                    <div className="space-x-2">
                    <button className='btn bg-white text-primary-500 font-semibold border-white! hover:bg-gray-100 transition-colors duration-200'>Shop Now</button>
                    <button className='btn border-white! font-semibold hover:bg-white hover:text-primary-500 transition-colors duration-200'>View Deals</button>
                    </div>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div style={{backgroundImage:`url(${homeSliderImage})`,backgroundSize:'cover',backgroundPosition:'center'}}>
            <div className=" py-30 overlay bg-gradient-to-r from-primary-600/95 to-primary-600/40">
                <div className="container space-y-4 text-white">
                    <h2 className='text-3xl  font-semibold'>Fresh Organic Produce<br/> Deliverd to your Door</h2>
                    <p >Get 20% off on your first order</p>
                    <div className="space-x-2">
                    <button className='btn bg-white text-primary-500 font-semibold border-white! hover:bg-gray-100 transition-colors duration-200'>Shop Now</button>
                    <button className='btn border-white! font-semibold hover:bg-white hover:text-primary-500 transition-colors duration-200'>View Deals</button>
                    </div>
                </div>
            </div>
        </div>
    </SwiperSlide>
  </Swiper>
  </>
}
