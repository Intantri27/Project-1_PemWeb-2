import { size } from "zod";
import { Home, Trophy, Laptop, Mic, Tv } from "lucide-react"; 
import { NavLink } from "react-router-dom";

const Header = () => {
 const menu = [ 
   { label: "Beranda", href: "/", icon: <Home size={18} /> }, 
   { label: "Competition", href: "/competition", icon: <Trophy size={18} /> }, 
   { label: "Seminar", href: "/seminar", icon: <Tv size={18} /> }, 
   { label: "Workshop", href: "/workshop", icon: <Laptop size={18} /> }, 
   { label: "Talkshow", href: "/talkshow", icon: <Mic size={18} /> },
 ]; 
  const activeStyle = "text-red-900"; 
  const defaultStyle = "text-slate-600 hover:text-red-900"; 
  return (
    <header className="bg-white shadow px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="logo">
            <img src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png" alt="logo"
            className="h-16" />
        </div>

        <div className="flex gap-4">
          {menu.map((item) => (
             <NavLink to={item.href} className={({isActive}) => 
            `flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ${ isActive ? activeStyle : defaultStyle }`}>
            {item.icon && <span className="w-5 h-5">{item.icon}</span>}
            <span>{item.label}</span>
            </NavLink>   
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;