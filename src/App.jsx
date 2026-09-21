import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "./validation";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";

const defaultValues = {
  firstName: "",
  lastName: "",
  dob: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function App() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(defaultValues);

  const {
    register,
    watch,
    setValue,
    getValues,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
    defaultValues,
  });

  const goNext = async (fields) => {
    const valid = await trigger(fields);

    if (valid) {
      setFormData(getValues());
      setStep((current) => current + 1);
    }
  };

  const handleBack = () => {
    setStep((current) => current - 1);
  };

  const onSubmit = (data) => {
    console.log("Registration Data", data);
    setFormData(data);
    setSubmitted(true);
  };

  const progress = `${(step / 3) * 100}%`;

  return (
    <main className="page">
      <div className="app">
        {!submitted ? (
          <>
            <h1>Registration Wizard</h1>

            <div className="progress-container" aria-label={`Step ${step} of 3`}>
              <div className="progress-bar" style={{ width: progress }} />
            </div>

            <p className="step-progress">Step {step} of 3</p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {step === 1 && (
                <StepOne
                  register={register}
                  setValue={setValue}
                  watch={watch}
                  errors={errors}
                  onNext={() => goNext(["firstName", "lastName", "dob"])}
                />
              )}

              {step === 2 && (
                <StepTwo
                  register={register}
                  watch={watch}
                  errors={errors}
                  onNext={() =>
                    goNext(["email", "password", "confirmPassword"])
                  }
                  onBack={handleBack}
                />
              )}

              {step === 3 && (
                <StepThree
                  formData={formData}
                  onBack={handleBack}
                />
              )}
            </form>
          </>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Registration Successful!</h2>
            <p>Your registration has been submitted successfully.</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;