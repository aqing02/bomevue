export const contractAbi = [{
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"internalType": "uint8",
		"name": "version",
		"type": "uint8"
	}],
	"name": "Initialized",
	"type": "event"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "token",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "dataType",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "orderNo",
		"type": "uint256"
	}],
	"name": "deposit",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "idStart",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "ids_",
		"type": "address"
	}],
	"name": "initialize",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}],
	"name": "isOwner",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"internalType": "bool",
		"name": "auth",
		"type": "bool"
	}],
	"name": "setOwner",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "to",
		"type": "address"
	}],
	"name": "withdrawBNB",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "token",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}, {
		"internalType": "address",
		"name": "to",
		"type": "address"
	}],
	"name": "withdrawToken",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "token",
		"type": "address"
	}, {
		"internalType": "address[]",
		"name": "tos",
		"type": "address[]"
	}],
	"name": "withdrawTokenToArr",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}]