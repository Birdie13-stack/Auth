import { NavLink } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1 className="oopsie">Oopsie! 😬😬😬</h1>
      <h2 className="lost">
        You seem to have tried to visit a link that doesn't exist on our
        website. Worry not, we've got you covered. Here are some helpful links
        you should consider:
      </h2>

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
    </main>
  );
}

// function App() {
//     return (
//         <Routes>
//         <Route path='*' element={<NotFound />}/>
//         </Routes>
//     )
// }
