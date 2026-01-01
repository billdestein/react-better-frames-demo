#!/bin/bash

echo ">>>>>>>> npm config set registry https://registry.npmjs.org/"
npm config set registry https://registry.npmjs.org/

#----------------------------------------------------------------------------------------------------
# Build the package
#----------------------------------------------------------------------------------------------------

echo ">>>>>>>> cd ~/git/react-better-frames"
cd ~/git/react-better-frames

echo ">>>>>>>> rm -rf node_modules"
rm -rf node_modules

echo ">>>>>>>> rm package-lock.json"
rm package-lock.json

echo ">>>>>>>> rm -rf dist"
rm -rf dist

echo ">>>>>>>> npm cache clean --force"
npm cache clean --force

echo ">>>>>>>> npm install"
npm install

echo ">>>>>>>> npm run build"
npm run build

#----------------------------------------------------------------------------------------------------
# Build the app
#----------------------------------------------------------------------------------------------------

echo ">>>>>>>> cd ~/git/react-better-frames-demo"
cd ~/git/react-better-frames-demo

echo ">>>>>>>> rm -rf node_modules"
rm -rf node_modules

echo ">>>>>>>> rm package-lock.json"
rm package-lock.json

echo ">>>>>>>> npm cache clean --force"
npm cache clean --force

echo ">>>>>>>> npm install"
npm install

#----------------------------------------------------------------------------------------------------
# Cause the app to use the local package (not the one on NPM)
#----------------------------------------------------------------------------------------------------

echo ">>>>>>>> rm -rf /Users/bill/git/react-better-frames-demo/node_modules/@billdestein"
rm -rf /Users/bill/git/react-better-frames-demo/node_modules/@billdestein

echo ">>>>>>>> mkdir /Users/bill/git/react-better-frames-demo/node_modules/@billdestein"
mkdir /Users/bill/git/react-better-frames-demo/node_modules/@billdestein

echo ">>>>>>>> ln -s /Users/bill/git/react-better-frames /Users/bill/git/react-better-frames-demo/node_modules/@billdestein/react-better-frames"
ln -s /Users/bill/git/react-better-frames /Users/bill/git/react-better-frames-demo/node_modules/@billdestein/react-better-frames

#----------------------------------------------------------------------------------------------------
# Cause the package to use the app's react and react-dom
#----------------------------------------------------------------------------------------------------

echo ">>>>>>>> cd ~/git/react-better-frames/node_modules"
cd ~/git/react-better-frames/node_modules

echo ">>>>>>>> rm -rf react"
rm -rf react

echo ">>>>>>>> rm -rf react-dom"
rm -rf react-dom

echo ">>>>>>>> rm -rf @types/react"
rm -rf @types/react

echo ">>>>>>>> rm -rf @types/react-dom"
rm -rf @types/react-dom

echo ">>>>>>>> ln -s ~/git/react-better-frames-demo/node_modules/react react"
ln -s ~/git/react-better-frames-demo/node_modules/react react

echo ">>>>>>>> ln -s ~/git/react-better-frames-demo/node_modules/react-dom react-dom"
ln -s ~/git/react-better-frames-demo/node_modules/react-dom react-dom

echo ">>>>>>>> ln -s ~/git/react-better-frames-demo/node_modules/@types/react @types/react"
ln -s ~/git/react-better-frames-demo/node_modules/@types/react @types/react

echo ">>>>>>>> ln -s ~/git/react-better-frames-demo/node_modules/@types/react-dom @types/react-dom"
ln -s ~/git/react-better-frames-demo/node_modules/@types/react-dom @types/react-dom

#----------------------------------------------------------------------------------------------------
# Start the dev server
#----------------------------------------------------------------------------------------------------

echo ">>>>>>>> cd ~/git/react-better-frames-demo"
cd ~/git/react-better-frames-demo

echo ">>>>>>>> npm run start"
npm run start
