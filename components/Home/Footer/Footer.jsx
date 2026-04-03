const Footer = () => {
  return (
    <footer className="relative">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="py-8 px-4">
        <p className="text-center text-gray-500 text-sm">
          Designed & Built by{" "}
          <span className="gradient-text font-semibold">Prakhar</span>
          {" "}&bull;{" "}
          <span className="text-gray-600">{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
