import type { Metadata } from "next";
import { Tenor_Sans, Mulish } from "next/font/google";
import "./globals.css";

import Header from "@/app/components/layout/Header/Header";
import Footer from "@/app/components/layout/Footer/Footer";
import PreFooterWrapper from "@/app/components/layout/prefooter/PreFooterWrapper";
import { getGlobalSiteData } from "@/app/lib/global";


const tenorSans = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tenor-sans",
});
const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});
export const metadata: Metadata = {
  title: {
    default: "Donna Raven",
    template: "%s | Donna Raven",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data =
    await getGlobalSiteData();

  const branding =
    data.siteSettings.branding.branding;

  const contact =
    data.siteSettings
      .contactInformation
      .contactInformation;

  const socials =
    data.siteSettings.socialMedia
      .socialLinks ?? [];

  const headerSettings =
    data.siteSettings.headerSettings
      .headerSettings;

  const footerSettings =
    data.siteSettings.footerSettings
      .footerSettings;
const preFooterSettings =
  data.siteSettings.prefooterSettings;
  return (
    <html lang="en">
      <body className={tenorSans.variable}>
        <Header
          headerMenu={
            data.headerMenu.nodes
          }
          hamburgerMenu={
            data.hamburgerMenu.nodes
          }
          branding={branding}
          contact={contact}
          socials={socials}
          settings={
            headerSettings
          }
        />

        {children}
        <PreFooterWrapper
          settings={preFooterSettings}
        />
        <Footer
          menu={
            data.hamburgerMenu
              .nodes
          }
          branding={branding}
          contact={contact}
          socials={socials}
          settings={
            footerSettings
          }
        />
      </body>
    </html>
  );
}