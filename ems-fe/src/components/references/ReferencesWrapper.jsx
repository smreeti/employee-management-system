import { Link } from "react-router-dom";

export const ReferencePageWrapper = ({ children }) => {
  return (
    <div>
      <Link to="/references" style={{ marginBottom: "10px", display: "inline-block" }}>
        ⬅ Back to References
      </Link>
      {children}
    </div>
  );
};