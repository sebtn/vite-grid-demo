const NavigationLink = ({ children, name, title, href }) => {
  return (
    <a
      title={title}
      href={href}
      className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100"
    >
      {children}
      <p className="text-inherit font-poppins overflow-auto whitespace-nowrap tracking-wide">
        {name}
      </p>
    </a>
  );
};

export default NavigationLink;
