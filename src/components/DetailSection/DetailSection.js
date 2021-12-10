import * as React from 'react';
import './style.scss';

const DetailSection = () => {
  return (
    <section className="detail">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className='detail__desc'>
              자세한 내용은 <a href="#" className='detail__link'>여기서</a> 확인해보세요.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default DetailSection;
