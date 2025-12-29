import React from 'react'
import { Canvas } from '@billdestein/react-better-frames'
import { Frame, FrameProps } from '@billdestein/react-better-frames'

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
      <p>Far</p>
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
      <p>Near</p>
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
      <h2>Move and resize</h2>
      <br/>
      <p>All frames can be moved and resized</p>
      <br/>
      <p>To move a frame, simply grab the frame header and move your mouse.</p>
      <br/>
      <p>To resize a frame, simply grab on a corner or side of the mouse, and move your mouse.</p>
    </div>
  )
}
