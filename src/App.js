import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AnimatedRoutes, RouteTransition } from "./AnimatedRoutes";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <h1 className='fake-logo'>Example title</h1>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
          </nav>
        </header>

        <AnimatedRoutes>
          <RouteTransition path='/about'>
            <div className='layout'>
              <h3>Who we are</h3>
            </div>
          </RouteTransition>
          <RouteTransition path='/contact'>
            <div className='layout'>
              <h3>Positive Contact!</h3>
            </div>
          </RouteTransition>
          <RouteTransition path='/'>
            <div className='layout'>
              <h3>Blog Posts</h3>
              {posts.map((post) => (
                <div className='card' key={post}>
                  <h4>Post Number one</h4>
                  <p>this is inside the card</p>
                </div>
              ))}
            </div>
          </RouteTransition>
        </AnimatedRoutes>
      </div>
    </Router>
  );
}

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];
