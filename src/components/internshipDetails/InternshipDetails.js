import React from "react";
import "./InternshipDetails.css";
class InternshipDetails extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="brief-info shadow-sm m-2 mx-auto">
          <div className="internship-title lead text-left p-2">
            Internia
          </div>
        </div>
        <div className="detailed-info shadow-sm m-2 mx-auto" />
      </div>
    );
  }
}
export default InternshipDetails;
