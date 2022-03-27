## The project include customed ERC20 and ERC721 Template.

```
.
├── LICENSE
├── README.md
├── contracts
│   ├── ERC20Template.sol
│   └── ERC721Template.sol
├── hardhat.config.js
├── package-lock.json
├── package.json
├── scripts
│   ├── deploy.js
│   ├── helpers.js
│   └── mint.js
└── tools
    ├── solt-linux-x64
    └── solt-mac
```

### Prerequisite
Prepare `.env` file under project root directory.

```.env
ALCHEMY_KEY = "YOUR_ALCHEMY_KEY"
ACCOUNT_PRIVATE_KEY = "YOUR_PRIVATE_KEY"
NETWORK="rinkeby"
```

### Compile
```SHELL
npm ci
```

```SHELL
npx hardhat compile
```

### Deploy

```
npx hardhat deployERC20
npx hardhat deployERC721
```

### Verify

eg. ERC20Template.sol

##### for mac 
```SHELL
chmod u+x ./tools/solc-mac
./tools/solt-mac write contracts/ERC20Template.sol --npm
```

##### for linux
```SHELL
chmod u+x ./tools/solt-linux-x64
./tools/solt-linux-x64 write contracts/ERC20Template.sol --npm
```

Browse to your contract address in etherscan and verify contract use **Standard-Input-Json**


### Customization
- You can custom the contracts' name as you like and don't forget to change the file name in deploy.js.
- You can change the name, symbol or other arguments in deploy.js to fit your requirement.
