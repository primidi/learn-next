"use client";

import React, { useRef } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email({
    message: "Must be a valid email address",
  }),
  password: z
    .string()
    .min(8, { message: "Must be at least 8 characters long" }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data: LoginSchema) => {
    alert(JSON.stringify(data));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-80 flex flex-col gap-y-6"
    >
      <h1 className="font-bold text-3xl">Login</h1>
      <label htmlFor="email" className="text-base flex flex-col gap-y-4">
        Email
        <Input
          type="email"
          id="email"
          placeholder="Your Email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500">{errors.email?.message}</p>
        )}
      </label>
      <label htmlFor="password" className="text-base flex flex-col gap-y-4">
        Password
        <Input
          type="password"
          id="password"
          placeholder="Your Password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password?.message}</p>
        )}
      </label>
      <Button type="submit">Login</Button>
    </form>
  );
}
