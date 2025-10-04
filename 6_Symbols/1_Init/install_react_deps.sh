#!/bin/bash
# This script navigates to the React application directory and installs its dependencies.

echo "Navigating to 6_Symbols/4_UI and running npm install..."

# Get the directory of the script itself
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Navigate to the project root from the script location and then to the UI folder
cd "$SCRIPT_DIR/../.."
cd 6_Symbols/4_UI

# Run npm install
npm install

echo "Installation complete."
