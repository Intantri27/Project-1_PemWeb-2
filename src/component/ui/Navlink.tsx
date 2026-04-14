interface NavLinkProps {
  label: string;
  href: string;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  label,
  href,
  isActive = false,
}) => {
  return (
    <a
      href={href}
      className={`px-4 py-2 font-medium ${
        isActive
          ? "text-red-900"
          : "text-gray-600 hover:text-red-900"
      }`}
    >
      {label}
    </a>
  );
};

export default NavLink;