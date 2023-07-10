---
sidebar_label: account
title: iota_sdk.wallet.account
---

## Account Objects

```python
class Account()
```

### prepare_burn

```python
def prepare_burn(burn: Burn, options=None)
```

A generic `prepare_burn()` function that can be used to prepare the burn of native tokens, nfts, foundries and aliases.

### prepare_burn_native_token

```python
def prepare_burn_native_token(token_id: HexStr,
                              burn_amount: int,
                              options=None)
```

Burn native tokens. This doesn&#x27;t require the foundry output which minted them, but will not increase
the foundries `melted_tokens` field, which makes it impossible to destroy the foundry output. Therefore it&#x27;s
recommended to use melting, if the foundry output is available.

### prepare_burn_nft

```python
def prepare_burn_nft(nft_id: HexStr, options=None)
```

Burn an nft output.

### prepare_consolidate_outputs

```python
def prepare_consolidate_outputs(
        force: bool, output_consolidation_threshold: Optional[int] = None)
```

Consolidate outputs.

### prepare_create_alias_output

```python
def prepare_create_alias_output(params, options)
```

Create an alias output.

### prepare_destroy_alias

```python
def prepare_destroy_alias(alias_id: HexStr, options=None)
```

Destroy an alias output.

### prepare_destroy_foundry

```python
def prepare_destroy_foundry(foundry_id: HexStr, options=None)
```

Destroy a foundry output with a circulating supply of 0.

### generate_ed25519_addresses

```python
def generate_ed25519_addresses(amount: int, options=None)
```

Generate new addresses.

### claimable_outputs

```python
def claimable_outputs(outputs_to_claim: List[OutputId])
```

Get outputs with additional unlock conditions.

### get_output

```python
def get_output(output_id: OutputId)
```

Get output.

### get_transaction

```python
def get_transaction(transaction_id: HexStr)
```

Get transaction.

### addresses

```python
def addresses()
```

List addresses.

### addresses_with_unspent_outputs

```python
def addresses_with_unspent_outputs()
```

Returns only addresses of the account with unspent outputs.

### outputs

```python
def outputs(filter_options=None)
```

Returns all outputs of the account.

### unspent_outputs

```python
def unspent_outputs(filter_options=None)
```

Returns all unspent outputs of the account.

### incoming_transactions

```python
def incoming_transactions()
```

Returns all incoming transactions of the account.

### transactions

```python
def transactions()
```

Returns all transaction of the account.

### pending_transactions

```python
def pending_transactions()
```

Returns all pending transactions of the account.

### prepare_create_native_token

```python
def prepare_create_native_token(params, options=None)
```

Create a native token.

### prepare_melt_native_token

```python
def prepare_melt_native_token(token_id: HexStr,
                              melt_amount: int,
                              options=None)
```

Melt native tokens. This happens with the foundry output which minted them, by increasing it&#x27;s
`melted_tokens` field.

### prepare_mint_native_token

```python
def prepare_mint_native_token(token_id: HexStr,
                              mint_amount: int,
                              options=None)
```

Mint additional native tokens.

### minimum_required_storage_deposit

```python
def minimum_required_storage_deposit(output)
```

Minimum required storage deposit.

### prepare_mint_nfts

```python
def prepare_mint_nfts(params, options=None)
```

Mint nfts.

### get_balance

```python
def get_balance()
```

Get account balance information.

### prepare_output

```python
def prepare_output(output_options, transaction_options=None)
```

Prepare an output for sending
If the amount is below the minimum required storage deposit, by default the remaining amount will automatically
be added with a StorageDepositReturn UnlockCondition, when setting the ReturnStrategy to `gift`, the full
minimum required storage deposit will be sent to the recipient.
When the assets contain an nft_id, the data from the existing nft output will be used, just with the address
unlock conditions replaced

### prepare_send_amount

```python
def prepare_send_amount(params, options=None)
```

Prepare send amount.

### prepare_transaction

```python
def prepare_transaction(outputs, options=None)
```

Prepare transaction.

### retry_transaction_until_included

```python
def retry_transaction_until_included(transaction_id: HexStr,
                                     interval=None,
                                     max_attempts=None)
```

Retries (promotes or reattaches) a transaction sent from the account for a provided transaction id until it&#x27;s
included (referenced by a milestone). Returns the included block id.

### sync

```python
def sync(options=None)
```

Sync the account by fetching new information from the nodes.
Will also retry pending transactions and consolidate outputs if necessary.
A custom default can be set using set_default_sync_options

### send_amount

```python
def send_amount(params, options=None)
```

Send amount.

### prepare_send_native_tokens

```python
def prepare_send_native_tokens(params, options=None)
```

Send native tokens.

### prepare_send_nft

```python
def prepare_send_nft(params, options=None)
```

Send nft.

### set_alias

```python
def set_alias(alias: str)
```

Set alias.

### set_default_sync_options

```python
def set_default_sync_options(options)
```

Set the fallback SyncOptions for account syncing.
If storage is enabled, will persist during restarts.

### sign_transaction_essence

```python
def sign_transaction_essence(prepared_transaction_data)
```

Sign a transaction essence.

### sign_and_submit_transaction

```python
def sign_and_submit_transaction(prepared_transaction_data)
```

Validate the transaction, sign it, submit it to a node and store it in the account.

### submit_and_store_transaction

```python
def submit_and_store_transaction(signed_transaction_data)
```

Submit and store transaction.

### claim_outputs

```python
def claim_outputs(output_ids_to_claim: List[OutputId])
```

Claim outputs.

### send_outputs

```python
def send_outputs(outputs, options=None)
```

Send outputs in a transaction.