NFT Quadrant Sale System
   Smart contract system for artists to sell artwork as four NFT quadrants ($25,000 each), with a macro NFT combining them. Artists can withdraw funds anytime; consumers wait until all NFTs are sold to trade.
Prerequisites

Node.js and npm (nodejs.org)
Hardhat (hardhat.org)
MetaMask (metamask.io)
IPFS (pinata.cloud)
Ethereum (Sepolia or mainnet) or Polygon

Setup

Clone repository:git clone https://github.com/your-username/nft-quadrant-sale.git
cd nft-quadrant-sale
npm install


Install dependencies:npm install @openzeppelin/contracts@4.9.3 @rmrk-team/evm-contracts @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle chai @nomiclabs/hardhat-etherscan


Configure hardhat.config.js with Infura and Etherscan keys.
Compile contracts:npx hardhat compile


Test:npx hardhat test



Deployment
npx hardhat run scripts/deploy.js --network sepolia

Customization

Price: Edit NFT_PRICE in NFTSaleContract.sol.
Quantity: Change TOTAL_NFTS.
Royalties: Adjust royaltyInfo percentage.

License
   MIT
# NFT-QUADRANT-SALE
NFT-QUADRANT-SALE
