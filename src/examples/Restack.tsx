import React from 'react'
import { Canvas } from '@billdestein/react-better-frames'
import { Frame, FrameProps } from '@billdestein/react-better-frames'
import styled from "styled-components";

const FarFrameBody = styled.div`
    align-items: center;
    background-color: #004526;
    color: white;
    display: flex;
    font-size: 1.1em;
    height: 100%;
    justify-content: center;
`

const NearFrameBody = styled.div`
    align-items: center;
    background-color: #000055;
    color: white;
    display: flex;
    font-size: 1.1em;
    height: 100%;
    justify-content: center;
`

const far = (frameProps: FrameProps) => {
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

const near = (frameProps: FrameProps) => {
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
  canvas.addComponent(far, {})
  canvas.addComponent(near, {})
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
  return (
    <div>
      <h2>Restsck</h2>
      <p>All frames are restackable.</p>
      <p>Clicking on a frame causes the frame to move to the front of the stack.</p>
    </div>
  )
}
