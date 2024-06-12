export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5">
          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" className="card-img-top" alt="React JS" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <img src="/images/autoai.jpg" className="card-img-top" alt="Automotive AI" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5678/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS5678 Automotive AI
                </a>
                <p className="wd-dashboard-course-title">
                  Artificial Intelligence in Cars
                </p>
                <a href="#/Kanbas/Courses/5678/Home" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <img src="/images/autoveh.jpg" className="card-img-top" alt="Autonomous Vehicles" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/9101/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS9101 Autonomous Vehicles
                </a>
                <p className="wd-dashboard-course-title">
                  Self-Driving Car Technologies
                </p>
                <a href="#/Kanbas/Courses/9101/Home" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <img src="/images/carhacking.jpg" className="card-img-top" alt="Car Hacking" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1121/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS1121 Car Hacking
                </a>
                <p className="wd-dashboard-course-title">
                  Security in Automotive Systems
                </p>
                <a href="#/Kanbas/Courses/1121/Home" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <img src="/images/teslabot.jpeg" className="card-img-top" alt="Vehicle Diagnostics" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/3141/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS3141 Vehicle Diagnostics
                </a>
                <p className="wd-dashboard-course-title">
                  Diagnostic Software for Cars
                </p>
                <a href="#/Kanbas/Courses/3141/Home" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <img src="/images/connectedcars.jpg" className="card-img-top" alt="Connected Cars" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5161/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS5161 Connected Cars
                </a>
                <p className="wd-dashboard-course-title">
                  IoT and Networking for Vehicles
                </p>
                <a href="#/Kanbas/Courses/5161/Home" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px" }}>
            <div className="card">
              <img src="/images/telematics.jpg" className="card-img-top" alt="Telematics" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/7181/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS7181 Telematics
                </a>
                <p className="wd-dashboard-course-title">
                  Data and Communication in Automotive Systems
                </p>
                <a href="#/Kanbas/Courses/7181/Home" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
