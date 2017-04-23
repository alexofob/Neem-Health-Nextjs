import AppBar from 'material-ui/AppBar';
import Link from 'next/prefetch';

const styles = {
  brand: {
    fontSize: 24,
    fontWeight: 500,
    letterSpacing: 2,
    cursor: 'pointer',
    color: 'black',
  },
};

const NavBar = () => (
  <div>
    <AppBar
      title={
        <Link href="/">
          <a>
            <span style={styles.brand}>
              Neem Health
            </span>
          </a>
        </Link>
      }
      showMenuIconButton={false}
    />

    <style jsx>
      {
        `
      .appbar {
        background-color: #E8E8E8 !important;
        color: black !important;
      }
    `
      }
    </style>
  </div>
);

export default NavBar;
