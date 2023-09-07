
const SliderContent = ({ activeIndex, sliderImage }) => {

  return (
    <section>
      <div className="carousel-content">

        {sliderImage.map((slide, index) => (
          <div key={index} className= {index === activeIndex ? 'slides active' : 'inactive'}>
            <img className="slide-image" src={slide.url} />
          </div>
        ))}

      </div>
    </section>
  )

}

export default SliderContent