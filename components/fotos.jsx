"use client"
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import 'react-awesome-slider/dist/styles.css';

const Fotos = () => {
  return (
    <div className='w-[100%] h-auto relative  overflow-hidden p-8 sm:p-20 sm:py-40 flex flex-col gap-4 ' >
      <AwesomeSlider animation="fallAnimation" className='h-[90vh] shadow-2xl w-1/2  rounded-xl overflow-hidden      w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] ' >
        <div data-src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1717411076/IMG_1280_znxlgl.jpg" />
        <div data-src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1717411074/IMG_1276_rcuno3.jpg" />
        <div data-src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1717411074/IMG_1311_uapmqh.jpg" />
        <div data-src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1717411073/IMG_1307_vle3kg.jpg" />
        <div data-src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1717411072/IMG_1261_ndwzyu.jpg" />
        <div data-src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1717411075/IMG_1278_lyfoi0.jpg" />
        <div data-src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1717411075/IMG_1278_lyfoi0.jpg" />
        <div data-src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1717411071/IMG_1423_l4dgl8.jpg" />
        <div data-src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1717411071/IMG_1260_mjobpp.jpg" />
        <div data-src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1717411075/IMG_1278_lyfoi0.jpg" />
        <div data-src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1717411075/IMG_1262_nbv43r.jpg" />
        <div data-src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1717411075/IMG_1278_lyfoi0.jpg" />
      </AwesomeSlider>
    </div>
  );
}

export default Fotos;
