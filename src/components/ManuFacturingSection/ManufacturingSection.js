import * as React from 'react';
import manufacturing1 from '../../images/manufacturing1.jpg';
import manufacturing2 from '../../images/manufacturing2.jpg';
import manufacturing3 from '../../images/manufacturing3.jpg';
import manufacturing4 from '../../images/manufacturing4.jpg';
import manufacturing5 from '../../images/manufacturing5.jpg';
import manufacturing6 from '../../images/manufacturing6.jpg';
import manufacturing7 from '../../images/manufacturing7.jpg';
import manufacturing8 from '../../images/manufacturing8.jpg';
import manufacturing9 from '../../images/manufacturing9.jpg';
import manufacturing10 from '../../images/manufacturing10.jpg';
import manufacturing11 from '../../images/manufacturing11.jpg';
import manufacturing12 from '../../images/manufacturing12.jpg';
import manufacturing13 from '../../images/manufacturing13.jpg';
import manufacturing14 from '../../images/manufacturing14.jpg';
import manufacturing15 from '../../images/manufacturing15.jpg';
import manufacturing16 from '../../images/manufacturing16.jpg';
import manufacturing17 from '../../images/manufacturing17.jpg';
import manufacturing18 from '../../images/manufacturing18.jpg';
import './style.scss';
import './rolling.scss';

const ManufacturingSection = () => {
  return (
    <section className="manufacturing">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="manufacturing__title">제조 현장</h1>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div className="rolling_banner">
              <div className="rolling_banner__wrapper1">
                <img src={manufacturing1} alt="manufacturing1" className="rolling_banner__item"/>
                <img src={manufacturing2} alt="manufacturing2" className="rolling_banner__item"/>
                <img src={manufacturing3} alt="manufacturing3" className="rolling_banner__item"/>
                <img src={manufacturing4} alt="manufacturing4" className="rolling_banner__item"/>
                <img src={manufacturing5} alt="manufacturing5" className="rolling_banner__item"/>
                <img src={manufacturing6} alt="manufacturing6" className="rolling_banner__item"/>
                <img src={manufacturing7} alt="manufacturing7" className="rolling_banner__item"/>
                <img src={manufacturing8} alt="manufacturing8" className="rolling_banner__item"/>
              </div>
            </div>
            <div className="rolling_banner">
              <div className="rolling_banner__wrapper2">
                <img src={manufacturing9} alt="manufacturing9" className="rolling_banner__item"/>
                <img src={manufacturing10} alt="manufacturing10" className="rolling_banner__item"/>
                <img src={manufacturing11} alt="manufacturing11" className="rolling_banner__item"/>
                <img src={manufacturing12} alt="manufacturing12" className="rolling_banner__item"/>
                <img src={manufacturing13} alt="manufacturing13" className="rolling_banner__item"/>
                <img src={manufacturing14} alt="manufacturing14" className="rolling_banner__item"/>
                <img src={manufacturing15} alt="manufacturing15" className="rolling_banner__item"/>
                <img src={manufacturing16} alt="manufacturing16" className="rolling_banner__item"/>
                <img src={manufacturing17} alt="manufacturing17" className="rolling_banner__item"/>
                <img src={manufacturing18} alt="manufacturing18" className="rolling_banner__item"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;
