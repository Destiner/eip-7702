export default function Footer() {
  return (
    <div className="footer-attribution">
      {/* Vocs styles components with vanilla-extract at build time, which
          consumer components can't hook into, so scope plain CSS here. */}
      <style>{`
        .footer-attribution {
          border-top: 1px solid var(--vocs-color_border);
          padding-top: var(--vocs-space_16);
          font-size: var(--vocs-fontSize_14);
        }
        .footer-attribution a {
          color: var(--vocs-color_text3);
          text-decoration: none;
        }
        .footer-attribution a:hover {
          color: var(--vocs-color_text);
        }
      `}</style>
      <a href="https://destiner.io" target="_blank" rel="noopener">
        Made by Destiner
      </a>
    </div>
  );
}
