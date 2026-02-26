type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="max-w-screen mx-auto">{children}</div>
    </div>
  );
}
