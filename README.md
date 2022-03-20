## Full stack NFT marketplace built with Polygon, Solidity, IPFS, & Next.js 
by Agholor Christotle


### Screenshots

![Market Place](./Screenshots/nftmkp.jpg)
![Creat Item](./Screenshots/nftlst.jpg)


### Running this project
follow the steps bellow:

# Local setup

To run this project locally, follow these steps.

1. Clone the project locally, change into the directory, and install the dependencies:

```sh
git clone https://github.com/johnchristotle/full-stack-nft-marketplace.git

cd full-stack-nft-marketplace

# install using NPM or Yarn
npm install

# or

yarn
```

2. Start the local Hardhat node

```sh
npx hardhat node
```

3. With the network running, deploy the contracts to the local network in a separate terminal window

```sh
npx hardhat run scripts/deploy.js --network localhost
```

4. Start the app

```
npm run dev
```

