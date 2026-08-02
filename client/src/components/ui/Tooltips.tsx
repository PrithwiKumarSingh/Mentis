type TooltipProps = {
  text: string;
  children: React.ReactNode;
};

export default function Tooltip({ text, children }: TooltipProps) {
  return (
    <div className="relative inline-flex group">
      {children}

      <div
        className="
          absolute
          bottom-full
          left-1/2
          -translate-x-1/2
          mb-3

          opacity-0
          invisible
          group-hover:opacity-100
          group-hover:visible

          transition-all
          duration-200
          pointer-events-none
          z-50
        "
      >
        {/* Bubble */}
        <div className="relative rounded-md bg-gray-800 px-2 py-1 text-sm text-white shadow-lg whitespace-nowrap">
          {text}

          {/* Arrow */}
          <div
            className="
              absolute
              left-1/2
              top-full
              -translate-x-1/2
              border-8
              border-transparent
              border-t-gray-800
            "
          />
        </div>
      </div>
    </div>
  );
}