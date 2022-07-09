import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
          Are you undergraduate..??
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      Bachelor in Computer Application (BCA) is one of the popular courses among the students who want to make their career in the IT (Information Technology) field.
       The duration of the course is 3 years and divided into 6 semesters. It comprises of the subjects like database, networking, data structure, core programming languages like ‘C’ and ‘java’.
       This course provides a lot of opportunities to the students who are interested in computer field and wants to work in the IT sector as programmer or software developer.
        To get complete knowledge about the course and career scope, you can go through this article
      </p>
    </div>
  );
}
