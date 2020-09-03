import React from "react";
//import { useState } from 'react'
import "./App.css";
import Count from "./Count";
import Contain from "./Contain";

function App() {
  const date = new Date();
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  //const week = { "Sunday": 1000, "Monday": 1000, "Tuesday": 1000, "Wednesday": 1000, "Thursday": 1000, "Friday": 1000, "Saturday": 1000 }

  const n = weekday[date.getDay()];
  const count = 1000;
  const trans = {
    0: "O the Ever-Living, The Ever-Lasting One!",
    1: "O Allah, send blessings on Muhammad(Sallalhu alaihi wa sallam)",
    2: "There is no power nor strength except by Allah",
    3: "I seek forgiveness of Allah the Mighty.",
    4: "All Glory is to Allah and all Praise to Him.",
    5: "Ya ALLAH",
    6: "There is no god but Allah",
  };
  //console.log(count-1);
  const contain = {
    Sunday: " يَا حَيُّ يَا قَيُّوْمُ ",
    Mondday: " ( اَللّٰھُمَّ صَلِّ عَلٰی مُحَمَّدٍ ( صلى الله عليه وسلم",
    Tuesday:
      " لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ ٱلْعَلِيِّ ٱلْعَظِيمِ ",
    Wednesday: " أستغفرلهل عظيم ",
    Thursday: " سبحان الله وبحمده سبحان الله العظيم ",
    Friday: " يَااللّٰهُ ",
    Saturday: " لَا إِلَٰهَ إِلَّا ٱللَّٰ ",
  };

  return (
    <div className="App">
      <div className="app_container">
        <h5 className="Wazifa_title">WAZIFA</h5>
        <h4 className="app_heading">{n}</h4>
      </div>

      <div>
        <Contain Contain={contain[n]} />
    <div>
        <h5 className="translation">
          Translation:
          </h5>  
          <h5 className="app_translation">{trans[date.getDay()]}</h5>
        </div>

        <Count Count={count} />
      </div>

      <div className="app_footer">
        <p>
          Copyright &copy; 2020 All Rights Reserved by
          <strong> Shannq </strong>.
        </p>
      </div>
    </div>
  );
}

export default App;
