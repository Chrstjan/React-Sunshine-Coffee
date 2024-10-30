import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import s from "./LoginForm.module.scss"
import { useState } from "react"

export const LoginForm = ({headerText, link, linkText}) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const handleFormSubmit = async (e) => {
        console.log("lol");
        
        e.preventDefault();

        const formData = {email: firstname, password: lastname}

        const res = await fetch("http://localhost:8081/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        if (res.ok) {
            console.log(res);
        }
        else {
            console.error("Failed to login");
            
        } 
    }
  return (
    <>
        <h2>{headerText}</h2>
        <form onSubmit={handleFormSubmit} className={s.formStyling}>
            <label htmlFor="firstname">First name</label>
            <input onChange={(e) => setFirstname(e.target.value)} type="text" name="firstname" />
            <label htmlFor="lastname">Last name</label>
            <input onChange={(e) => setLastname(e.target.value)} type="text" name="lastname"/>

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