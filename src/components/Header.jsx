import logo from "../assets/logo.png";
import github from "../assets/github-reverse.png";
const Header = ({ renderNewPage }) => {
  return (
    <header className='header'>
      <img onClick={() => renderNewPage("home")} className='logo' src={logo} />
      <p className='header-p' onClick={() => renderNewPage("anime")}>
        Anime
      </p>
      <p className='header-p' onClick={() => renderNewPage("manga")}>
        Manga
      </p>
      <p className='header-p' onClick={() => renderNewPage("characters")}>
        Characters
      </p>
      <p className='header-p' onClick={() => renderNewPage("people")}>
        People
      </p>
      <a
        href='https://github.com/HollysKim'
        target='_blank'
        className='github-logo'
      >
        <img src={github} />
      </a>
    </header>
  );
};

export default Header;
