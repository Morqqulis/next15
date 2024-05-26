import Footer from '@layout/Footer'
import Header from '@layout/Header'
import { primaryFont } from '@settings/fonts'
import '@styles/index.scss'
import Head from 'next/head'


export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <Head>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <body className={primaryFont.className}>
            <div className="wrapper">
               <Header />
               {children}
               <Footer />
            </div>
         </body>
      </html>
   )
}
