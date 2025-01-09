import React, { useState } from 'react';
import { Copy, Sparkles, RotateCcw } from 'lucide-react';

const CryptoHypeGenerator = () => {
  const [tokenName, setTokenName] = useState('');
  const [description, setDescription] = useState('');
  const [generatedTweet, setGeneratedTweet] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateTweet = () => {
    if (!tokenName || !description || isGenerating) {
      return;
    }

    setIsGenerating(true);
    setGeneratedTweet('');

    // Arrays for tweet content
    const degenIntros = [
      `JUST MORTGAGED MY HOUSE FOR ${tokenName}`,
      `Anon... I'm all in on ${tokenName}`,
      `Selling my kidney to buy more ${tokenName}`,
      `TOOK A LOAN TO APE INTO ${tokenName}`,
      `Just cancelled my wedding to buy ${tokenName}`,
      `Sold all my NFTs for ${tokenName}`,
      `LIQUIDATED MY ALTS FOR ${tokenName}`,
      `Maxing out 3 credit cards for ${tokenName}`,
      `Trading my Lambo for more ${tokenName}`,
      `SKIPPING RENT TO STACK ${tokenName}`,
      `Dumping my life savings into ${tokenName}`,
      `BREAKING: WHALES FEEDING ON ${tokenName}`,
      `MY WIFE STILL DOESNT KNOW I BOUGHT ${tokenName}`,
      `Anon, you're ngmi if you sleep on ${tokenName}`,
      `⚠️ EMERGENCY ALPHA: ${tokenName}`,
      `CALLING ALL DEGENS: ${tokenName}`,
      `Virgin BTC vs Chad ${tokenName}`,
      `EVEN MY GRANDMA IS BUYING ${tokenName}`,
      `Maxis real quiet about ${tokenName}`,
      `SORRY BANKS, I CHOOSE ${tokenName}`
    ];

    const degenPredictions = [
      "EASIEST 100x OF MY LIFE",
      "THIS MAKES DOGE LOOK BEARISH",
      "GIGACHAD TOKENOMICS CONFIRMED",
      "PAPER HANDS GETTING DESTROYED RN",
      "MEME POWER OVER 9000",
      "SMARTEST APES ARE ACCUMULATING",
      "NO BRAINER ENTRY RIGHT HERE",
      "VOLUME GOING PARABOLIC SOON",
      "VCS BEGGING TO GET IN",
      "BEARS GETTING REKT TODAY",
      "MOST BULLISH CHART IN CRYPTO",
      "MILLIONAIRE MAKER SPOTTED",
      "TRUST ME BRO: THIS IS IT",
      "SENDING IT TO VALHALLA",
      "EARLY DOGE VIBES FR FR",
      "GENERATIONAL WEALTH INCOMING",
      "PUMP OF THE CENTURY LOADING",
      "IMAGINE BEING THIS EARLY",
      "ABSOLUTE CHAD TOKENOMICS",
      "THIS IS THE CHOSEN ONE"
    ];

    const degenExtras = [
      "NGMI IF YOU DONT APE",
      "GET IN OR STAY POOR",
      "TIME TO BECOME A WHALE",
      "WAGMI FRENS",
      "THANK ME LATER",
      "DYOR NFA IYKYK",
      "SCREENSHOTS FOR HISTORY",
      "SEE YOU ON THE MOON",
      "DONT BE LATE TO THIS ONE",
      "THIS IS NOT A DRILL"
    ];

    setTimeout(() => {
      try {
        const randomIntro = degenIntros[Math.floor(Math.random() * degenIntros.length)];
        const randomPrediction = degenPredictions[Math.floor(Math.random() * degenPredictions.length)];
        const randomExtra = degenExtras[Math.floor(Math.random() * degenExtras.length)];

        const tweet = `${randomIntro} 🚀

${description} ✨

${randomPrediction} 💎

${randomExtra} 🔥
#Solana #DegensOnly #CryptoGems`;

        setGeneratedTweet(tweet);
      } catch (error) {
        console.error('Error generating tweet:', error);
      } finally {
        setIsGenerating(false);
      }
    }, 500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedTweet);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a 
                href="https://pump.fun" 
                className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                $HYPEAI
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="https://x.com/hypeaicoin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://t.me/hypeaicoin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.27-.48.74-.74 2.87-1.25 4.78-2.08 5.75-2.49 2.74-1.18 3.31-1.38 3.69-1.39.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Crypto Hype Generator
            </h1>
            <p className="text-gray-400 text-lg">
              Generate viral-worthy tweets for your next moon mission 🚀
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Token Name
                  </label>
                  <input
                    type="text"
                    value={tokenName}
                    onChange={(e) => setTokenName(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-500"
                    placeholder="$DOGE"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Short Description
                  </label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-500"
                    placeholder="Meme coin with real utility"
                  />
                </div>
              </div>

              <button
                onClick={generateTweet}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <RotateCcw className="w-5 h-5 animate-spin" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Generate Hype Tweet</span>
                  </>
                )}
              </button>

              {generatedTweet && (
                <div className="mt-8">
                  <div className="relative">
                    <div className="p-6 bg-gray-900 rounded-xl border border-gray-700 whitespace-pre-wrap text-lg leading-relaxed">
                      {generatedTweet}
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-200 bg-gray-800 rounded-lg transition-colors"
                      title="Copy to clipboard"
                    >
                      <Copy className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm">
            Not financial advice. DYOR. 🚀
          </div>
        </div>
      </div>
    </div>
  );
};

// At the end of the file, use this export:
export default CryptoHypeGenerator;