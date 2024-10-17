import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <header>
          <h1 className='sr-only'>MORTGAGE REPAYMENT CALCULATOR</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
