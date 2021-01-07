const Footer = () => {
  return (
    <div className="flex justify-between m-6">
      <p className="text-xs font-semibold text-gray-600">
        Bite Me Gourmet (ABN 49 612 848 626)<br/>
        Copyright&#169; 2020 - {new Date().getFullYear()}
      </p>
      <div className="flex gap-3 ml-4">
        <a href="https://twitter.com/strapijs" className="max-w-xs ml-4">
          <img src="/twitter.svg" alt="Twitter" />
        </a>
        <a href="https://facebook.com/strapijs" className="ml-3">
          <img src="/facebook.svg" alt="Facebook" />
        </a>
      </div>
      <script src="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js" />
    </div>
  );
};

export default Footer;
