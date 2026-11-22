export default function Ticker() {
  const items = [
    "BUILT FOR NET-2027",
    "107 → 150",
    "FULL-LENGTH PRACTICE PAPERS",
    "3-ROUND MATH METHOD",
    "NO GUESSWORK",
    "CHAPTER-BY-CHAPTER PLAN",
    "PDF + TOOLKIT",
  ];

  const separator = <span className="mx-4 text-[#C4432B]">◆</span>;

  const renderItems = () =>
    items.map((item, i) => (
      <span key={i} className="flex items-center whitespace-nowrap">
        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">
          {item}
        </span>
        {separator}
      </span>
    ));

  return (
    <div className="w-full bg-[#161310] text-[#FFFAEF] border-y-2 border-[#161310] overflow-hidden py-2.5 select-none">
      <div className="ticker-track">
        <div className="flex items-center">{renderItems()}</div>
        <div className="flex items-center" aria-hidden="true">
          {renderItems()}
        </div>
      </div>
    </div>
  );
}
