import React from "react";

const Slider = () => {
  return (
    <div className="carousel w-full h-[600px] rounded-md ">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://images.pexels.com/photos/14233324/pexels-photo-14233324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full"
        />
       <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute flex h-full left-0 top-0 items-center justify-between">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="bold text-3xl"><span className="text-5xl">UPCOMING.....</span>
              <br /> Affordable <br /> Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-active btn-secondary mr-5">Details More</button>
            <button className="btn btn-outline btn-success">Latest Air</button>
          </div>
          <div className="absolute flex justify-end transform translate-x-1/2 left-1 right-0 bottom-14">
            {" "}
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://images.pexels.com/photos/11490543/pexels-photo-11490543.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          className="w-full"
        />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute flex h-full left-0 top-0 items-center justify-between">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="bold text-5xl">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-active btn-secondary mr-5">Discover More</button>
            <button className="btn btn-outline btn-success">Latest Car</button>
          </div>
          <div className="absolute flex justify-end transform translate-x-1/2 left-1 right-0 bottom-14">
            {" "}
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full"
        />
       <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute flex h-full left-0 top-0 items-center justify-between">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="bold text-5xl">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-active btn-secondary mr-5">Discover More</button>
            <button className="btn btn-outline btn-success">Latest Car</button>
          </div>
          <div className="absolute flex justify-end transform translate-x-1/2 left-1 right-0 bottom-14">
            {" "}
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Slider;
