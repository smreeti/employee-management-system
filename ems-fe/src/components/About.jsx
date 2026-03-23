 const About = () => {
    return (
        <div className="about-page">
            <h2>About Employee Management System</h2>
            
            <p>
                The <strong>Employee Management System</strong> (EMS) is a web application 
                designed to simplify employee administration within an organization. 
                It allows users to:
            </p>
            
            <ul>
                <li>Add, update, and delete employees.</li>
                <li>Organize employees by departments and projects.</li>
                <li>Search and filter employees for easy access.</li>
                <li>Maintain a clear record of salaries and department assignments.</li>
                <li>Practice modern React concepts like <em>useState, useReducer, useCallback, useMemo, useContext</em> and <em>Redux</em>.</li>
            </ul>
            
            <p>
                This project is built using <strong>React</strong> for the front-end and 
                <strong> Spring Boot</strong> for the back-end, demonstrating full-stack 
                development with clean component architecture and reusable code.
            </p>
        </div>
    );
};

export default About;