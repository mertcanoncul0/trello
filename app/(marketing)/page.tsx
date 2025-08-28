import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-6">
      <Logo />
      <h1 className="text-6xl font-bold text-neutral-700">
        TaskFlow
      </h1>
      <p className="text-neutral-500 text-xl max-w-sm text-center">
        Collaborate, manage projects, and reach new productivity peaks
      </p>
      <div className="flex space-x-4">
        <Button size="lg" asChild>
          <Link href="/sign-in">
            Get Started
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/sign-up">
            Sign Up
          </Link>
        </Button>
      </div>
      
      {/* Clerk Test Section */}
      <div className="mt-8 p-4 border rounded-lg bg-gray-50">
        <h3 className="text-lg font-semibold mb-2">Clerk Test</h3>
        <p className="text-sm text-gray-600 mb-3">
          Clerk'in çalışıp çalışmadığını test etmek için:
        </p>
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Sign In Test</Link>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-up">Sign Up Test</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}