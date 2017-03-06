import Slider from 'react-slick';


const FeaturedPharmacies = () => {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    }, {
      breakpoint: 641,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }],
  };
  return (
    <div className="featured-pharmacies">
      <h2>Featured Pharmacies</h2>
      <div className="container">
        <Slider {...settings} >
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
          <div><h3>7</h3></div>
          <div><h3>8</h3></div>
          <div><h3>9</h3></div>
        </Slider>
      </div>
      <style jsx>{`
        .featured-pharmacies {
          padding: 4% 10%;
        }
        h2 {
          font-weight: normal;
          text-align: center;
        }
        .container {
          padding: 10px 30px;
        }
        h3 {
          background: #009688;
          color: #fff;
          font-size: 36px;
          line-height: 100px;
          margin: 10px;
          padding: 2%;
          position: relative;
          text-align: center;
        }
      `}</style>

    </div>
  );
};

export default FeaturedPharmacies;
