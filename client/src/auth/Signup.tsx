import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignupInputState, userSignupSchema } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail, Phone, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const loading = false;
const Signup = () => {
  const [input, setInput] = useState<SignupInputState>({
    fullname: "",
    email: "",
    password: "",
    contact: "",
  });

  const [errors, setErrors] = useState<Partial<SignupInputState>>({});
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    // Form validation check.
    const result = userSignupSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<SignupInputState>);
      return;
    }
    // Login API implementation starts from here.
    console.log(input);
  };

  return (
    <div className="flex items-center justify-center ">
      <form
        onSubmit={loginSubmitHandler}
        className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4 w-screen"
      >
        <div className="mb-8">
          <h1 className="font-bold text-2xl font-sans">Delicious Food</h1>
        </div>
        {errors && (
          <span className="text-xs text-red-500">{errors.fullname}</span>
        )}
        <div className="relative mb-4">
          <User className="absolute inset-y-2 left-3 text-gray-500 pointer-events-none" />
          <Input
            type="text"
            placeholder="Enter Full Name"
            value={input.fullname}
            name="fullname"
            onChange={changeEventHandler}
            className="pl-12 focus-visible:ring-1"
          />
        </div>
        {errors && <span className="text-xs text-red-500">{errors.email}</span>}
        <div className="relative mb-4">
          <Mail className="absolute inset-y-2 left-3 text-gray-500 pointer-events-none" />
          <Input
            type="email"
            placeholder="Enter your e-mail"
            value={input.email}
            name="email"
            onChange={changeEventHandler}
            className="pl-12 focus-visible:ring-1"
          />
        </div>
        {errors && (
          <span className="text-xs text-red-500">{errors.password}</span>
        )}
        <div className="relative mb-4">
          <LockKeyhole className="absolute inset-y-2 left-3 text-gray-500 pointer-events-none" />
          <Input
            type="password"
            placeholder="Enter your password"
            value={input.password}
            name="password"
            onChange={changeEventHandler}
            className="pl-12 focus-visible:ring-1"
          />
        </div>
        {errors && (
          <span className="text-xs text-red-500">{errors.contact}</span>
        )}
        <div className="relative mb-4">
          <Phone className="absolute inset-y-2 left-3 text-gray-500 pointer-events-none" />
          <Input
            type="text"
            placeholder="Enter Contact number"
            value={input.contact}
            name="contact"
            onChange={changeEventHandler}
            className="pl-12 focus-visible:ring-1"
          />
        </div>
        <div className="mb-5">
          {loading ? (
            <Button disabled className="w-full bg-orange hover:bg-hoverOrange">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-orange hover:bg-hoverOrange"
            >
              Signup
            </Button>
          )}
        </div>
        <Separator />
        <p className="mt-3">
          Already have an account? {""}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Signup;
