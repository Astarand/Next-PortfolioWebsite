import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation]);
const Testimonial = () => {
  const props = {
    slidesPerView: 1,
    loop: true,
    pagination: false,
    navigation: {
      prevEl: ".prev_button",
      nextEl: ".next_button",
    },
  };
  return (
    <div className="rsk_tm_section" id="testimonial">
      <span className="border">
        <span
          className="in moving_effect"
          data-direction="x"
          data-reverse="yes"
        />
      </span>
    </div>
  );
};

export default Testimonial;
