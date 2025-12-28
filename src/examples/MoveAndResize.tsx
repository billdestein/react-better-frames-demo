import React, { useEffect } from 'react'
import { Canvas } from '@billdestein/react-better-frames'
import { Frame, FrameProps } from '@billdestein/react-better-frames'

const Component: React.FunctionComponent<FrameProps> = (frameProps) => {
  const { canvas, geometry } = frameProps

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

export const MoveAndResizeMarkdown: string = `
# Move and resize  

All frames can be moved and resized.  

To move a frame, simply grab the frame header and move your mouse.  

To resize a frame, simply grab on a corner or side of the mouse, and move your mouse.
`










// import React, { useEffect } from 'react'
// import { Canvas } from '@billdestein/react-better-frames'
// import { Frame } from '@billdestein/react-better-frames'
// import { type Geometry } from '@billdestein/react-better-frames'
//
// interface ImplementationProps {
//     canvas: Canvas
// }
//
// const Implementation: React.FunctionComponent<any> = (props) => {
//   const { canvas } = props as ImplementationProps
//
//   const geometry: Geometry = {
//     height: 200,
//     width: 300,
//     x: 100,
//     y: 100,
//     z: 100
//   }
//
//   return (
//     <Frame
//       buttons={[]}
//       canvas={canvas as Canvas}
//       geometry={geometry}
//       onResize={() => {}}
//       title={'Move and Resize'}
//     >
//       <p>Frame</p>
//     </Frame>
//   )
// }
//
// interface Props {
// }
//
// export const MoveAndResize: React.FunctionComponent<Props> = (props) => {
//   void props
//
//   useEffect(() => {
//     const element = document.getElementById('container')
//     const canvas = new Canvas(element)
//     canvas.addFrame(Implementation, { canvas })
//   }, []);
//
//   return (
//     <div style={{ height: '100vh' }} id="container">
//     </div>
//   );
// }
//
//
// export const MoveAndResizeMarkdown: string = `
// # Move and resize
//
// All frames can be moved and resized.
//
// To move a frame, simply grab the frame header and move your mouse.
//
// To resize a frame, simply grab on a corner or side of the mouse, and move your mouse.
// `
