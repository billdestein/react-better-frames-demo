#!/bin/bash

echo ">>>>>>>> npm config set registry https://registry.npmjs.org/"
npm config set registry https://registry.npmjs.org/

# --- Build and link the library

echo ">>>>>>>> cd ~/git/react-better-frames"
cd ~/git/react-better-frames

#echo ">>>>>>>> rm -rf node_modules"
#rm -rf node_modules
#
#echo ">>>>>>>> rm package-lock.json"
#rm package-lock.json
#
#echo ">>>>>>>> rm -rf dist"
#rm -rf dist
#
#echo ">>>>>>>> npm cache clean --force"
#npm cache clean --force
#
#echo ">>>>>>>> npm install"
#npm install

echo ">>>>>>>> npm run build"
npm run build

# --- Build, link and start the app

echo ">>>>>>>> cd ~/git/react-better-frames-demo"
cd ~/git/react-better-frames-demo

echo ">>>>>>>> rm -rf node_modules"
rm -rf node_modules

echo ">>>>>>>> rm package-lock.json"
rm package-lock.json

echo ">>>>>>>> rm -rf dist"
rm -rf dist

echo ">>>>>>>> npm install"
npm install

echo ">>>>>>>> rm -rf /Users/bill/git/react-better-frames-demo/node_modules/@billdestein"
rm -rf /Users/bill/git/react-better-frames-demo/node_modules/@billdestein

echo ">>>>>>>> mkdir /Users/bill/git/react-better-frames-demo/node_modules/@billdestein"
mkdir /Users/bill/git/react-better-frames-demo/node_modules/@billdestein

echo ">>>>>>>> ln -s /Users/bill/git/react-better-frames /Users/bill/git/react-better-frames-demo/node_modules/@billdestein/react-better-frames"
ln -s /Users/bill/git/react-better-frames /Users/bill/git/react-better-frames-demo/node_modules/@billdestein/react-better-frames

echo ">>>>>>>> npm run start"
npm run start
