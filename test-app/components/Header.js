import headerStyles from "../styles/Header.module.css";

const Header = () => {
  const x = 1;
  return (
    <div>
      {/**<h1 className="title">
        <pan>Webdev</pan> news
      </h1>
      <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style> */}
      <h1 className={headerStyles.title}>
        <span>Webdev</span> news
      </h1>
      <p>
        Issues Pull requests Actions Projects Security Insights
        react-bootcamp/bootcamp-warmup/solutions/03-jsx.html
      </p>
    </div>
  );
};

export default Header;
