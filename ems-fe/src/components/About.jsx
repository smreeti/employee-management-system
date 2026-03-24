const About = () => {
    const features = [
        "Add, update, and delete employees.",
        "Organize employees by departments and projects.",
        "Search and filter employees for easy access.",
        "Maintain a clear record of salaries and department assignments.",
        "Use JWT-based authentication and Spring Security for secure endpoints.",
        "Enable CORS configuration for cross-origin requests.",
        "Implement Redis caching to improve performance of frequently accessed data.",
        "Practice modern React concepts like useState, useReducer, useCallback, useMemo, useContext, and Redux.",
    ];

    const techStack = ["React (Front-end)", "Spring Boot (Back-end)", "MySQL (Database)", "JWT Authentication", "Spring Security", "Redis Caching", "REST APIs", "Exception Handling"];

    return (
        <div className="about-page">
            <h2>About Employee Management System (EMS)</h2>

            <p>
                The <strong>Employee Management System</strong> is a full-stack web application designed
                to streamline employee administration within an organization. It focuses on efficiency, security,
                and performance.
            </p>

            <h3>Key Features:</h3>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>

            <h3>Tech Stack & Highlights:</h3>
            <ul>
                {techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>

            <p>
                This project demonstrates a robust full-stack development approach using <strong>React </strong>
                on the front-end and <strong>Spring Boot</strong> on the back-end. It includes modern best practices
                such as reusable components, secure authentication, efficient caching, and proper CORS configuration.
            </p>
        </div>
    );
};

export default About;