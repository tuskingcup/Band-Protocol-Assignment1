const axios = require('axios');

class TransactionClient {
    constructor() {
        this.broadcastUrl = 'https://mock-node-wgqbnxruha-as.a.run.app/broadcast';
        this.statusUrl = 'https://mock-node-wgqbnxruha-as.a.run.app/check/';
    }

    async broadcastTransaction(symbol, price, timestamp) {
        try {
            const response = await axios.post(this.broadcastUrl, {
                symbol: symbol,
                price: price,
                timestamp: timestamp
            });
            return response.data.tx_hash;
        } catch (error) {
            console.error('Error broadcasting transaction:', error.message);
            throw error;
        }
    }

    async checkTransactionStatus(txHash) {
        try {
            const response = await axios.get(`${this.statusUrl}${txHash}`);
            return response.data.tx_status;
        } catch (error) {
            console.error('Error checking transaction status:', error.message);
            throw error;
        }
    }

    async monitorTransaction(txHash, interval = 5000) {
        return new Promise((resolve, reject) => {
            const checkStatus = async () => {
                try {
                    const status = await this.checkTransactionStatus(txHash);
                    console.log(`Transaction status: ${status}`);
                    if (status === 'CONFIRMED') {
                        resolve('Transaction is confirmed');
                    } else if (status === 'FAILED') {
                        resolve('Transaction has failed');
                    } else if (status === 'DNE') {
                        resolve('Transaction does not exist');
                    } else {
                        setTimeout(checkStatus, interval);
                    }
                } catch (error) {
                    reject('Error while monitoring transaction: ' + error.message);
                }
            };
            checkStatus();
        });
    }
}

module.exports = TransactionClient;
