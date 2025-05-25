import Image from "next/image"
import { Button } from "@/components/ui/button"
import mock from '../public/images/jago.jpeg'

import { raleway } from "@/app/fonts"
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
      <div className="flex-1 bg-gradient-to-r from-[#9c7766] via-[#724e3c] to-[#5C3D2E] md:flex flex-col justify-evenly items-end hidden">
        <div className="mx-10">
            <Image src={mock} width={50} height={50} alt="logo"/>
            <p className="text-white text-2xl mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, saepe.</p>
        </div>
        <div className="bg-red-900 items-end text-end mr-9">
            <Image src={mock} width={200} height={200} alt="logo"/>
        </div>
      </div>
      <div className="flex-1 bg-white p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-600">{subTitle}</p>
          </div>

          <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full h-12 flex items-center justify-center gap-3 border-gray-300 cursor-[url(/jago.cur),_pointer]"
          >
            <Image src={mock} width={20} height={20} alt="google-logo"/>
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
