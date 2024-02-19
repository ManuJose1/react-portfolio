const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/manu-portfolio-fd228.appspot.com/o/hero%20image.jpg?alt=media&token=89dea321-30ae-44ef-ac89-1a17f014453b"
            alt='hero img'
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Welcome to my portfolio!</h1>
            <br/>
            <p className="text-3xl py-6">
              This website is a collection of all the work I've done from 3D Modelling in Blender to Front-End and Game Development. Im in 3rd year of Creative Computing in IADT and am proficient in HTML, CSS, Javascript and C#.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
