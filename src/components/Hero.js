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
             Hi, I’m Manu - a frontend developer & game creator. I have a BCs(Hons) in Creative Computing and I build interactive websites, immersive games, and 3D experiences using tools like React, Unity, and Blender. My work blends design and code to create engaging, user-focused digital worlds.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
