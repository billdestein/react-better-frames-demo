import React, { useEffect } from 'react'
import { Canvas } from '@billdestein/react-better-frames'
import { Frame, FrameProps } from '@billdestein/react-better-frames'
// import styled from 'styled-components'

const Component: React.FC<FrameProps> = (frameProps) => {
  const { canvas, geometry } = frameProps

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      onResize={() => {}}
      title={'Move and resize'}
    >
      <div>Move and resize</div>
    </Frame>
  )
}

const app = (canvas: Canvas) => {
  canvas.addComponent(Component, {})
}

export const MoveAndResize: React.FC = () => {
  useEffect(() => {
    const element = document.getElementById('container')
    const canvas = new Canvas(element)
    app(canvas)
  }, []);

  return (
    <div style={{ height: '100vh' }} id="container">
    </div>
  );
}

export const MoveAndResizeMarkdown: React.FC = () => {
  return (
    <div>
      <h2>Move and resize</h2>
      <p>All frames can be moved and resized</p>
      <p>To move a frame, simply grab the frame header and move your mouse.</p>
      <p>To resize a frame, simply grab on a corner or side of the mouse, and move your mouse.</p>
    </div>
  )
}
