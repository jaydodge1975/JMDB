const Hero2 = ({line1, line2, line3, line4, backdrop }) => {
  return (
    <header className='bg-dark text-white p-5 hero-container2'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-9'>
            <h1 className='hero-line1'>{line1}</h1>
            <h3 className='hero-line2'>{line2}</h3>
            {/* <h5 className='hero-line3'>Rating:  {line3}</h5>
            <h5 className='hero-line4'>Release Date:  {line4}</h5> */}
          </div>
        </div>
      </div>
      {backdrop &&
      <div className='hero-backdrop' style={{backgroundImage: `url(${backdrop})`}} ></div>
      }
    </header>
  )
}

export default Hero2;
