export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mb-16 flex flex-col gap-12">{children}</div>;
}
