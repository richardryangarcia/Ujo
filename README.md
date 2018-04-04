## Ujo Front end Engineering Screen

We're so excited that you are interested in Ujo's front end engineer position. As you will be jumping into an existing code base if you join the team, we wanted to gauge your ability to do just that by providing the basic skeleton of the Ujo Store (rac.ujomusic.com || giraffage.ujomusic.com) with missing functionality. You will have to implement a few components and utilize redux to manage the application state properly. Utilizing Web3 comes with additional UX challenges. Working through some of the challenges will give you a better idea of what we are up against. Below are instructions to get started.


### Start Up Instructions
1. Begin with downloading MetaMask. You will need it to ensure different Web3 states are displayed properly in the store.
2. Run `npm install`
3. Run `npm start`
4. As this project was initialized with `create-react-app` refer to that documentation for any configuration issues
Note: Supplementary tools include ImmutableJS, redux-thunk, and truffle.


### Our Expectations
Use either the StorePage or create your own component to manage the state of Web3. There are several helper functions found in `Web3/actions` which you will have to compose logic for. Those action creators will set values in the `MainRducer` which for most cases returns state.

Along the way, you need to provide the proper messaging and actions for the user. We have provided three components to use for messaging, however, feel free to implement your own where deemed necessary:
1. There is a Modal which can be displayed by calling displayModal found in Modal/ModalActions.js.
2. There is a component called InformativeText found in Web3 directory and called in the TxSection component this should display appropriate text found below.
3. Next to the InformativeText component you will find the BuyButton.

Tests are optional but encouraged.

For an additional challenge, use our open-sourced price oracle `ujo-contracts-oracle` (https://github.com/UjoTeam/contracts-oracle), to fetch the exchange rate and set the price in Ether. Refer to the documentation for the smart contract development framework Truffle (this page will be exceptionally helpful: http://truffleframework.com/docs/getting_started/contracts) to assist you. Some of the initial legwork has been completed in the function `initializeContract`.

Note: The contract has been deployed on Rinkby but not Mainnet so please take this into account when developing!


### Copy and Messaging
Below are additional copy and messaging snippets to help you get started

_The BuyButton component should have three different states:_
- Learn More
- How To Buy Album
- Buy Album

_The InformativeText component should have three different messages:_
- The Ujo Store is currently incompatible with mobile browsers.
- The Ujo Store is currently only compatible with Chrome.
- MetaMask is required to purchase this album on Ethereum.

_Optional messaging for the ModalComponent:_
- Ethereum payments powering the Ujo Store use web3 applications that are only available in a Chrome desktop browser. If you have access, open up Chrome on your desktop and return to localhost:3000 :) for instructions on how to buy.
- You need to be signed into your MetaMask account and be connected the correct ethereum network to buy the album. Please connect to the Main Network. Using Metamask, you can switch networks by clicking the MetaMask extension icon in your browser and then clicking the network name in the top left corner.
