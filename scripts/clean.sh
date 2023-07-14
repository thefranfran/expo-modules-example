#!/bin/bash

echo "Cleaning cache..."
watchman watch-del-all
rm -rf node_modules/
rm -rf /tmp/metro-*
rm -rf /tmp/haste-map-react-native-packager-*

echo "Installing dependencies..."
yarn

echo "Cleaning completed. You can now rebuild your project."