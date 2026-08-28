export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`mx-auto max-w-6xl px-6 md:px-14 ${className}`}>
      {children}
    </div>
  );
}
