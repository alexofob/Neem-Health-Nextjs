import Slider from 'react-slick';


const TopPharmacies = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
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
      <h2>Top Pharmacies using the platform</h2>
      <div className="container">
        <Slider {...settings} >
          <div><h4>Pharmacy 1</h4></div>
          <div><h4>Pharmacy 2</h4></div>
          <div><h4>Pharmacy 3</h4></div>
          <div><h4>Pharmacy 4</h4></div>
          <div><h4>Pharmacy 5</h4></div>
          <div><h4>Pharmacy 6</h4></div>
        </Slider>
      </div>
      <style jsx>{`
        .featured-pharmacies {
          padding: 4% 10%;
        }
        h2 {
          font-weight: normal;
        }
        .container {
          padding: 2% 10%;
        }
        h4 {
          background: teal;
          color: #fff;
          font-size: 24px;
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

export default TopPharmacies;
