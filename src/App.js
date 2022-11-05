import { NavLink, Route, Routes } from "react-router-dom";
import img from "./cookimg.jpg";
import img1 from "./okra-1.jpeg";
import {ErrorBoundary} from 'react-error-boundary'
import "./App.css";
import NotFound from "./NotFound.js"

function ErrorFallback({error}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>{error.message}</pre>
    </div>
  )
  }

function Home() {
  return (
    <main className="main-container">
      <section className="nav">
        <NavLink className="navigate" to="/">
          Home
        </NavLink>

        <NavLink className="navigate" to="/recipes">
          Recipes
        </NavLink>

        <NavLink className="navigate" to="/signup">
          Sign Up
        </NavLink>

        <NavLink className="navigate" to="/signin">
          Log in
        </NavLink>

        {/* <hr /> */}
      </section>
      <img src={img} className="main-img" alt="a woman cooking"/>
      <h1>Foodies' Queen</h1>

      <p className="welcome">
        Hello and welcome fellow kitchen lovers, if you're ready to work some
        kitchen magic, then head over to my recipes section and let's get our
        spoons and knives movin'!
      </p>
    </main>
  );
}

function Recipes() {
  return (
    <main className="recipe-cont">
      <section className="nav">
        <NavLink className="navigate" to="/">
          Home
        </NavLink>

        <NavLink className="navigate" to="/recipes">
          Recipes
        </NavLink>

        <NavLink className="navigate" to="/signup">
          Sign Up
        </NavLink>

        <NavLink className="navigate" to="/signin">
          Log in
        </NavLink>
      </section>
      <h1>Try out some of our recipes</h1>
      <p className="recipe-desc">
        {" "}
        You can try out some of our recipes here. They are tested and trusted by
        chefs nationwide, so feel free to use them to work your next piece of
        magic! 🥰🥰🥰
      </p>
      <p className="ps">
        P.S : We release a new recipe everday, so you can sign up to our food
        blog, so you can get notifications when they are posted and sign up to
        our weekly newsletter to get random food blogs and posts.
      </p>

      <div className="nav-box">
        <img src={img1} className="rec-img " alt="okra soup "/>
        <NavLink to="/recipes/okra" className="okra-nav">
          Okra Soup
        </NavLink>
      </div>
    </main>
  );
}

function SignUp() {
  return (
    <main className="sign-up">
      <section className="nav">
        <NavLink className="navigate" to="/">
          Home
        </NavLink>

        <NavLink className="navigate" to="/recipes">
          Recipes
        </NavLink>

        <NavLink className="navigate" to="/signup">
          Sign Up
        </NavLink>

        <NavLink className="navigate" to="/signin">
          Log in
        </NavLink>
      </section>
      <h1>
        If you'd like to receive notifications when we release a new recipe and get free access to recipes from world-class chefs,
        fill in the form below
      </h1>

      <form className="sign-form">
        <label>
          Full Name: 
          <br />
          <input type="text" name="name" required />
         </label> 
        <br />

        <label>
          Email:
          <br />
          <input type="email" name="email" required />
        </label>
        <br />

        <label>
          Password:
          <br />
          <input type="password" name="password" required />
        </label>

        <br />

        <label>
          Confirm Password:
          <br />
          <input type="password" name="password" required />
        </label>
        <br />

        <button className="sign-up-btn">Sign Up</button>
      </form>

      <h1>Or click the link below to sign up to our weekly newsletter</h1>

      <NavLink className="sign-up-btn" to="/signup/news">
        Newsletter
      </NavLink>
    </main>
  );
}

function Newsletter() {
  return (
    <section >
      <h1>Weekly Newsletter</h1>

      <form>
        <label>
          <input type="email" name="email" />
        </label>
      </form>
    </section>
  );
}

function SignIn() {
  return (
    <main className="sign-in">
      <section className="nav">
        <NavLink className="navigate" to="/">
          Home
        </NavLink>

        <NavLink className="navigate" to="/recipes">
          Recipes
        </NavLink>

        <NavLink className="navigate" to="/signup">
          Sign Up
        </NavLink>

        <NavLink className="navigate" to="/signin">
          Log in
        </NavLink>
      </section>
      <h1>
        {" "}
        If you've previously signed up to our food blog and/or our newsletter,
        login here
      </h1>

      <form className="signin">
        <label>
          Email:
          <br />
          <input type="email" name="email" required />
        </label>
        <br />

        <label>
          Password:
          <br />
          <input type="password" name="password" required />
        </label>

        <br />
        <button>Sign In</button>
        <p>Or sign in with: </p>
      </form>

      <h1>
        Don't have an account yet? Create one{" "}
        <NavLink to="/signup" className="inline">
          here
        </NavLink>
      </h1>
    </main>
  );
}



function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />}>
          <Route path="news" element={<Newsletter />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    </ErrorBoundary>
  );
}

export default App;
