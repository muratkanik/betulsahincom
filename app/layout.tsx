import type { Metadata } from 'next'
import './globals.css'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import ClientScripts from '@/components/ClientScripts'

export const metadata: Metadata = {
  title: 'Op.Dr. Betül Şahin - Kulak Burun Boğaz ve Yüz Estetiği',
  description: 'Kişiye özel burun estetiği çözümleri ile hayalinizdeki görünüme ulaşın. Uzman kadro ve güvenli işlem sizi bekliyor!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="no-js">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="shortcut icon" href="/web/content/webdesign/res/favicon.ico" />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,400italic,700' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Alegreya+Sans:100,300,400,400italic,500,600,700' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Patua+One:100,300,400,400italic,700' />
        <link rel='stylesheet' href='/web/css/global.css' />
        <link rel='stylesheet' href='/web/content/webdesign/css/structure.css' />
        <link rel='stylesheet' href='/web/content/webdesign/css/webdesign.css' />
        <link rel='stylesheet' href='/web/content/webdesign/css/custom.css' />
        <link rel="stylesheet" href="/web/plugins/rs-plugin/css/settings.css" />
      </head>
      <body className="template-slider layout-full-width button-stroke no-content-padding header-overlay header-transparent minimalist-header sticky-header sticky-white subheader-title-left hide-title-area">
        {children}
        <LanguageSwitcher />
        <ClientScripts />
      </body>
    </html>
  )
}
