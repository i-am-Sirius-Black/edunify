// pages/_app.js
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/addSchool">Add School</a>
          </li>
          <li>
            <a href="/showSchools">Show Schools</a>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
