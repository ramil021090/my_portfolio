import React from "react";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <>
      <header>
        <PageNav />
      </header>
      <section>
        <h2>Projects</h2>
        <div>
          <div>
            <div>E-Commerce Website</div>
            <div>
              <h3>Online Store</h3>
              <p>
                A fully responsive e-commerce website with product filtering,
                cart functionality, and checkout process.
              </p>
              <a href="#" class="btn">
                View Project
              </a>
            </div>
          </div>

          <div>
            <div>Task Management App</div>
            <div>
              <h3>Productivity App</h3>
              <p>
                A React-based task management application with drag-and-drop
                functionality and user authentication.
              </p>
              <a href="#" class="btn">
                View Project
              </a>
            </div>
          </div>

          <div>
            <div>Travel Blog</div>
            <div>
              <h3>Travel Website</h3>
              <p>
                A responsive travel blog with dynamic content loading, image
                galleries, and interactive maps.
              </p>
              <a href="#" class="btn">
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
