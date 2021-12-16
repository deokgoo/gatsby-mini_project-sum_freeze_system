import * as React from 'react';
import logo from '../../images/logo.png';
import './style.scss';

const IntroSection = () => {
  const descList = [
    '식품냉각용 모듈형 열교환기',
    '급속동결',
    '냉풍건조기',
    '제관설비',
    '냉동 냉장',
    '콘닥트(동결)',
    '오버홀',
  ];
  
  return (
    <section className="intro">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="intro__logo-wrapper">
              <img className="intro__logo" src={logo} alt="logo" />
              <h1 className="intro__title">태양냉동</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="intro__desc">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className='intro__desc-items'>
                {descList.map(item => <li className="intro__desc-item" key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
