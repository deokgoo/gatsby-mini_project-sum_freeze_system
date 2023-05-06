import * as React from 'react';
import patent from '../../images/patent.jpg';
import registration1 from '../../images/registration1.jpg';
import registration2 from '../../images/registration2.jpg';
import registration3 from '../../images/registration3.jpg';
import './style.scss';

const PatentSection = () => {
  return (
    <section className="patent">
      <div className="container">
        <div className="row">
          <div className="col-12">
          <h1 className="patent__title">특허 및 제조 자격</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-3">
            <img src={patent} alt="관련 특허" className="patent__photo" />
          </div>
          <div className="col-12 col-md-3">
            <img src={registration1} alt="제조 자격" className="patent__photo" />
          </div>
          <div className="col-12 col-md-3">
            <img src={registration2} alt="제조 자격" className="patent__photo" />
          </div>
          <div className="col-12 col-md-3">
            <img src={registration3} alt="제조 자격" className="patent__photo" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="patent__desc">
              냉동설비에 많은 노하우를 가지고 있으며 특허를 보유하고 있습니다.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default PatentSection;
