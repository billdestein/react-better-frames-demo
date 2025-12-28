import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Canvas } from '@billdestein/react-better-frames'
import { Frame, Geometry } from '@billdestein/react-better-frames'
import waterfall from './images/waterfall.jpg'

// const StyledImage = styled.img`
//   width: 100px;
//   height: auto; /* Maintain aspect ratio */
//   border-radius: 50%; /* Example style */
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

const StyledImage = styled.img`
`;

interface ImplementationProps {
  canvas: Canvas
  geometry: Geometry
}

const waterfallFrame: React.FunctionComponent<any> = (props) => {
  const { canvas, geometry } = props as ImplementationProps

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      onResize={() => {}}
      title={'Far'}
    >
      <StyledImage src={waterfall} alt={"waterfall"}/>
    </Frame>
  )
}

const riverFrame: React.FunctionComponent<any> = (props) => {
  const { canvas, geometry } = props

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      onResize={() => {}}
      title={'Near'}
    >
      <StyledImage src={waterfall} alt={"waterfall"}/>
    </Frame>
  )
}

const app = (canvas: Canvas) => {
  canvas.addFrame(waterfallFrame, { canvas })
  canvas.addFrame(riverFrame, { canvas })
}

export const Images: React.FC = () => {
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


export const ImagesMarkdown: string = `
# Images  

Frames can contain images.  
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
