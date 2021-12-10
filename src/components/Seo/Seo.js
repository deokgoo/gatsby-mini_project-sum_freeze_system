import * as React from 'react';
import { Helmet } from 'react-helmet';

const siteUrl = 'https://sun-freeze-system.netlify.app';

const Seo = () => {
  const meta = [];
  const lang = 'kr';
  const img = '';
  const title = '태양냉동';
  const description = '태양냉동은 항상 좋은 품질로 보답합니다.';

  return (
    <>
      <Helmet>
        <link rel="canonical" href={`${siteUrl}`} />
      </Helmet>
      <Helmet
        htmlAttributes={{ lang }}
        title={title}
        titleTemplate={title}
        meta={[
          {
            name: `description`,
            content: description,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:image`,
            content: img,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: description,
          }
        ].concat(meta)}
      />
    </>
  )
}

export default Seo