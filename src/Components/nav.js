import React from 'react';


function Nav() {
    return (
      <div className="Nav">
        <nav>
        {/* <!-- logo --> */}
            <a href="#" class="logo">Cabral Inc</a>
        {/* <!-- menu --> */}
            <ul>
                <li><a href="#" class="active"></a>Home</li>
                <li><a href="#"></a>About</li>
                <li><a href="#"></a>Projects</li>
                <li><a href="#"></a>Testimonials</li>
                <li><a href="#"></a>Contact Us</li>
            </ul>
        </nav>

       </div>
    );
  }
  
  export default Nav;
  