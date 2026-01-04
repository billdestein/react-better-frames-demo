import React from 'react'
import { Canvas } from '@billdestein/react-better-frames'
import { Frame, FrameProps } from '@billdestein/react-better-frames'
import styled from "styled-components";

const FarFrameBody = styled.div`
    align-items: center;
    background-color: #023E8A;
    color: white;
    display: flex;
    font-size: 1.1em;
    height: 100%;
    justify-content: center;
`

const NearFrameBody = styled.div`
    align-items: center;
    background-color: #0077B6;
    color: white;
    display: flex;
    font-size: 1.1em;
    height: 100%;
    justify-content: center;
`

const FarApplet = (frameProps: FrameProps) => {
  const { canvas, geometry } = frameProps

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      onResize={() => {}}
      title={'Far'}
    >
      <FarFrameBody>Far</FarFrameBody>
    </Frame>
  )
}

const NearApplet = (frameProps: FrameProps) => {
  const { canvas, geometry } = frameProps

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      onResize={() => {}}
      title={'Near'}
    >
      <NearFrameBody>Near</NearFrameBody>
    </Frame>
  )
}

const app = (canvas: Canvas) => {
  canvas.addComponent(FarApplet, {})
  canvas.addComponent(NearApplet, {})
}

export const Restack = () => {
  const ready = () => {
    const element = document.getElementById('container')
    const canvas = new Canvas(element)
    app(canvas)
  }

  return (
    <div ref={ready} style={{ height: '100vh' }} id="container">
    </div>
  );
}

export const RestackMarkdown = () => {
  const code = 'https://github.com/billdestein/react-better-frames-demo/blob/main/src/examples/Restack.tsx'
  return (
    <div>
      <h2 style={{marginTop: '5px'}}>Restack</h2>
      <p>All frames are restackable.</p>
      <p>Clicking on a frame causes that frame to move to the front of the stack.</p>
      <p>Click on the 'Far' frame here and see it move to the front of the stack.</p>
      <a style={{color: 'lightblue'}} href={code} target="_blank" rel="noreferrer">Source Code</a>
    </div>
  )
}
