import React from "react";

const Footer = () => {
  return (
    <section className="mx-auto mt-20 w-full px-8 mb-30">
      <div className="mx-auto max-w-5xl">
        <p className="desc-txt text-xs font-semibold">
          <sup>1</sup> Price reflects monthly subscription, subject to terms and
          conditions. Price and feature availability subject to change.
          <br />
          <br />
          <sup>2</sup> Price listed does not include Destination and Order Fees,
          taxes and other fees. Subject to change. The Model Y L Premium price
          including the Destination and Order fees but excluding taxes and other
          fees is $63,630.
        </p>
      </div>

      <ul className="mt-8 flex flex-wrap items-center justify-center gap-4 text-center text-xs font-bold desc-txt">
        <li>
          <a href="#">Tesla © 2026</a>
        </li>
        <li>
          <a href="#">Privacy & Legal</a>
        </li>
        <li>
          <a href="#">Vehicle Recalls</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Get Updates</a>
        </li>
        <li>
          <a href="#">Locations</a>
        </li>
        <li>
          <a href="#">Learn</a>
        </li>
      </ul>
      
    </section>
  );
};

export default Footer;