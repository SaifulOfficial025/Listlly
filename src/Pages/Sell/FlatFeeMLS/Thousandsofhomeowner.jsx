import React from "react";
import thousandsbg from "../../../../public/thousands.png";
import icon1 from "../../../../public/thousandcardicon1.png";
import icon2 from "../../../../public/thousandcardicon2.png";
import icon3 from "../../../../public/thousandcardicon3.png";
import icon4 from "../../../../public/thousandcardicon4.png";

function Thousandsofhomeowner() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(${thousandsbg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 " />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            {/* <span className="inline-block bg-white/10 text-white text-sm font-medium px-3 py-1 rounded-md">
              Trusted by homeowners
            </span> */}

            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold leading-tight">
              Thousands of Homeowners Are Choosing a Smarter Way to Sell, With
              Listlly.
            </h2>

            <p className="mt-4 text-lg text-white/90 max-w-xl">
              Listlly connects you directly to the MLS, giving your property
              nationwide exposure and full control at a fraction of the cost.{" "}
              <br />
              Listlly makes professional home selling simple, affordable, and
              transparent no middlemen, no hidden fees.
            </p>

            {/* <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition"
              >
                Get started
              </a>

              <a
                href="#"
                className="inline-block text-white/90 px-4 py-3 rounded-lg"
              >
                Learn how it works
              </a>
            </div> */}
          </div>
        </div>

        <div className="mt-52 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/95 rounded-xl p-6 shadow-md text-center">
            <div className="flex items-center justify-center mb-3">
              <img src={icon1} alt="homes" className="h-9 w-9 object-contain" />
            </div>
            <div className="text-2xl md:text-3xl font-extrabold text-gray-900">
              40,000+
            </div>
            <div className="text-sm text-gray-600 mt-1">Home for Sale</div>
          </div>

          <div className="bg-white/95 rounded-xl p-6 shadow-md text-center">
            <div className="flex items-center justify-center mb-3">
              <img
                src={icon2}
                alt="savings"
                className="h-9 w-9 object-contain"
              />
            </div>
            <div className="text-2xl md:text-3xl font-extrabold text-gray-900">
              20,000+
            </div>
            <div className="text-sm text-gray-600 mt-1">
              Save Thousands in Commission
            </div>
          </div>

          <div className="bg-white/95 rounded-xl p-6 shadow-md text-center">
            <div className="flex items-center justify-center mb-3">
              <img
                src={icon3}
                alt="control"
                className="h-9 w-9 object-contain"
              />
            </div>
            <div className="text-2xl md:text-3xl font-extrabold text-gray-900">
              9,500+
            </div>
            <div className="text-sm text-gray-600 mt-1">
              Full Control, No Middlemen
            </div>
          </div>

          <div className="bg-white/95 rounded-xl p-6 shadow-md text-center">
            <div className="flex items-center justify-center mb-3">
              <img src={icon4} alt="mls" className="h-9 w-9 object-contain" />
            </div>
            <div className="text-2xl md:text-3xl font-extrabold text-gray-900">
              2.4 million
            </div>
            <div className="text-sm text-gray-600 mt-1">
              Join one of the largest active MLS networks
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Thousandsofhomeowner;
