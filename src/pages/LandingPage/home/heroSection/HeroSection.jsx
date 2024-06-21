// import React from 'react'
import Slider from "react-slick";
import { HeroConfig } from "./heroConfig";
import Container from "../../../../components/container/Container"
import Button from "../../../../components/shared/Button";

const HeroSection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    // slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <Container>
      <div className="overflow-hidden rounded-3xl min-h-[650px]
            sm:min-h-[650px] hero-bg-color flex justify-center items-center
          ">
        <Container classname={"pb-8 sm:pb-0"}>
          <Slider {...settings}>
            {
              HeroConfig.map((data) => (
                <div  className="w-full " key={data.id} >
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex flex-col justify-center
                      gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left
                      order-2 sm:order-1 relative z-10 pb-2
                    ">
                      <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                        {data.subtitle}
                       </h1>
                      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                        {data.title}
                      </h1>
                      <h1 className="text-5xl uppercase text-white dark:text-white/5
                        sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold
                      ">
                        {data.title2}
                      </h1>
                      <div>
                        <Button
                          text="Shop By Category"
                          bgColor="bg-primary"
                          textColor="text-white"
                        />
                      </div>
                    </div>
                    {/* Img section */}
                    <div className="order-1 sm:order-2">
                      <div>
                        <img src={data.img} alt=""
                          className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]
                          sm:scale-105 lg:scale-120 object-contain
                          mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]
                          relative z-40 
                          "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </Slider>
        </Container>
      </div>
    </Container>
  )
}

export default HeroSection