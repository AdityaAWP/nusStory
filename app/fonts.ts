import { Raleway } from "next/font/google";
import localFont from 'next/font/local'


export const raleway = Raleway({
    subsets: ["latin"],
    variable: "--font-raleway",
})

export const bawor = localFont({
    src: "../public/fonts/bawor/Bawor.ttf",
})