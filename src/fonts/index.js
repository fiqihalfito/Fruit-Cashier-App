import { Lily_Script_One } from "next/font/google";
import { Inter } from 'next/font/google'
import { Red_Hat_Display } from "next/font/google";

export const lily_script_one = Lily_Script_One({
    subsets: ['latin'],
    display: "swap",
    weight: '400',
    variable: "--font-lily-script-one"
})


export const inter = Inter({
    subsets: ['latin'],
    variable: "--font-inter"
})

export const red_hat_display = Red_Hat_Display({
    subsets: ['latin'],
    variable: "--font-red-hat-display"
}) 