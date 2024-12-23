import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const initialState = {
  userName: "",
  email: "",
  password: "",
};
const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new Account
        </h1>
        <p>
          Already have an account?{" "}
          <Link
            className="font-medium mt-2 text-primary hover:underline ml-2"
            to="/auth/login">
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Register;
