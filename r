#!/bin/bash

# --- Clear the npm cache

echo ">>>>>>>> npm cache clean --force"
npm cache clean --force

echo ">>>>>>>> npm config set registry https://registry.npmjs.org/"
npm config set registry https://registry.npmjs.org/

# --- Build and link the library

echo ">>>>>>>> cd ~/git/react-better-frames"
cd ~/git/react-better-frames

echo ">>>>>>>> rm -rf node_modules"
rm -rf node_modules

echo ">>>>>>>> rm package-lock.json"
rm package-lock.json

echo ">>>>>>>> rm -rf dist"
rm -rf dist

echo ">>>>>>>> npm install"
npm install

echo ">>>>>>>> npm run build"
npm run build

echo ">>>>>>>> npm link"
npm link

# --- Build, link and start the app

cd ~/git/react-better-frames-demo
echo ">>>>>>>> cd ~/git/react-better-frames-demo"

echo ">>>>>>>> rm -rf node_modules"
rm -rf node_modules

echo ">>>>>>>> rm package-lock.json"
rm package-lock.json

echo ">>>>>>>> rm -rf dist"
rm -rf dist

echo ">>>>>>>> npm install"
npm install

echo ">>>>>>>> npm link @billdestein/react-better-frames"
npm link @billdestein/react-better-frames

echo ">>>>>>>> npm run start"
npm run start
