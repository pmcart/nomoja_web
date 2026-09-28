export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-serif text-[1.7rem] leading-none tracking-tight ${className}`}>
      Nomoja<span aria-hidden="true" className="text-coral">.</span>
    </span>
  );
}
