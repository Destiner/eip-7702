export function Footer() {
  return (
    <div className="footer-attribution">
      {/* Vocs ships its own stylesheet, so scope plain CSS here rather than
          reaching into its internals. */}
      <style>{`
        .footer-attribution {
          border-top: 1px solid var(--vocs-color-gray6);
          padding-top: 1rem;
          font-size: 0.875rem;
        }
        .footer-attribution a {
          color: var(--vocs-color-gray10);
          text-decoration: none;
        }
        .footer-attribution a:hover {
          color: var(--vocs-color-gray12);
        }
      `}</style>
      <a href="https://destiner.io" target="_blank" rel="noopener">
        Made by Destiner
      </a>
    </div>
  );
}
