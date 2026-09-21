import React, { useState } from "react";

function StepTwo({ register, watch, errors, onNext, onBack }) {
  const [showPassword, setShowPassword] = useState(false);
  const email = watch("email");
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const canContinue =
    email &&
    password.length >= 8 &&
    confirmPassword &&
    password === confirmPassword &&
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword;

  return (
    <section className="step-form">
      <h2>Account Details</h2>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter email"
          {...register("email")}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div className="password-field">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            {...register("password")}
          />
          <button
            type="button"
            className="toggle-button"
            onClick={() => setShowPassword((value) => !value)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {errors.password && (
          <p className="error">{errors.password.message}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type={showPassword ? "text" : "password"}
          placeholder="Re-enter password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword.message}</p>
        )}
      </div>

      <div className="navigation-buttons">
        <button type="button" className="secondary-button" onClick={onBack}>
          Back
        </button>
        <button
          type="button"
          className="primary-button"
          disabled={!canContinue}
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default StepTwo;