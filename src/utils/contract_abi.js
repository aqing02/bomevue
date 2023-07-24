export const contract_abi = [{
		"inputs": [],
		"name": "TransferFail",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [{
			"indexed": false,
			"internalType": "address",
			"name": "newDepositData",
			"type": "address"
		}],
		"name": "ChangeDepositData",
		"type": "event"
	},
	{
		"inputs": [{
			"internalType": "address",
			"name": "_newDepositData",
			"type": "address"
		}],
		"name": "changeDepositData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_orderNo",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_dataType",
				"type": "uint256"
			}
		],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "withdrawToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]