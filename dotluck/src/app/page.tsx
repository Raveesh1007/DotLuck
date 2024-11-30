import Link from 'next/link';
import { Button } from '../app/components/ui/button'; // Corrected the path for the Button component

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-extrabold mb-4 text-white">Welcome to DOTLUCK</h1>
      <p className="text-4xl mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text font-bold">
        A Decentralized Lottery on Polkadot
      </p>
      <div className="mb-8">
        <Link href="/game-options"> {/* Fixed the href to match your directory */}
          <Button className="text-lg py-2 px-6 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-pink-600 hover:to-purple-500 text-white transition-all duration-300">
            Test Your Luck
          </Button>
        </Link>
      </div>
      <p className="text-lg opacity-75 max-w-2xl mx-auto">
        Participate in a fair, transparent lottery using your DOT tokens. 
        Smart contracts ensure complete decentralization and trustlessness.
      </p>
    </div>
  );
}
