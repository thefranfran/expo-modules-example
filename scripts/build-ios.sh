#!/bin/bash

echo "Building iOS..."
cd ios
pod install
cd ..
npx react-native run-ios