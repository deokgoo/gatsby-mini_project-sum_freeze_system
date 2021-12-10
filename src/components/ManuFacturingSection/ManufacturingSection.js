import * as React from 'react';
import manufacturing1 from '../../images/manufacturing1.png';
import manufacturing2 from '../../images/manufacturing2.png';
import manufacturing3 from '../../images/manufacturing3.png';
import manufacturing4 from '../../images/manufacturing4.png';
import './style.scss';

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
          <div className="col-12 col-md-6">
            <div className="img__wrapper">
              <div className="img__wrapper-box">
                <img src={manufacturing1} alt="" className="manufacturing__img" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="img__wrapper">
              <div className="img__wrapper-box">
                <img src={manufacturing2} alt="" className="manufacturing__img" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="img__wrapper">
              <div className="img__wrapper-box">
                <img src={manufacturing3} alt="" className="manufacturing__img" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="img__wrapper">
              <div className="img__wrapper-box">
                <img src={manufacturing4} alt="" className="manufacturing__img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;
