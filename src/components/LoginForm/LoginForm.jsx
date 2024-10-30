import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import s from "./LoginForm.module.scss"
import { useState } from "react"

export const LoginForm = ({headerText, formRoute, link, linkText, user, setUser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = async (e) => {
        console.log("lol");
        
        e.preventDefault();

        const formData = {email: email, password: password}

        const res = await fetch(`http://localhost:8081/${formRoute}`, {
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
        const data = await res.json();
        setUser(data);
        console.log(user);
        
         
    }
  return (
    <>
        <h2>{headerText}</h2>
        <form onSubmit={handleFormSubmit} className={s.formStyling}>
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" />
            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="text" name="password"/>

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