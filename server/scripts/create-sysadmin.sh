#!/bin/bash

echo "Creating sysadmin user..."
echo

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed or not in PATH"
    echo "Please install Node.js and try again"
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "Error: package.json not found"
    echo "Please run this script from the server directory"
    exit 1
fi

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "Warning: .env file not found"
    echo "Please make sure your database configuration is set up"
    echo
fi

# Run the Node.js script
echo "Running create-sysadmin script..."
node scripts/create-sysadmin.js

echo
echo "Script completed!"
