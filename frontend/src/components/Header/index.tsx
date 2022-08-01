import Selector from "../Selector";
import "./style.css";

const githubIcon =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
const instagramIcon =
  "https://cdn-icons.flaticon.com/png/512/3670/premium/3670274.png?token=exp=1659310544~hmac=013d8c902178a7145b2bb3ebdb75eb07";

const githubProfile = "https://github.com/Rafael-Lasso";

function Header() {
  return (
    <>
      <header>
        <nav></nav>
        <h1>CodeMap</h1>
        <Selector />
        <footer>
          <a href={githubProfile}>
            <img src={githubIcon} />
          </a>
          <a href="">
            <img src={instagramIcon} />
          </a>
        </footer>
      </header>
    </>
  );
}

export default Header;
