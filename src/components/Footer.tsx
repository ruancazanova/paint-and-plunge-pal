const Footer = () => (
  <footer className="bg-primary py-10">
    <div className="container mx-auto px-4 text-center">
      <p className="font-display font-bold text-lg text-primary-foreground mb-2">PinturasPro</p>
      <p className="text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} PinturasPro. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
