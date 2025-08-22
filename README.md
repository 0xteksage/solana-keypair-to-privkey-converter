# Solana Keypair to Private Key Converter

Convert Solana wallet keypair JSON files to private key format.


## Prerequisites: Installing Solana CLI

### Windows

1. **Install Git Bash or WSL (Windows Subsystem for Linux):**
	- [Git Bash Download](https://git-scm.com/downloads)
	- [WSL Setup Guide](https://learn.microsoft.com/en-us/windows/wsl/install)

2. **Open Git Bash or WSL terminal.**

3. **Run the Solana installer:**
	```sh
	sh -c "$(curl -sSfL https://release.solana.com/v1.18.14/install)"
	```

4. **Add Solana to your PATH (if not automatically added):**
	- The installer will suggest a path to add. Example:
	  ```sh
	  export PATH="$HOME/.local/share/solana/install/active_release/bin:$PATH"
	  ```
	- Add this line to your `~/.bashrc` or `~/.zshrc` and restart your terminal.

5. **Verify installation:**
	```sh
	solana --version
	```

### MacOS

1. **Open Terminal.**

2. **Run the Solana installer:**
	```sh
	sh -c "$(curl -sSfL https://release.solana.com/v1.18.14/install)"
	```

3. **Add Solana to your PATH (if not automatically added):**
	- The installer will suggest a path to add. Example:
	  ```sh
	  export PATH="$HOME/.local/share/solana/install/active_release/bin:$PATH"
	  ```
	- Add this line to your `~/.bash_profile` or `~/.zshrc` and restart your terminal.

4. **Verify installation:**
	```sh
	solana --version
	```

## Keypair Generation

Generate a keypair with custom patterns using:

```sh
solana-keygen grind --starts-and-ends-with x:x:1 --ignore-case
```

## Usage

1. Place your Solana keypair JSON file(s) in the `wallets/` folder.
2. Run the converter:

```sh
node converter.js <filename-without-extension>
```

Example:

```sh
node converter.js 7JvQh3X2pLw9sT5bG8fRkYzV1aQeW6uP4cSdXjLmN0o
```

## Output

The script will print the private key to the console.

---

**Note:**
- Only use this tool with your own keypairs. Keep your private keys secure!