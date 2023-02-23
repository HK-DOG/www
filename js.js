let web = '';
let webWiter='';
let wallet_address = '';
let contract_addr="0xfa927f3Cd9372762510620543FAfb28d3EC31de9";
let contract_abi = [ { "inputs": [ { "internalType": "address", "name": "_dexRouter", "type": "address" }, { "internalType": "address", "name": "_autoFeeReciever", "type": "address" }, { "internalType": "address", "name": "_marketFeeReciever", "type": "address" }, { "internalType": "address", "name": "_taxCutsAddress", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "amountETH", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountBOG", "type": "uint256" } ], "name": "AutoLiquify", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "duration", "type": "uint256" } ], "name": "BuybackMultiplierActive", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "oldOwner", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "MASK", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "WETH", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_maxTxAmount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" } ], "name": "approveMax", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "autoBuybackEnabled", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "autoLiquidityReceiver", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "clearBuybackMultiplier", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "distributorAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCirculatingSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "accuracy", "type": "uint256" } ], "name": "getLiquidityBacking", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getOwner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "target", "type": "uint256" }, { "internalType": "uint256", "name": "accuracy", "type": "uint256" } ], "name": "isOverLiquified", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "isOwner", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "launch", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "launchedAt", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "launchedAtTimestamp", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "marketingFeeReceiver", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "pair", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "router", "outputs": [ { "internalType": "contract IDEXRouter", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "_enabled", "type": "bool" }, { "internalType": "uint256", "name": "_cap", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint256", "name": "_period", "type": "uint256" } ], "name": "setAutoBuybackSettings", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "numerator", "type": "uint256" }, { "internalType": "uint256", "name": "denominator", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" } ], "name": "setBuybackMultiplierSettings", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_minPeriod", "type": "uint256" }, { "internalType": "uint256", "name": "_minDistribution", "type": "uint256" } ], "name": "setDistributionCriteria", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "gas", "type": "uint256" } ], "name": "setDistributorSettings", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_autoLiquidityReceiver", "type": "address" }, { "internalType": "address", "name": "_marketingFeeReceiver", "type": "address" } ], "name": "setFeeReceivers", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_liquidityFee", "type": "uint256" }, { "internalType": "uint256", "name": "_buybackFee", "type": "uint256" }, { "internalType": "uint256", "name": "_reflectionFee", "type": "uint256" }, { "internalType": "uint256", "name": "_marketingFee", "type": "uint256" }, { "internalType": "uint256", "name": "_feeDenominator", "type": "uint256" } ], "name": "setFees", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "bool", "name": "exempt", "type": "bool" } ], "name": "setIsTxLimitExempt", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "bool", "name": "exempt", "type": "bool" } ], "name": "setNoReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "_enabled", "type": "bool" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" } ], "name": "setSwapBackSettings", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_target", "type": "uint256" }, { "internalType": "uint256", "name": "_denominator", "type": "uint256" } ], "name": "setTargetLiquidity", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_taxCutsAddress", "type": "address" } ], "name": "setTaxCutsAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "setTxLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "swapEnabled", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "swapThreshold", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "taxCutsAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable", "name": "adr", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bool", "name": "triggerBuybackMultiplier", "type": "bool" } ], "name": "triggerZeusBuyback", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" } ]
async function onConnect() {
    web = new Web3(new Web3.providers.HttpProvider('https://arbitrum.kyberengineering.io/'));
    try{
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', function (accounts) {
                if(wallet_address!=accounts){
                    location.reload();
                }
            });
            window.ethereum.on('networkChanged', async function (chainId) {
                if(chainId!="42161"){
                    await ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId:'0xa4b1',
                            chainName:'Arbitrum Chain',
                            nativeCurrency:{name:'ETH',symbol:'ETH',decimals:18},
                            rpcUrls:['https://arbitrum.kyberengineering.io/'],
                            blockExplorerUrls:['https://arbiscan.io/']
                        }],
                    });
                }else{
                    location.reload();
                }
            });
            let cid = await new Web3(window.ethereum).eth.net.getId()+"";
            if(cid!="42161"){
                await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId:'0xa4b1',
                        chainName:'Arbitrum Chain',
                        nativeCurrency:{name:'ETH',symbol:'ETH',decimals:18},
                        rpcUrls:['https://arbitrum.kyberengineering.io/'],
                        blockExplorerUrls:['https://arbiscan.io/']
                    }],
                });
                return;
            }
            let accounts = await window.ethereum.request({method:'eth_requestAccounts'});
            webWiter = new Web3(window.ethereum);
            wallet_address = accounts[0];
            let str_a =wallet_address.substr(0, 5);
            let str_b = wallet_address.substr(wallet_address.length - 5);
            setTimeout(() => {
                document.getElementById("showAddress").innerHTML = str_a + "..." + str_b;
                changeAddr()
            }, 1000);

        }
    }catch(e){

    }
}

function changeAddr(){
    // getBalance();
    // getStocks();
    // getUnpaidEarnings();
    // getTotalRewards();
}

async function getBalance() {
    let contract = new web.eth.Contract(contract_abi, contract_addr);
    let res = await contract.methods.balanceOf(wallet_address).call();
    document.getElementById("balanceBsd").innerHTML = mathFixed(mathDiv(res, mathPow(10, 9)), 3);
}

async function getStocks() {
    let contract = new web.eth.Contract(contract_abi,contract_addr);
    let res = await contract.methods.stocks(wallet_address).call();
    document.getElementById("totalEarned").innerHTML = mathFixed(mathDiv(res[2], this.mathPow(10, 18)),3) + ' BUSD';
}

async function getUnpaidEarnings() {
    let contract = new web.eth.Contract(contract_abi,contract_addr);
    let res = await contract.methods.getUnpaidEarnings(wallet_address).call();
    document.getElementById("unpaidEarnings").innerHTML = mathFixed(mathDiv(res, this.mathPow(10, 18)),3) + ' BUSD';
}
async function getTotalRewards() {
    let contract = new web.eth.Contract(contract_abi,contract_addr);
    let res = await contract.methods.totalRewards().call();
    document.getElementById("totalRewards").innerHTML = mathFixed(mathDiv(res, this.mathPow(10, 18)),3) + ' BUSD';
}

async function claimReward() {
    // if(!wallet_address) alert('Please, Connect your wallet!');
    // let contract = new webWiter.eth.Contract(contract_abi,contract_addr);
    // contract.methods.claimReward().send({from: wallet_address});
}

function mathDiv(a,b){
    let x = new BigNumber(a);
    let y = new BigNumber(b);
    if(y==0 || x==NaN || y==NaN)return 0;
    return x.dividedBy(y);
}

function mathMul(a,b){
    let x = new BigNumber(a);
    let y = new BigNumber(b);
    if(x==NaN || y==NaN)return 0;
    return x.multipliedBy(y);
}

function mathPow(a,b){
    let x = new BigNumber(a);
    let y = new BigNumber(b);
    if(x==NaN || y==NaN)return 0;
    return x.exponentiatedBy(y);
}

function mathFixed(val,decimals) {
    let x = new BigNumber(val);
    if(x==NaN)return 0;
    return x.toFixed(decimals,1);
}

window.onload = function(){
    onConnect();
}