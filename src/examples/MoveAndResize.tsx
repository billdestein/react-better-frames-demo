import React, { useEffect } from 'react'
import { Canvas } from '@billdestein/react-better-frames'
import { Frame } from '@billdestein/react-better-frames'
import { type Geometry } from '@billdestein/react-better-frames'

interface ImplementationProps {
    canvas: Canvas
}

const Implementation: React.FunctionComponent<any> = (props) => {
  const { canvas } = props as ImplementationProps

  const geometry: Geometry = {
    height: 200,
    width: 300,
    x: 100,
    y: 100,
    z: 100
  }

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      onResize={() => {}}
      title={'Move and Resize'}
    >
      <p>Frame</p>
    </Frame>
  )
}

interface Props {
}

export const MoveAndResize: React.FunctionComponent<Props> = (props) => {
  void props

  useEffect(() => {
    const element = document.getElementById('container')
    const canvas = new Canvas(element)
    canvas.addFrame(Implementation, { canvas })
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


// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components'
// import { Canvas } from '@billdestein/react-better-frames'
// import { Frame } from '@billdestein/react-better-frames'
// import type { Geometry } from '@billdestein/react-better-frames'
//
//   const geometry: Geometry = {
//     height: 200,
//     width: 300,
//     x: 100,
//     y: 100,
//     z: 100
//   }
//
// const Container = styled.div`
//     color: white;
// `
//
// export function MoveAndResize(): React.JSX.Element {
//   const [ canvas, setCanvas ] = useState<Canvas | null>(null)
//   void canvas
//   void setCanvas
//
//   const effect = () => {
//     console.log('xxx effect')
//
//     if (canvas === null) {
//       const element = document.getElementById('container')
//       const newCanvas = new Canvas()
//       newCanvas.initialize(element)
//       setCanvas(newCanvas)
//     }
//   }
//
//   useEffect(effect, [ canvas ])
//
//   const renderFrame = (): React.JSX.Element => {
//     if (Canvas === null) {
//       return <div>null</div>
//     }
//
//     // return (
//     //   <div>div</div>
//     // )
//
//     return (
//       <Frame
//         buttons={[]}
//         canvas={canvas as Canvas}
//         geometry={geometry}
//         onResize={() => {}}
//         title={'Move and Resize'}
//       >
//         <p>Frame</p>
//       </Frame>
//     )
//   }
//
//   return (
//     <Container id={"container"}>
//       { renderFrame() }
//     </Container>
//   )
// }






// import React from 'react'
// import styled from 'styled-components'
// import { Canvas } from '@billdestein/react-better-frames'
// import { Frame } from '@billdestein/react-better-frames'
// import type { Geometry } from '@billdestein/react-better-frames'
//
// const Content = styled.div`
//     align-items: center;
//     display: flex;
//     height: 100%;
//     justify-content: center;
// `
//
// export function MoveAndResize(): React.JSX.Element {
//   const div = document.getElementById('container')
//   const canvas = new Canvas()
//   canvas.initialize(div)
//
//   const geometry: Geometry = {
//     height: 200,
//     width: 300,
//     x: 100,
//     y: 100,
//     z: 100
//   }
//
//   const renderContent = (): React.JSX.Element => {
//     return <Content>Move and Resize</Content>
//   }
//
//   return (
//     <div id=container>
//       <Frame
//         buttons={[]}
//         canvas={canvas}
//         geometry={geometry}
//         onResize={() => {}}
//         title={'Move and Resize'}
//       >
//         { renderContent() }
//       </Frame>
//     </div>
//   )
// }


