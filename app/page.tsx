import NavMenu from '../components/navMenu'
import Image from 'next/image'
import {Button} from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <main>
        <NavMenu />

        <div className="bg-gray-200 min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto p-8">
                {/* Big logo image */}
                <div className="text-center">
                    <Image
                        src="/icons/logo_512.png"
                        alt="Big Logo"
                        width={400}
                        height={400} // Adjust the height according to your image aspect ratio
                        className="mx-auto mb-8"
                    />
                    <Image
                        src="/icons/binary_logo_512.png"
                        alt="Big Logo"
                        width={400}
                        height={400} // Adjust the height according to your image aspect ratio
                        className="mx-auto mb-8"
                    />
                </div>

                {/* Text */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Playful Creations, Infinite Fun!</h1>
                    <p className="text-lg text-gray-700">At Binary Fiction, every game is the brainchild of a solo developer dedicated to crafting indie games for the sheer joy of creation. Embracing the freedom of a single creative mind. Join me on this unique journey through games that are a testament to a single developer's passion and dedication to crafting immersive and enjoyable experiences.</p>
                </div>
            </div>
        </div>
    </main>
  )
}
