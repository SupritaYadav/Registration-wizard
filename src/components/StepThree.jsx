import React from "react";

function StepThree({ formData, onBack }) {
  return (
    <section className="step-form">
      <h2>Review & Submit</h2>

      <div className="review-section">
        <div className="review-row">
          <span>First Name</span>
          <strong>{formData.firstName || "-"}</strong>
        </div>

        <div className="review-row">
          <span>Last Name</span>
          <strong>{formData.lastName || "-"}</strong>
        </div>

        <div className="review-row">
          <span>Date of Birth</span>
          <strong>{formData.dob || "-"}</strong>
        </div>

        <div className="review-row">
          <span>Email</span>
          <strong>{formData.email || "-"}</strong>
        </div>

        <div className="review-row">
          <span>Password</span>
          <strong>{"•".repeat(formData.password ? 8 : 0)}</strong>
        </div>
      </div>

      <div className="navigation-buttons">
        <button type="button" className="secondary-button" onClick={onBack}>
          Back
        </button>

        <button type="submit" className="primary-button">
          Submit
        </button>
      </div>
    </section>
  );
}

export default StepThree;