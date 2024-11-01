import { useState } from "react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { Button } from "../Button/Button"
import s from "./LoginForm.module.scss"

export const LoginForm = ({headerText, formRoute, link, linkText, user, setUser}) => {
    //Bruger react hook form til at validere inputs
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm({
        mode: "all",
      });

    const handleFormSubmit = async (data) => {
        console.log(data);

        const {email, password} = {...data};

        const formData = {email: email, password: password}

        const res = await fetch(`http://localhost:8081/${formRoute}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        if (res.ok) {
            // console.log(res);
        }
        else {
            console.error("Failed to login");
            
        }
        const userData = await res.json();
        console.log(userData);
        setUser(userData);
        console.log(user);
    }
  return (
    <>
        <h2>{headerText}</h2>
        <form onSubmit={handleSubmit(handleFormSubmit)} className={s.formStyling}>
            <label htmlFor="email">Email</label>
            <input
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        message: "Invalid email format",
                    },
                    minLength: {
                        value: 5,
                        message: "Email must be at least 5 characters",
                    },
                })}
            type="email" name="email" 
            />
            {errors.email ? <span>{errors.email.message}</span> : null}
            <label htmlFor="password">Password</label>
            <input
                {...register("password", {
                    required: "Password is required",
                    pattern: {
                        message: "Invalid password format",
                    },
                    minLength: {
                        value: 4,
                        message: "Password must be at least 4 characters",
                    },
                })} 
                type="password" name="password"
                />
                {errors.password ? <span>{errors.password.message}</span> : null}
            <span>
                <Link to={link}>
                    <Button text={linkText}/>
                </Link>
                <input type="submit" value="Submit" />
            </span>
        </form>
    </>
  )
}