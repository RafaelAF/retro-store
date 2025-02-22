"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

import Imagem1 from "../../../../../public/slide1.jpg"
import Imagem2 from "../../../../../public/slide2.jpg"
import Imagem3 from "../../../../../public/slide3.jpg"

export const Carroussel = () => {
    return (
        <div className="max-w-5xl mx-auto py-5 relative">
            <div className="border border-d-black slider-track relative flex">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    className="w-full h-full"
                    pagination={true}
                    modules={[Pagination]}
                    >
                    <SwiperSlide className="flex justify-center items-center relative">
                        <Image className="w-full max-h-[429px] object-cover" src={Imagem1}  alt="" />
                        <div className="absolute bottom-6">asd</div>
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center relative">
                        <Image className="w-full max-h-[429px] object-cover" src={Imagem2}  alt="" />
                        <div className="absolute bottom-6">asd 2</div>
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center relative">
                        <Image className="w-full max-h-[429px] object-cover" src={Imagem3}  alt="" />
                        <div className="absolute bottom-6">asd 3</div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}