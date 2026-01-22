import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-outfit",
});
const ovo = Ovo({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-ovo",
});

export const metadata = {
    title: "Tarun Chowdala - Full Stack Developer & AI Enthusiast",
    description: "Full Stack Developer & AI Enthusiast. I build scalable full-stack applications using React, FastAPI, Node.js, and modern cloud technologies. Currently working at Swara Tech, Hyderabad.",
    icons: {
        icon: '/assets/code-icon.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/assets/code-icon.png" type="image/png" />
            </head>
            <body className="font-Outfit leading-8 dark:bg-darkTheme dark:text-white">
                {children}
            </body>
        </html>
    );
}