import React from "react";
import event from "../../assets/event.jpg";

import Footer from "../../components/Footer";
import Header2 from "../../components/Header/Header";

function HomeAdmin() {
  return (
    <>
      <Header2 />
      <div>
        <div className="bg-home-banner min-h-[450px] bg-center bg-cover bg-no-repeat px-8 md:px-8 xl:px-40 py-40 flex flex-wrap items-center">
          <h1 className="w-full text-white text-7xl mb-4">
            Bienvenido a PolpoEvents
          </h1>
          <button className="bg-primary rounded-lg text-white py-3 px-5">
            Explorá los eventos
          </button>
        </div>
        <div className="px-12 md:px-12 xl:px-48 py-12">
          <div className="text-3xl font-bold mb-12">
            Popular en <span className="text-blue-700">San José</span>
          </div>
          <div className="flex flex-wrap sm:gap-4 lg:gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
              return (
                <div className="flex flex-wrap flex-[0_0_calc(100%)] mb-4 sm:flex-[0_0_calc(50%-1rem)] md:flex-[0_0_calc(33.33333%-1rem)] lg:mb-0 lg:flex-[0_0_calc(25%-2rem)] bg-white cursor-pointer">
                  <img className="w-full" src={event} alt="Event banner" />
                  <div className="p-4">
                    <p className="font-bold mb-4">Experiencia de Fe 3:30 p.m.</p>
                    <p className="text-primary mb-4">
                      Dom, 30 de Enero 3:30 p.m.
                    </p>
                    <p>Visión de Impacto - San José</p>
                    <p className="mb-4">Gratis</p>
                    <p className="mb-4">Visión de Impacto</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomeAdmin;
