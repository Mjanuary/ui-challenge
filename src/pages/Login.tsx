import { Link } from "react-router-dom";
import Input from "../components/Input";
import { ChangeEvent } from "react";
import Button from "../components/Button";

export default function Login() {
  return (
    <div className="h-screen flex items-center">
      <form
        className="mb-6 bg-red-400 p-6 rounded-lg w-96 mx-auto"
        style={{
          background: "#101827",
        }}
      >
        <h2 className="text-center text-white text-3xl font-bold mb-6">
          Login
        </h2>
        <div className="mb-4">
          <Input
            id={""}
            type={"email"}
            value={"email@gmail.com"}
            label={"email"}
            onChange={function (e: ChangeEvent<HTMLInputElement>): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
        <Input
          id={""}
          type={"password"}
          value={"password"}
          label={"Password"}
          onChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
        />
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>

        <Button>Login</Button>
      </form>
    </div>
  );
}
