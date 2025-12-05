import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";
import s1 from "../../assets/user-1.png";
import s2 from "../../assets/user-2.png";
import s3 from "../../assets/user-3.png";
import s4 from "../../assets/user-4.png";

const Testimonials = () => {
  const data = [
    {
      img: s1,
      name: "Alex Johnson",
      university: "Harvard University",
      country: "USA",
      review:
        "Studying at this university has completely changed my academic journey. The environment is inspiring and the professors really care."
    },
    {
      img: s2,
      name: "Maria Lopez",
      university: "University of Barcelona",
      country: "Spain",
      review:
        "This university helped me grow professionally and personally. I learned so much and made unforgettable friendships with people from many countries."
    },
    {
      img: s3,
      name: "Takashi Ito",
      university: "Tokyo University",
      country: "Japan",
      review:
        "Great facilities, excellent teachers and a multicultural campus. I truly enjoyed every moment of my studies here and highly recommend it."
    },
    {
      img: s4,
      name: "Sarah Ahmed",
      university: "Kabul University",
      country: "Afghanistan",
      review:
        "A wonderful experience full of support and motivation. The university helped me discover my strengths and achieve my goals."
    },

      {
      img: s4,
      name: "Sarah Ahmed",
      university: "Kabul University",
      country: "Afghanistan",
      review:
        "A wonderful experience full of support and motivation. The university helped me discover my strengths and achieve my goals."
    },

      {
      img: s4,
      name: "Sarah Ahmed",
      university: "Kabul University",
      country: "Afghanistan",
      review:
        "A wonderful experience full of support and motivation. The university helped me discover my strengths and achieve my goals."
    }
  ];

  return (
    <div className="testimonials-section">

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          992: { slidesPerView: 2 },
        }}
        className="testimonials-swiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <img src={item.img} alt={item.name} className="student-img" />

                <div className="student-info">
                  <h3 className="student-name">{item.name}</h3>
                  <p className="student-uni">{item.university}</p>
                  <p className="student-country">{item.country}</p>
                </div>
              </div>

              <p className="student-review">{item.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
