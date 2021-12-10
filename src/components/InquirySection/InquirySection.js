import * as React from 'react';
import './style.scss';

const InquirySection = () => {
  return (
    <section className="inquiry">
      <div className="container">
        <div className="row flex-column-reverse flex-md-row align-items-md-center">
          <div className="col-12 col-md-5">
            <div className="inquiry__chr"></div>
          </div>
          <div className="col-12 col-md-7">
            <div className="inquiry__groups">
              <h1 className="inquiry__title">문의 사항은</h1>
              <p className="inquiry__desc">아래의 링크를 통해 문의 또는 연락주시면 <br className="d-md-none"/>감사하겠습니다.</p>
              <a href="" target="_blank" className='inquiry__submit'>문의하기</a>
            </div>
            <div className="inquiry__detail-groups">
              <div className="inquiry__contracts">
                <div className="label-box">
                  <h2 className="inquiry__label">문의</h2>
                </div>
                <dl>
                  <dt>사장(류문선)</dt>
                  <dd style={{marginBottom: '32px'}}>
                    <ul>
                      <li>
                        <a href="tel:+8201035626163">010-3562-6163</a>
                      </li>
                      <li>
                        <a href="mailto:rms600300@naver.com" type="email">rms600300@naver.com</a>
                      </li>
                    </ul>
                    
                  </dd>
          
                  <dt>이사(이강원)</dt>
                  <dd style={{marginBottom: '32px'}}>
                    <ul>
                      <li>
                        <a href="tel:+8201038784548">010-3878-4548</a>
                      </li>
                      <li>
                        <a href="mailto:tlsfk3811@naver.com">tlsfk3811@naver.com</a>
                      </li>
                    </ul>
                    
                  </dd>

                  <dt>영업부장(류호영)</dt>
                  <dd>
                    <ul>
                      <li>
                        <a href="tel:+8201088966162">010-8896-6162</a>
                      </li>
                      <li>
                        <a href="mailto:rms6003@naver.com">rms6003@naver.com</a>
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
              <div className="inquiry__fax">
                <div className="label-box">
                  <h2 className="inquiry__label">FAX</h2>
                </div>
                <p>051) 415-6165</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
