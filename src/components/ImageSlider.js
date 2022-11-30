import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"
import React from 'react'

const ImageSlider = ({images}) => {

const settings = {
	infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	lazyLoad: true,
	autoplay: true,
autoplaySpeed: 2000,

};
return (
	<>
    <div className="carousel">
	<div className="tag">
		<h1 className="partners text-black text-3xl lg:text-5xl font-bold font-default ">Our Partners</h1>
	</div>
	<div className="imgslider">
		<Slider {...settings}>
		{images.map((item) => (
			<div key={item.id}>
			<img src={item.image} alt="" />
			</div>
		))}
		</Slider>
	</div>
    </div>

		</>
)
}
export default ImageSlider;
