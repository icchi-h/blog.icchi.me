import React from 'react';
import { Link } from 'gatsby';
import 'katex/dist/katex.min.css';

import config from '../../config/blog-config';
import Title from '../title';
import SNSShare from '../sns-share';
import PostMetaInfo from '../post-meta-info';
import Seo from '../seo';
import Iframely from '../iframely';
import ScrollSyncToc from '../toc/scroll-sync-toc';
import Image from '../image';
import Paging from '../paging';
import styles from './index.module.scss';

class Post extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  render() {
    const {
      fields,
      headings,
      html,
      pageContext: { previous, next, slug, relatedPosts, latestPosts },
      siteTitle,
    } = this.props;

    const postUrl = `${config.blogUrl}${slug}`;

    return (
      <article>
        <Title postTitle={fields.title} />
        <Iframely />
        <Seo
          isRoot={false}
          title={`${fields.title} | ${siteTitle}`}
          description={fields.excerpt}
          postUrl={postUrl}
          postDate={fields.date}
          largeImage={fields.thumbnail}
        />

        <div className={styles.header}>
          <div className={styles.header__inner}>
            <div className={styles.header__inner__content}>
              <h4 className={styles.blog_title}>
                <Link className={styles.blog_title__link} to={'/'}>
                  <i className={styles.blog_title__icon} />
                  {config.blogTitle}
                </Link>
              </h4>

              <a href={postUrl} rel="current" className={styles.post_title}>
                <h1>{fields.title}</h1>
              </a>

              <PostMetaInfo
                category={fields.category}
                tags={fields.tags}
                date={fields.date}
                color={`#fff`}
              />
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.post}>
            {/* <div className={styles.post_thumbnail}>{thumbnail}</div> */}
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <div className={styles.toc}>
            <ScrollSyncToc headings={headings} />
          </div>
          <div className={styles.sns_share}>
            <SNSShare
              title={fields.title}
              link={postUrl}
              twitterUserName={config.blogAuthorTwitterUserName}
            />
          </div>
          <div className={styles.paging}>
            <hr />
            <Paging
              previous={previous}
              next={next}
              relatedPosts={relatedPosts}
              latestPosts={latestPosts}
            />
          </div>
        </div>
      </article>
    );
  }
}

export default Post;
