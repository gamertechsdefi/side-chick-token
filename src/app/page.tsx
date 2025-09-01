import Header from "@/component/Header";
import Image from "next/image";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <Header />
      <main>

        <section className="bg-yellow-100 min-h-screen flex flex-col items-center justify-center text-center text-black" id="home">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center px-4">
              <img src="/images/sdc-logo.jpg" alt="Dogpe Static" className="w-48 h-48 sm:w-64 sm:h-64 mb-4 rounded-xl" />
              <h1 className="text-5xl sm:text-7xl md:text-6xl font-bold mb-2">SIDE CHICK</h1>
              <p className="text-lg md:text-xl mb-4">THE BOLDEST MEME IN THE CRYPTO BLOCK</p>
              <a href="/whitepaper" className="bg-yellow-400 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
                Whitepaper
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row w-full px-4 sm:px-8 py-4 items-center justify-center gap-4 sm:gap-8 mt-8 bg-black">
            <a href="https://tracker.phoenixtoken.community/bsc/sdc"><Image src="/images/firescreener.png" alt="firescreener logo" width={200} height={200} className="w-32 h-auto sm:w-40 sm:h-auto" /></a>
            <a href="https://dexscreener.com/bsc/0xc6c52f9ea3864623d502bb498fa9992f2bdc754e"><Image src="/images/dexscreener.png" alt="dexscreener logo" width={200} height={200} className="w-32 h-auto sm:w-40 sm:h-auto" /></a>
            <a href="https://www.dextools.io/app/en/bnb/pair-explorer/0xc6c52f9ea3864623d502bb498fa9992f2bdc754e?t=1756666225559"><Image src="/images/dextools.png" alt="dextools logo" width={200} height={200} className="w-32 h-auto sm:w-40 sm:h-auto" /></a>
          </div>
        </section>

        <section className="min-h-screen px-4 md:px-16 flex items-center justify-center text-white" id="about">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-6 max-w-7xl mx-auto">
            <div className="rounded-2xl shadow-2xl overflow-hidden w-full lg:w-1/3">
              <Image
                src="/images/meme01.jpg"
                alt="Dogpe"
                width={600}
                height={600}
                className="w-full h-auto object-cover transition-transform hover:scale-105"
                priority
              />
            </div>
            <div className="text-black bg-opacity-50 rounded-2xl lg:p-8 w-full lg:w-1/2">
              <h2 className="text-4xl font-bold mb-4">About $SDC</h2>
              <p className="text-sm md:text-lg flex flex-col gap-2">
                <span className="text-xl font-semibold">SIDE CHICK IS THE BOLDEST MEME ON THE BLOCK</span>
                <span>Designed to stand out in the world of crypto, Side Chick isn’t just another token – it’s a movement powered by humor, culture, and community.

                  We start as a meme-first coin, giving people a fun and engaging way to connect with crypto. But the journey doesn’t stop there – as we grow, Side Chick will evolve into a utility-backed token with staking, NFT integration, and more.

                  Like the name itself, Side Chick is cheeky, unapologetic, and unforgettable. We’re here to create a space where the community thrives, laughs, and profits together.
                </span></p>
            </div>
          </div>
        </section>

        <section className="bg-yellow-500 min-h-screen relative" id="howtobuy">
          <div className="container mx-auto px-8 py-16 max-w-6xl">
            <h1 className="text-4xl md:text-5xl text-center lg:text-6xl font-bold mb-16 text-black">How To Buy <span className="text-yellow-100">$SDC</span></h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
              <div className="space-y-8">
                <div className="bg-black bg-opacity-50 rounded-2xl p-8 shadow-xl relative">
                  <div className="absolute -left-4 -top-4 w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center text-black text-2xl font-bold">1</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">GET SOME $BNB</h2>
                  <p className="text-sm md:text-base text-white/90">
                    Buy or send some $BNB into your wallet (e.g. MetaMask, TrustWallet) </p>
                </div>

                <div className="bg-black bg-opacity-50 rounded-2xl p-8 shadow-xl relative">
                  <div className="absolute -left-4 -top-4 w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center text-black text-2xl font-bold">2</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">GO TO PANCAKESWAP</h2>
                  <p className="text-sm md:text-base text-white/90">
                    Go to the PancakeSwap DEX in the browser. Paste the $SDC contract address in the output field
                  </p>
                </div>

                <div className="bg-black bg-opacity-50 rounded-2xl p-8 shadow-xl relative">
                  <div className="absolute -left-4 -top-4 w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center text-black text-2xl font-bold">3</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">SWAP BNB FOR $SDC</h2>
                  <p className="text-sm md:text-base text-white/90">
                    Enter the amount of BNB you wish to swap for $SDC and confirm the transaction in your wallet.
                  </p>
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <Image
                  src="/images/sdc-logo.jpg"
                  alt="Side Chick Mascot"
                  width={500}
                  height={500}
                  className="w-full max-w-md rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black min-h-screen relative py-20" id="tokenomics">
          <div className="container flex flex-col items-center mx-auto px-4 max-w-6xl">
            <div className="text-center mb-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4">
                Tokenomics
              </h2>
              <p className="text-white/80 text-lg">Understanding $SDC Distribution</p>
            </div>

            <div className="bg-yellow-500 text-black w-full  p-6 rounded-2xl mb-4">
              <h1 className="text-2xl flex flex-col gap-3">
                <span>Total Supply</span>
                <span className="text-3xl">27,000,000</span>
              </h1>
            </div>

            <div className="w-full grid grid-cols-2 md:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Initial Liquidity */}
              <div className="text-yellow-500 rounded-2xl p-6 transform transition-transform hover:scale-105">
                <h3 className="flex flex-col gap-2">
                  <span className="text-3xl font-bold">40%</span>
                  <span className="md:text-xl text-white">Initial Liquidity</span>
                </h3>
              </div>

              {/* Marketing */}
              <div className="text-yellow-500 rounded-2xl p-6 transform transition-transform hover:scale-105">
                <h3 className="flex flex-col gap-2">
                  <span className="text-3xl font-bold">20%</span>
                  <span className="md:text-xl text-white">Marketing</span>
                </h3>
              </div>

              {/* Development */}
              <div className="text-yellow-500 rounded-2xl p-6 transform transition-transform hover:scale-105">
                <h3 className="flex flex-col gap-2">
                  <span className="text-3xl font-bold">10%</span>
                  <span className="md:text-xl text-white">Development</span>
                </h3>
              </div>

              {/* Team */}
              <div className="text-yellow-500 rounded-2xl p-6 transform transition-transform hover:scale-105">
                <h3 className="flex flex-col gap-2">
                  <span className="text-3xl font-bold">10%</span>
                  <span className="md:text-xl text-white">Team</span>
                </h3>
              </div>

              {/* Staking Rewards */}
              <div className="text-yellow-500 rounded-2xl p-6 transform transition-transform hover:scale-105">
                <h3 className="flex flex-col gap-2">
                  <span className="text-3xl font-bold">10%</span>
                  <span className="md:text-xl text-white">Staking Rewards</span>
                </h3>
              </div>

               <div className="text-yellow-500 rounded-2xl p-6 transform transition-transform hover:scale-105">
                <h3 className="flex flex-col gap-2">
                  <span className="text-3xl font-bold">10%</span>
                  <span className="md:text-xl text-white">Community Rewards</span>
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-yellow-200 min-h-screen relative py-20" id="roadmap">
          <div className="container mx-auto px-4 max-w-8xl">
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-16 text-center">
              <span className="text-black">SIDE CHICK</span>{" "}
              <span className="text-black">ROADMAP</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-yellow-400"></div>

              {/* Phase 01 */}
              <div className="relative">
                <div className="hidden lg:block absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white"></div>
                <div className="bg-black bg-opacity-50 rounded-2xl p-6 shadow-xl h-full">
                  <h3 className="text-yellow-400 text-2xl font-bold mb-4">Phase 01</h3>
                  <ul className="text-white/90 space-y-2">
                    <li>Branding and concept design for Side Chick</li>
                    <li>Smart contract deployment on Binance Smart Chain (BSC)</li>
                    <li>Website & whitepaper release</li>
                    <li>Launch on PancakeSwap</li>
                    <li>Start community building on X, Telegram, Discord</li>
                  </ul>
                </div>
              </div>

              {/* Phase 02 */}
              <div className="relative">
                <div className="hidden lg:block absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white"></div>
                <div className="bg-black bg-opacity-50 rounded-2xl p-6 shadow-xl h-full">
                  <h3 className="text-yellow-400 text-2xl font-bold mb-4">Phase 02</h3>
                  <ul className="text-white/90 space-y-2">
                    <li>Apply for CoinGecko & CoinMarketCap listings</li>
                    <li>Viral meme marketing campaigns with influencersn</li>
                    <li>First airdrop to reward community members</li>
                    <li>Partnerships with meme pages and micro-influencers</li>
                    <li>5,000+ Holders</li>
                  </ul>
                </div>
              </div>

              {/* Phase 03 */}
              <div className="relative">
                <div className="hidden lg:block absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white"></div>
                <div className="bg-black bg-opacity-50 rounded-2xl p-6 shadow-xl h-full">
                  <h3 className="text-yellow-400 text-2xl font-bold mb-4">Phase 03</h3>
                  <ul className="text-white/90 space-y-2">
                    <li>Launch staking platform for $SC</li>
                    <li>Begin NFT collection development (Side Chick NFT Series)</li>
                    <li>Secure first CEX listings</li>
                    <li>Broaden global meme partnerships and cross-promotions</li>
                    <li>15,000+ Holders</li>
                  </ul>
                </div>
              </div>

              {/* Phase 04 */}
              <div className="relative">
                <div className="hidden lg:block absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white"></div>
                <div className="bg-black bg-opacity-50 rounded-2xl p-6 shadow-xl h-full">
                  <h3 className="text-yellow-400 text-2xl font-bold mb-4">Phase 04</h3>
                  <ul className="text-white/90 space-y-2">
                    <li>Full staking rewards live</li>
                    <li>Side Chick NFT launch and integration</li>
                    <li>Explore real-world and digital use cases for $SC (payments, P2E gaming concepts, micro-transactions)</li>
                    <li>Launch official Side Chick merchandise store</li>
                    <li>Partner with major influencers & sponsors</li>
                    <li>30,000+ Holders</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen relative py-20" id="faq">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h3 className="text-yellow-400 text-xl mb-2">FAQ&apos;s</h3>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-500">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              <details className="group bg-black bg-opacity-50 rounded-2xl">
                <summary className="flex items-center justify-between p-6 text-xl font-semibold text-white cursor-pointer">
                  What is Side Chick Token?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-white/90">
                  Side Chick Token ($SDC) is the boldest meme coin on the block, designed to stand out in the crypto world. We&apos;re not just another token – we&apos;re a movement that combines humor, culture, and community with real utility potential. Starting as a meme-first coin, we&apos;re building a platform where the community can thrive, laugh, and profit together.
                </div>
              </details>

              <details className="group bg-black bg-opacity-50 rounded-2xl">
                <summary className="flex items-center justify-between p-6 text-xl font-semibold text-white cursor-pointer">
                  What makes Side Chick different?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-white/90">
                  While we embrace our meme coin origins, Side Chick has a clear vision for the future. We&apos;re gradually evolving into a utility-driven token with real-world applications. Our roadmap includes staking features, NFT integrations, and various crypto utilities that will be introduced in later phases, making us more than just another meme coin.
                </div>
              </details>

              <details className="group bg-black bg-opacity-50 rounded-2xl">
                <summary className="flex items-center justify-between p-6 text-xl font-semibold text-white cursor-pointer">
                  What are the tax slippages?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-white/90">
                  There is a 4% buy and sell tax on transactions. 2% to liquidity pool and 2% to the marketing wallet.
                </div>
              </details>



              <details className="group bg-black bg-opacity-50 rounded-2xl">
                <summary className="flex items-center justify-between p-6 text-xl font-semibold text-white cursor-pointer">
                  What benefits do holders get?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-white/90">
                  Side Chick holders become part of a vibrant and engaged community. Early adopters will be rewarded through our community initiatives, upcoming staking program, and exclusive access to NFT launches. We&apos;re building a fun, loyal, and rewarding ecosystem where everyone has the opportunity to grow together.
                </div>
              </details>

              <details className="group bg-black bg-opacity-50 rounded-2xl">
                <summary className="flex items-center justify-between p-6 text-xl font-semibold text-white cursor-pointer">
                  What are the future plans?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-white/90">
                  Our vision is to become one of the most recognizable meme coins in crypto while building real utility. Our roadmap includes launching a staking platform, developing exclusive NFT collections, securing exchange listings, and exploring various real-world applications. We&apos;re committed to continuous growth and community expansion.
                </div>
              </details>

              <details className="group bg-black bg-opacity-50 rounded-2xl">
                <summary className="flex items-center justify-between p-6 text-xl font-semibold text-white cursor-pointer">
                  How can I join the community?
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-white/90">
                  Join our vibrant community through our official Telegram group and Twitter/X account. Our community moderators and team members are active 24/7, organizing events, sharing updates, and engaging with members. We believe in building a strong, interactive community where everyone&apos;s voice matters.
                </div>
              </details>
            </div>
          </div>
        </section>

        <footer className="bg-neutral-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo and Description */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/sdc-logo.jpg"
                    alt="Side Chick Logo"
                    width={50}
                    height={50}
                    className="rounded-lg"
                  />
                  <h2 className="text-2xl font-bold">SIDE CHICK</h2>
                </div>
                <p className="text-white/80 text-sm">
                  $SDC is a unique cryptocurrency that combines meme culture with real utility,
                  creating a vibrant and engaged community in the crypto space.
                </p>
                <div className="flex gap-4 pt-2">
                  <a href="https://x.com/Side_Chick_SDC" className="bg-black hover:bg-neutral-800 p-2 rounded-lg transition-colors">
                    <FaXTwitter className="w-6 h-6" fill="white" />
                  </a>
                  <a href="https://t.me/Sidechickglobal" className="bg-black hover:bg-neutral-800 p-2 rounded-lg transition-colors">
                    <FaTelegram className="w-6 h-6" fill="white" />
                  </a>
                  <a href="https://tracker.phoenixtoken.community/bsc/sdc" className="bg-black hover:bg-neutral-800 p-2 rounded-lg transition-colors">
                    <Image src="/images/firescreener-logo.png" alt="Discord Logo" width={24} height={24} />
                  </a>
                </div>
              </div>

              {/* About Us */}
              <div>
                <h3 className="text-xl font-bold mb-4">About Us</h3>
                <ul className="space-y-2">
                  <li><a href="#howtobuy" className="text-white/80 hover:text-yellow-400 transition-colors">How To Buy</a></li>
                  <li><a href="#roadmap" className="text-white/80 hover:text-yellow-400 transition-colors">Roadmap</a></li>
                  <li><a href="#faq" className="text-white/80 hover:text-yellow-400 transition-colors">FAQ</a></li>
                </ul>
              </div>

              {/* Community */}
              <div>
                <h3 className="text-xl font-bold mb-4">Community</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/80 hover:text-yellow-400 transition-colors">Help & Support</a></li>
                  <li><a href="#" className="text-white/80 hover:text-yellow-400 transition-colors">Twitter</a></li>
                  <li><a href="#" className="text-white/80 hover:text-yellow-400 transition-colors">Telegram</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-xl font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/80 hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-white/80 hover:text-yellow-400 transition-colors">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-black mt-12 pt-8 text-center text-white/60">
              <p>© 2025 Side Chick Token. All Rights Reserved.</p>
            </div>
          </div>
        </footer>

      </main>

    </div>
  );
}
