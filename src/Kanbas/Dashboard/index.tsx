export default function Dashboard() { 
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/autoai.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5678/Home">
              CS5678 Automotive AI
            </a>
            <p className="wd-dashboard-course-title">
              Artificial Intelligence in Cars
            </p>
            <a href="#/Kanbas/Courses/5678/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/autoveh.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/9101/Home">
              CS9101 Autonomous Vehicles
            </a>
            <p className="wd-dashboard-course-title">
              Self-Driving Car Technologies
            </p>
            <a href="#/Kanbas/Courses/9101/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/carhacking.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1121/Home">
              CS1121 Car Hacking
            </a>
            <p className="wd-dashboard-course-title">
              Security in Automotive Systems
            </p>
            <a href="#/Kanbas/Courses/1121/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/teslabot.jpeg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/3141/Home">
              CS3141 Vehicle Diagnostics
            </a>
            <p className="wd-dashboard-course-title">
              Diagnostic Software for Cars
            </p>
            <a href="#/Kanbas/Courses/3141/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/connectedcars.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5161/Home">
              CS5161 Connected Cars
            </a>
            <p className="wd-dashboard-course-title">
              IoT and Networking for Vehicles
            </p>
            <a href="#/Kanbas/Courses/5161/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/telematics.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/7181/Home">
              CS7181 Telematics
            </a>
            <p className="wd-dashboard-course-title">
              Data and Communication in Automotive Systems
            </p>
            <a href="#/Kanbas/Courses/7181/Home"> Go </a>
          </div>
        </div>
      </div>
    </div>
  );
}
