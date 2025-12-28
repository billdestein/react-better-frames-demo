import React, { useEffect } from 'react'
import { Canvas } from '@billdestein/react-better-frames'
import { Frame } from '@billdestein/react-better-frames'

interface ImplementationProps {
  canvas: Canvas
}

const farFrame: React.FunctionComponent<any> = (props) => {
  const { canvas } = props as ImplementationProps
  const { geometry } = props

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

const nearFrame: React.FunctionComponent<any> = (props) => {
  const { canvas } = props as ImplementationProps
  const { geometry } = props

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
  canvas.addFrame(farFrame, { canvas })
  canvas.addFrame(nearFrame, { canvas })
}

interface Props {
}

export const Restack: React.FunctionComponent<Props> = (props) => {
  void props

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


export const RestackMarkdown: string = `
# Restack  

All frames are restackable.  
`










// import React from 'react'
// import { Canvas } from '@billdestein/react-better-frames'
// import { Frame } from '@billdestein/react-better-frames'
// import { type Geometry } from '@billdestein/react-better-frames'
//
// export function Restack(): React.JSX.Element {
//   const div = document.getElementById('container')
//   const canvas = new Canvas()
//   canvas.initialize(div)
//
//   const renderFar = (): React.JSX.Element => {
//     const geometry: Geometry = {
//       height: 200,
//       width: 300,
//       x: 100,
//       y: 100,
//       z: 100
//     }
//
//     return (
//       <Frame
//         buttons={[]}
//         canvas={canvas}
//         geometry={geometry}
//         onResize={() => {}}
//         title={'Restack'}
//       >
//         <div>far</div>
//       </Frame>
//     )
//   }
//
//   const renderNear = (): React.JSX.Element => {
//     const geometry: Geometry = {
//       height: 200,
//       width: 300,
//       x: 200,
//       y: 200,
//       z: 200
//     }
//
//     return (
//       <Frame
//         buttons={[]}
//         canvas={canvas}
//         geometry={geometry}
//         onResize={() => {}}
//         title={'Restack'}
//       >
//         <div>near</div>
//       </Frame>
//     )
//   }
//
//
//   return (
//     <div>
//       { renderFar() }
//       { renderNear() }
//     </div>
//   )
// }
