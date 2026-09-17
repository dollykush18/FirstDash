/** Chrome-style browser frame used to wrap any mini website preview. */
export default function BrowserFrame({ url = 'bistro-verde.com', children, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-xl bg-[#1b1830] ring-1 ring-white/10 ${className}`}>
      <div className="flex items-center gap-1.5 bg-[#22203a] px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
        <div className="ml-2 flex-1 truncate rounded-full bg-black/30 px-2 py-[2px] text-[6px] text-white/45 sm:text-[7px]">
          {url}
        </div>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}
