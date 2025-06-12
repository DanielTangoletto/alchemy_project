import Image from "next/image";
import AlchemyLogo from "../../../public/alchemy_logo.svg";

// Types
interface NavItem {
  label: string;
  href?: string;
}

// Constants
const NAV_ITEMS: NavItem[] = [
  { label: "Prompt", href: "#prompt" },
  { label: "Extension", href: "#extension" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Benefit", href: "#benefit" },
  { label: "Pricing", href: "#pricing" },
];

// Styles
const styles = {
  header: "fixed top-0 left-0 w-full bg-[#0d0d0d] z-999",
  container: "max-w-[1440px] mx-auto flex h-18 text-sm justify-between items-center px-4",
  nav: "md:flex gap-6 lg:gap-8 font-medium hidden",
  navLink: "hover:text-gray-300 transition-colors",
  button:
    "px-4 py-3 rounded-lg hover:bg-[#181b1e] border border-transparent hover:border-white/8 transition-colors",
  buttonContainer: "flex gap-6 font-medium max-[430px]:hidden",
  spacer: "h-18",
};

// Components
const NavigationItem: React.FC<NavItem> = ({ label, href }) => (
  <li>
    {href ? (
      <a href={href} className={styles.navLink}>
        {label}
      </a>
    ) : (
      <span className={`${styles.navLink} cursor-pointer`}>{label}</span>
    )}
  </li>
);

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Image
            src={AlchemyLogo}
            width={125}
            height={28}
            alt="Alchemy App Logo"
            className="cursor-pointer"
            priority
          />

          <nav aria-label="Main navigation">
            <ul className={styles.nav}>
              {NAV_ITEMS.map((item) => (
                <NavigationItem key={item.label} {...item} />
              ))}
            </ul>
          </nav>

          <div className={styles.buttonContainer}>
            <button className={styles.button} aria-label="Log in to your account">
              Log In
            </button>
            <button className={styles.button} aria-label="Create a new account">
              Sign Up
            </button>
          </div>
        </div>
      </header>
      <div className={styles.spacer} aria-hidden="true" />
    </>
  );
};

export default Header;
