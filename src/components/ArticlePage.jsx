import React from 'react';
import './ArticlePage.css'; // Import your CSS file for styling

const ArticlePage = () => {
  const articleContent = {
    title: 'Understanding Stress and How to Manage It',
    author: 'Dr. Sarah Smith',
    date: 'September 15, 2023',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt,
      enim vel suscipit rhoncus, justo lectus egestas diam, at consectetur sapien
      metus vel justo. Sed at felis ante. Nulla vehicula urna sed tortor pharetra,
      eu tristique justo facilisis. Phasellus iaculis, est in consequat fringilla,
      risus libero eleifend velit, nec scelerisque arcu libero ac nunc. Ut
      interdum leo sed quam semper, id tristique nisl dictum. Donec feugiat nisl
      nec nisi cursus, eu vestibulum justo luctus.

      Integer euismod, enim non cursus tincidunt, nisl justo posuere nulla, id
      aliquam tellus tellus et justo. In vehicula, elit eu tincidunt bibendum,
      nisi odio posuere lorem, at dignissim est tortor a odio. In ac euismod eros.
      Fusce aliquam, sapien nec scelerisque malesuada, mi massa efficitur nibh,
      nec sollicitudin metus nunc eu metus. Integer eu luctus elit.

      // Continue with the article content...
    `,
  };

  return (
    <div className="article-page">
      <div className="container">
        <article className="article">
          <header className="article-header">
            <h1 className="article-title">{articleContent.title}</h1>
            <p className="article-meta">
              By {articleContent.author} | {articleContent.date}
            </p>
          </header>
          <div className="article-content">
            {articleContent.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticlePage;
