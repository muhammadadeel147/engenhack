import React from 'react';
import './CoursesSection.css';
//import img from "../Assets/1.png"
import img1 from "../Assets/2.png"
import img2 from "../Assets/3.png"
import img3 from "../Assets/4.jpg"
const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: 'Introduction to Mindfulness',
      instructor: 'Dr. Sarah Smith',
      price: '$49',
      imageUrl: img2, // Replace with the actual image URL
    },
    {
        id: 1,
        title: 'Emotional Resilience',
        instructor: 'Dr. Sarah Smith',
        price: '$49',
        imageUrl: img1, // Replace with the actual image URL
      },
      {
        id: 1,
        title: 'Mind-Body Connection',
        instructor: 'Dr. Sarah Smith',
        price: '$49',
        imageUrl: img2, // Replace with the actual image URL
      },
    {
      id: 2,
      title: 'Coping with Stress',
      instructor: 'Prof. John Doe',
      price: '$59',
      imageUrl:img3, // Replace with the actual image URL
    },
    {
        id: 3,
        title: 'Positive Psychology',
        instructor: 'Dr. Emily Johnson',
        price: '$69',
        imageUrl:img3,
      },
      {
        id: 4,
        title: 'Mental Health First Aid',
        instructor: 'Dr. Michael Brown',
        price: '$79',
        imageUrl:img3,
      },
    // Add more courses with image URLs
  ];

  return (
    <section className="courses-section">
      <div className="container">
        <h2 className="section-title">Featured Courses</h2>
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.imageUrl} alt={course.title} />
              </div>
              <div className="course-details">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-instructor">Instructor: {course.instructor}</p>
                <p className="course-price">Price: {course.price}</p>
                <button className="enroll-button">Enroll</button>
                {/* Additional course details can be added here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
