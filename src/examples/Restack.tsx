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

const Far = (frameProps: FrameProps) => {
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

const Near = (frameProps: FrameProps) => {
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
  canvas.addComponent(Far, {})
  canvas.addComponent(Near, {})
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
      <h2>Restack</h2>
      <p>All frames are restackable.</p>
      <p>Clicking on a frame causes that frame to move to the front of the stack.</p>
    </div>
  )
}
