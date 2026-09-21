import React from "react";
function StepOne({ register, setValue, watch, errors, onNext }) {
  const dob = watch("dob");

  return (
    <section className="step-form">
      <h2>Personal Information</h2>

      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          placeholder="Enter first name"
          {...register("firstName")}
        />
        {errors.firstName && (
          <p className="error">{errors.firstName.message}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          placeholder="Enter last name"
          {...register("lastName")}
        />
        {errors.lastName && (
          <p className="error">{errors.lastName.message}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="dob">Date of Birth</label>
        <input
          id="dob"
          type="date"
          value={dob || ""}
          onChange={(event) => setValue("dob", event.target.value, {
            shouldValidate: true,
            shouldDirty: true,
          })}
        />
        {errors.dob && <p className="error">{errors.dob.message}</p>}
      </div>

      <div className="navigation-buttons next-only">
        <button
          type="button"
          className="primary-button"
          disabled={
            !watch("firstName") ||
            !watch("lastName") ||
            !watch("dob") ||
            Boolean(errors.firstName) ||
            Boolean(errors.lastName) ||
            Boolean(errors.dob)
          }
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default StepOne;