import Image from "next/image"
import { Button } from "@/components/ui/button"
import mock from '../public/images/jago.jpeg'

import { bawor, raleway } from "@/app/fonts"
import Link from "next/link";
interface LoginProps {
  title: string;
  subTitle: string;
  buttonText: string;
  description: string;
  navigationText: string;
  secondNavigationText?: string;
  navigationLink: string;
}
export default function LoginPage({title, subTitle, buttonText, description, navigationText, secondNavigationText, navigationLink}: LoginProps) {
  return (
    <div className={`min-h-screen flex ${raleway.className} `}>
      <div className="flex-1 bg-gradient-to-r from-[#ffffff] via-[#bbdb9e] to-secondary md:flex flex-col justify-between items-end hidden">
        <div className="mx-10 mt-10">
            <Image src="/images/logo.png" width={200} height={200} alt="logo"/>
            <p className={`text-black text-2xl mt-4 ${bawor.className}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, saepe.</p>
        </div>
        <div className="items-end">
            <Image src='/images/book-illustrator.png' width={600} height={600} alt="book illustrator"/>
        </div>
      </div>
      <div className="flex-1 bg-white p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h2 className={`text-2xl font-bold text-gray-900 ${bawor.className}`}>{title}</h2>
            <p className="text-gray-600">{subTitle}</p>
          </div>

          <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full h-12 flex items-center justify-center gap-3 border-gray-300 cursor-[url(/jago.cur),_pointer]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              {buttonText}
            </Button>

            <div className="text-center">
              <p className="text-sm  mb-4">
                {description}
              </p>

              <p className="text-sm ">
                {navigationText}
                <Link href={navigationLink} className="text-green-600">
                  {secondNavigationText}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
