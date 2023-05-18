import { Link } from "react-router-dom";
import Input from "../components/Input";
import { ChangeEvent } from "react";
import Button from "../components/Button";

export default function Register() {
  return (
    <div className="h-screen flex items-center">
      <form
        className="mb-6 bg-red-400 p-6 rounded-lg w-96 mx-auto"
        style={{
          background: "#101827",
        }}
      >
        <h2 className="text-center text-white text-3xl font-bold mb-6">
          Register
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
          type={"email"}
          value={"email@gmail.com"}
          label={"email"}
          onChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
        />

        <Input
          id={""}
          type={"password"}
          value={"password"}
          label={"Password"}
          onChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
        />

        <Input
          id={""}
          type={"email"}
          value={"email@gmail.com"}
          label={"email"}
          onChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
        />

        <Input
          id={""}
          type={"email"}
          value={"email@gmail.com"}
          label={"email"}
          onChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
        />

        <Button>Register</Button>
      </form>
    </div>
  );
}
