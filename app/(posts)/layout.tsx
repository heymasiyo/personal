export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mb-20 flex flex-col gap-12">{children}</div>;
}
