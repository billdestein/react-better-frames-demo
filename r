#!/bin/bash

cd ~/git/react-better-frames
rm -rf node_modules
rm -rf dist
pnpm install
pnpm run build
npm link

cd ~/git/react-better-frames-demo
rm -rf node_modules
rm -rf dist
pnpm install
npm link react-better-frames
npm run start