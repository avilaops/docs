#!/bin/bash

# Arxis Documentation Build and Deploy Script

set -e

echo "🏛️  Arxis Documentation Builder"
echo "================================"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if we're in the docs directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: package.json not found. Please run this script from the docs directory.${NC}"
    exit 1
fi

# Parse command
COMMAND=${1:-build}

case $COMMAND in
    install)
        echo -e "${BLUE}📦 Installing dependencies...${NC}"
        npm install
        echo -e "${GREEN}✅ Dependencies installed${NC}"
        ;;

    start)
        echo -e "${BLUE}🚀 Starting development server...${NC}"
        npm start
        ;;

    build)
        echo -e "${BLUE}🔨 Building documentation...${NC}"
        npm run build
        echo -e "${GREEN}✅ Build complete${NC}"
        echo -e "${BLUE}📦 Output: ./build/${NC}"
        ;;

    serve)
        echo -e "${BLUE}🌐 Serving production build...${NC}"
        npm run serve
        ;;

    deploy)
        echo -e "${BLUE}🚀 Deploying to GitHub Pages...${NC}"

        # Build first
        echo -e "${BLUE}🔨 Building...${NC}"
        npm run build

        # Deploy
        echo -e "${BLUE}📤 Deploying...${NC}"
        npm run deploy

        echo -e "${GREEN}✅ Deployed to GitHub Pages${NC}"
        echo -e "${BLUE}🌐 Site will be available at: https://docs.avila.inc${NC}"
        ;;

    clean)
        echo -e "${BLUE}🧹 Cleaning build artifacts...${NC}"
        rm -rf build .docusaurus
        echo -e "${GREEN}✅ Clean complete${NC}"
        ;;

    test)
        echo -e "${BLUE}🧪 Running tests...${NC}"
        npm run build
        echo -e "${GREEN}✅ Build successful${NC}"
        ;;

    *)
        echo "Usage: $0 {install|start|build|serve|deploy|clean|test}"
        echo ""
        echo "Commands:"
        echo "  install  - Install dependencies"
        echo "  start    - Start development server"
        echo "  build    - Build production site"
        echo "  serve    - Serve production build locally"
        echo "  deploy   - Build and deploy to GitHub Pages"
        echo "  clean    - Remove build artifacts"
        echo "  test     - Test build process"
        exit 1
        ;;
esac
