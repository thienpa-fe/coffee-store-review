import StyledComponentsRegistry from '@/lib/StyledComponentRegistry';
import './globals.css';
import { Poppins, Roboto } from 'next/font/google';
import AntdRegistry from '@/lib/AntdRegistry';
import { ConfigProvider } from 'antd';
import theme from '@/config/theme/theme-config';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Coffee Store Review',
  description: 'Coffee Store Review',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/cf-icon.png" sizes="any" />
      </head>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <AntdRegistry>
            <ConfigProvider theme={theme}>{children}</ConfigProvider>
          </AntdRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
