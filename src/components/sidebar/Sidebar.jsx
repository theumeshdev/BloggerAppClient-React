import { Link } from "react-router-dom";
import "./sidebar.css";
import ImagePath from '../../images/mu.jpg'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={ImagePath}
          alt=""
        />
        <p>
        <h6>@auther&nbsp;- UMESH (Entrepreneur) </h6> <br/>
        Er.Umesh Kumar - Java Full Stack Developer
        (Spring Boot Reactive Programmer)<br/><br/>
        <p>
        <p><a href="https://www.linkedin.com/in/er-umesh-kumar-%F0%9F%87%AE%F0%9F%87%B3-spring-boot-reactive-programmer-26a7ba173/">Linkd-In</a> &nbsp;&nbsp;
         <a href="https://github.com/theumeshdev/bloggerApplication-SpringBoot">github</a></p>
         <h5>Qualification -: </h5> <br/> M.C.A    form AKTU.<br/>
                         B.C.A   from MCU  <br/>
                         Java Certified Developer<br/>
                         CTI-P301 Certified Crestron IoT Programmer.<br/>
        

        </p>
        <href > </href>
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
