import React from "react";

function Footer() {
  return (
    <div className="w-full flex px-8 py-8 bg-banner justify-center">
      <p className="text-slate-200">
        {new Date().getFullYear()} PolpoEvents - Desarrollado por{" "}
        <a className="font-bold text-white" target="_blank" href="https://polpocr.com" rel="noreferrer">
          Polpo
        </a>
      </p>
    </div>
  );
}

export default Footer;
