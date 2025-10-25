# KeyForge 🔐

A modern, web-based Solana blockchain wallet built with Next.js. KeyForge provides a secure and user-friendly interface for managing Solana accounts, generating mnemonic phrases, and handling cryptographic keys.

## ✨ Features

- **🔑 Wallet Creation**: Generate new Solana wallets with secure mnemonic phrases
- **👥 Multiple Accounts**: Create and manage multiple accounts from a single wallet
- **🔒 Secure Key Management**: BIP39 mnemonic generation and HD key derivation
- **📋 Copy to Clipboard**: Easy copying of public and private keys
- **🌙 Dark/Light Theme**: Toggle between light and dark modes
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🛡️ Privacy First**: Private keys are masked for security

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd keyforge
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
keyforge/
├── src/
│   ├── app/
│   │   ├── context/
│   │   │   └── WalletContextProvider.jsx    # React context for wallet state
│   │   ├── layout.js                         # App layout
│   │   ├── page.js                          # Main page component
│   │   └── providers.jsx                    # App providers
│   └── components/
│       ├── Account.jsx                      # Account display component
│       ├── AddOrCreate.jsx                  # Wallet creation/import
│       ├── FilledMnemonic.jsx               # Mnemonic phrase display
│       ├── Navbar.jsx                       # Navigation bar
│       ├── ThemeSwitcher.jsx                # Theme toggle
│       └── Wallet.jsx                       # Wallet management
├── package.json
├── tailwind.config.js
└── next.config.mjs
```

## 🔧 Tech Stack

- **Framework**: Next.js 14
- **UI Library**: NextUI, Material-UI
- **Styling**: Tailwind CSS
- **Blockchain**: Solana Web3.js
- **Cryptography**: 
  - BIP39 for mnemonic generation
  - Ed25519 for key derivation
  - TweetNaCl for cryptographic operations
- **State Management**: React Context API
- **Icons**: React Icons
- **Theming**: Next Themes

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔐 Security Features

- **BIP39 Compliant**: Uses industry-standard mnemonic generation
- **HD Key Derivation**: Hierarchical deterministic key generation
- **Secure Key Storage**: Keys are stored in memory only (not persisted)
- **Private Key Masking**: Private keys are hidden by default
- **Copy Protection**: Secure clipboard operations

## 📱 Usage

### Creating a New Wallet

1. Click "Create Wallet" on the main page
2. Your mnemonic phrase will be generated and displayed
3. **Important**: Save your mnemonic phrase securely - it's the only way to recover your wallet
4. Use the toggle to show/hide the mnemonic phrase
5. Copy the mnemonic phrase to a secure location

### Managing Accounts

1. After creating a wallet, you can generate multiple accounts
2. Click "New Account" to create additional accounts
3. Each account has its own public and private key pair
4. Copy keys using the copy buttons next to each key

### Key Information

- **Public Key**: Your wallet address (safe to share)
- **Private Key**: Your secret key (never share this)
- **Mnemonic Phrase**: 24-word recovery phrase (store securely)

## ⚠️ Important Security Notes

- **Never share your private keys or mnemonic phrase**
- **Store your mnemonic phrase in a secure location**
- **This is a client-side application - keys are not stored on any server**
- **Always verify you're on the correct domain before entering sensitive information**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Solana Foundation for the blockchain infrastructure
- BIP39 standard for mnemonic generation
- NextUI and Material-UI for the beautiful components
- The open-source community for the amazing tools and libraries

## 📞 Support

If you encounter any issues or have questions, please:

1. Check the [Issues](https://github.com/your-username/keyforge/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

---

**⚠️ Disclaimer**: This software is for educational and development purposes. Always use official wallets for production use and large amounts of cryptocurrency.