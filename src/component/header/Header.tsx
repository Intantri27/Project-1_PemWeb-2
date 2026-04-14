import NavLink from "../ui/Navlink";

const Header = () => {
    const menu = [
        {label: "Beranda", href: "#"},
        {label: "Competition", href: "#"},
        {label: "Seminar", href: "#"},
        {label: "Workshop", href: "#"},
        {label: "Talkshow", href: "#"}
    ];
  return (
    <header className="bg-white shadow px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="logo">
            <img src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png" alt="logo"
            className="h-16" />
        </div>

        <div className="flex gap-4">
          {menu.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;