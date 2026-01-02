import React from 'react'
import { Canvas, Frame, FrameProps } from '@billdestein/react-better-frames'
import styled from 'styled-components'

const FrameBody = styled.div`
    align-items: center;
    background-color: #004526;
    color: white;
    display: flex;
    font-size: 1.1em;
    height: 100%;
    justify-content: center;
`

const Component = (frameProps: FrameProps) => {
  const { canvas, geometry } = frameProps

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      onResize={() => {}}
      title={'Move and resize'}
    >
      <FrameBody>Move and resize</FrameBody>
    </Frame>
  )
}

const app = (canvas: Canvas) => {
  canvas.addComponent(Component, {})
}

export const MoveAndResize = () => {
  const ready = () => {
    const element = document.getElementById('container')
    const canvas = new Canvas(element)
    app(canvas)
  }

  return (
    <div ref={ready} style={{ height: '100vh' }} id="container"/>
  );
}

export const MoveAndResizeMarkdown = () => {
  return (
    <div>
      <h2>Move and resize</h2>
      <p>All frames can be moved and resized</p>
      <p>To move a frame, click and hold the frame header, and then move your mouse.</p>
      <p>To resize a frame, click and hold a side of the frame or a corner of the frame.  Then move your mouse.</p>
    </div>
  )
}
