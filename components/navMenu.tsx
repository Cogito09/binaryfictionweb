"use client"


import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function navMenu(){
    return (
        <nav className="flex items-center justify-between py-5 px-5">
            <div className="flex items-center">
                <Image src="/logo_64.svg" alt="logo" width={64 } height={64} />
            </div>
            <nav className="flex items-center justify-center">
                <Button asChild variant="ghost">
                    <Link href="/">Home</Link>
                </Button>
                <Button asChild variant="ghost">
                    <Link href="/games">Games</Link>
                </Button>
            </nav>
        </nav>
    )
}