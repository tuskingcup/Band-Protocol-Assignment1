//import module
const TransactionClient = require('./TransactionClient');
//create an instance
const client = new TransactionClient();

async function main() {
    const symbol = 'ETH';
    const price = 4500;
    const timestamp = Math.floor(Date.now() / 1000); // current Unix timestamp

    try {
        //Broadcast a Transaction
        const txHash = await client.broadcastTransaction(symbol, price, timestamp);
        console.log('Transaction Hash:', txHash);

        //Monitor a Transaction:
        const status = await client.monitorTransaction(txHash);
        console.log('Final Status:', status);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();
