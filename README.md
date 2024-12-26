# React Router Template

A modern, production-ready template for building full-stack React applications with React Router. This template provides a solid foundation for creating scalable and maintainable web applications with best practices baked in.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## ✨ Features

- 🚀 **Server-side rendering** for optimal performance and SEO
- ⚡️ **Hot Module Replacement (HMR)** for rapid development
- 📦 **Asset bundling and optimization** using modern build tools
- 🔄 **Data loading and mutations** with built-in utilities
- 🔒 **TypeScript** for type safety and better developer experience
- 🎨 **TailwindCSS** for modern, utility-first styling
- 📱 **Responsive design** out of the box
- 🔍 **SEO-friendly** structure
- 📖 **Comprehensive documentation** via [React Router docs](https://reactrouter.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <your-repo-name>
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
bun install
```

### Development

Start the development server with hot reload:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## 🏗️ Building for Production

Create an optimized production build:

```bash
npm run build
```

## 🚢 Deployment

### Docker Deployment

Choose the appropriate Dockerfile based on your package manager:

```bash
# For npm
docker build -t my-app .

# For pnpm
docker build -f Dockerfile.pnpm -t my-app .

# For bun
docker build -f Dockerfile.bun -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

### Cloud Platform Deployment

The application can be deployed to various cloud platforms:

- **AWS ECS**: Perfect for containerized applications
- **Google Cloud Run**: Serverless container deployment
- **Azure Container Apps**: Managed container service
- **Digital Ocean App Platform**: Simple PaaS solution
- **Fly.io**: Global deployment made easy
- **Railway**: Zero-config deployment platform

### Manual Deployment

For manual deployment, ensure you deploy the build output:

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## 🎨 Styling

This template uses [Tailwind CSS](https://tailwindcss.com/) for styling. You can:

- Use utility classes directly in your JSX
- Create custom components with @apply directives
- Extend the default theme in `tailwind.config.js`
- Add your own CSS in `src/styles/`

## 🔧 Troubleshooting

Common issues and solutions:

1. **Port already in use**: Kill the process using the port or change the port in the configuration
2. **Build failures**: Ensure all dependencies are installed and Node.js version is compatible
3. **HMR not working**: Check if your file changes are being watched correctly

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using React Router. For more information, visit [React Router Documentation](https://reactrouter.com/).
