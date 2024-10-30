import { useEffect } from "react"
import { Wrapper } from "../components/Wrapper/Wrapper"

export const CookiePolicyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
  return (
    <Wrapper type="cookiePolicy">
        <header>
            <h2>Sunshine Coffee Cookie Policy</h2>
        </header>
        <p>At Sunshine Coffee, we strive to provide a personalized, user-friendly experience on our website. This Cookie Policy explains how we use cookies and similar tracking technologies to recognize you when you visit our website. It details what cookies are, why we use them, and how you can control your cookie preferences.</p>
        <div>
            <header>
                <h4>What Are Cookies?</h4>
            </header>
            <p>Cookies are small text files stored on your device (computer, smartphone, tablet) when you visit a website. They allow the website to remember your actions and preferences, such as login details and display settings, over a period of time, so you don’t have to re-enter them whenever you come back or browse from one page to another.</p>
        </div>
        <div>
            <header>
                <h4>Why Do We Use Cookies?</h4>
            </header>
            <p>
            We use cookies to:

Enhance Site Performance: To ensure that our Site functions correctly and is accessible to all users.
Personalize Your Experience: To remember your preferences, such as language and region, and to tailor content to your interests.
Analyze Usage and Improve Our Services: To monitor Site traffic, understand user interactions, and enhance the user experience.
Support Marketing Efforts: To display targeted ads that may be relevant to you based on your browsing activity.
            </p>
        </div>
        <div>
            <header>
                <h4>Types of Cookies We Use</h4>
            </header>
            <p>
We categorize our cookies as follows:

Essential Cookies: Necessary for the Site to function. These cookies cannot be disabled as they enable core functionalities like site navigation and access to secure areas.

Functional Cookies: Help remember your preferences and customize your experience on our Site. Disabling these cookies may result in some loss of functionality.

Analytical Cookies: Used to analyze Site performance, track user behavior, and help us understand how users interact with our Site. This information helps us improve our products and services.

Marketing Cookies: These cookies help deliver personalized advertising by tracking your online activity. We may use this data to present you with offers and promotions that align with your interests.</p>
        </div>
    </Wrapper>
  )
}