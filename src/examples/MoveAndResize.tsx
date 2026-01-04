import React from 'react'
import { Canvas, Frame, FrameProps } from '@billdestein/react-better-frames'
import styled from 'styled-components'

const FrameBody = styled.div`
    align-items: center;
    background-color: #023E8A;
    color: white;
    display: flex;
    font-size: 1.1em;
    height: 100%;
    justify-content: center;
`

const Applet = (frameProps: FrameProps) => {
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
  canvas.addComponent(Applet, {})
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
  const code = 'https://github.com/billdestein/react-better-frames-demo/blob/main/src/examples/MoveAndResize.tsx'
  return (
    <div>
      <h2 style={{marginTop: '5px'}}>Move and resize</h2>
      <p>All frames can be moved and resized</p>
      <p>To move a frame, click and hold the frame header, and then move your mouse.</p>
      <p>To resize a frame, click and hold a side of the frame or a corner of the frame.  Then move your mouse.</p>
      <p>Try moving and resizing the example frame here.</p>
      <a style={{color: 'lightblue'}} href={code} target="_blank" rel="noreferrer">Source Code</a>
    </div>
  )
}
