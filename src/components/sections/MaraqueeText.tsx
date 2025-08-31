"use client";

import React from "react";
import CurvedLoop from "../bits/TextAnimations/CurvedLoop/CurvedLoop";

const MaraqueeText = () => {
  return (
    <div className="relative lg:py-20 bottom-0 ">
      <div className="w-full top-0 h-auto relative lg:absolute lg:top-[-200px] ">
        <div className="">
          <CurvedLoop
            marqueeText="Senior Designer ✦ 5 Years of Experience ✦ Over 100 Customers ✦"
            speed={1}
            curveAmount={150}
            direction="left"
            interactive={false}
            className="fill-muted-foreground/10 text-7xl "
          />
        </div>
        <CurvedLoop
          marqueeText="Logo Design ✦ Website Design ✦ Brand Design ✦"
          speed={1}
          curveAmount={50}
          direction="right"
          interactive={false}
          className="fill-muted-foreground/10 text-7xl"
        />
      </div>
    </div>
  );
};

export default MaraqueeText;
