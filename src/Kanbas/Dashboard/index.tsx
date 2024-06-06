import React from "react";
import "./Dashboard.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';

const courses = [
  {
    id: 1234,
    title: "CS1234 React JS",
    description: "Full Stack software developer",
    image: "/images/reactjs.jpg",
    alt: "React JS"
  },
  {
    id: 5678,
    title: "CS5678 Automotive AI",
    description: "Artificial Intelligence in Cars",
    image: "/images/autoai.jpg",
    alt: "Automotive AI"
  },
  {
    id: 9101,
    title: "CS9101 Autonomous Vehicles",
    description: "Self-Driving Car Technologies",
    image: "/images/autoveh.jpg",
    alt: "Autonomous Vehicles"
  },
  {
    id: 1121,
    title: "CS1121 Car Hacking",
    description: "Security in Automotive Systems",
    image: "/images/carhacking.jpg",
    alt: "Car Hacking"
  },
  {
    id: 3141,
    title: "CS3141 Vehicle Diagnostics",
    description: "Diagnostic Software for Cars",
    image: "/images/teslabot.jpeg",
    alt: "Vehicle Diagnostics"
  },
  {
    id: 5161,
    title: "CS5161 Connected Cars",
    description: "IoT and Networking for Vehicles",
    image: "/images/connectedcars.jpg",
    alt: "Connected Cars"
  },
  {
    id: 7181,
    title: "CS7181 Telematics",
    description: "Data and Communication in Automotive Systems",
    image: "/images/telematics.jpg",
    alt: "Telematics"
  }
];

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}


const CourseCard: React.FC<CourseCardProps> = ({ id, title, description, image, alt }) => (
  <div className="wd-dashboard-course card">
    <img src={image} className="card-img-top" alt={alt} />
    <div className="card-body">
      <a className="wd-dashboard-course-link"
         href={`#/Kanbas/Courses/${id}/Home`}
         style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
        {title}
      </a>
      <p className="wd-dashboard-course-title card-text">
        {description}
      </p>
      <a href={`#/Kanbas/Courses/${id}/Home`} className="btn btn-primary">Go</a>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <div id="wd-dashboard-courses">
        {courses.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
