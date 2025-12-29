import React, { useEffect } from 'react'
// import ButtonIcons from './ButtonIcons'
import { Canvas } from '@billdestein/react-better-frames'
import { Frame, FrameProps } from '@billdestein/react-better-frames'

// export type Button = {
//   icon: React.JSX.Element
//   onClick: () => void
//   tip: string
// }

const Component: React.FunctionComponent<FrameProps> = (frameProps) => {
  const { canvas, geometry } = frameProps

  // const buttonClicked = () => {
  //   alert('button clicked')
  // }

  // const buttons: Button[] = [
  //   {
  //     icon: ButtonIcons.x,
  //     onClick: buttonClicked,
  //     tip: 'Cancel'
  //   }
  // ]

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      onResize={() => {}}
      title={'Move and resize'}
    >
      <p>Move and resize</p>
    </Frame>
  )
}

const app = (canvas: Canvas) => {
  canvas.addComponent(Component, {})
}

export const Buttons: React.FC = () => {
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

export const ButtonsMarkdown: React.FC = () => {
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
