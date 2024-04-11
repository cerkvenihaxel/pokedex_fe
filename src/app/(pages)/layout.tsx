import {Margarine} from "next/font/google";
import "../globals.css";


const margarine = Margarine({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--primary-font"
})

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${margarine.className} h-screen`}>
        <div id="page-content" className="body-container flex flex-col">
            {children}
        </div>
        </body>
        </html>
    );
}
