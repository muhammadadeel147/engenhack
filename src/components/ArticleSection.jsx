import React from 'react';
import './ArticleSection.css'; // Import your CSS file for styling

const ArticleSection = () => {
  const articles = [
    {
      id: 1,
      title: 'Understanding Stress and How to Manage It',
      author: 'Dr. Sarah Smith',
      date: 'September 15, 2023',
       // Replace with the actual image URL
    },
    {
      id: 2,
      title: 'The Importance of Self-Care for Student Mental Health',
      author: 'Prof. John Doe',
      date: 'September 10, 2023',
     // Replace with the actual image URL
    },
    {
      id: 3,
      title: 'Emotional Resilience',
      author: 'Prof. John Doe',
      date: 'September 10, 2023', // Replace with the actual image URL
    },
    // Add more articles with image URLs
  ];

  return (
    <section className="article-section">
      <div className="container">
        <h2 className="section-title">Featured Articles</h2>
        <div className="article-grid">
          {articles.map((article) => (
            <div key={article.id} className="article-card">
           
              <div className="article-details">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-author">By {article.author}</p>
                <p className="article-date">{article.date}</p>
                <button className="read-more-button">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
