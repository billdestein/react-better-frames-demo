import React, { useEffect } from 'react'
import { Canvas } from '@billdestein/react-better-frames'
import { Frame, FrameProps } from '@billdestein/react-better-frames'
import waterfall from './images/waterfall.jpg'

const ImgStyle= {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}

const waterfallFrame: React.FunctionComponent<FrameProps> = (frameProps) => {
  const { canvas, geometry } = frameProps

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      onResize={() => {}}
      title={'Far'}
    >
      <img style={ImgStyle as any} src={waterfall} alt={"waterfall"}/>
    </Frame>
  )
}

const riverFrame: React.FunctionComponent<FrameProps> = (props) => {
  const { canvas, geometry } = props

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      onResize={() => {}}
      title={'Near'}
    >
      <img style={ImgStyle as any} src={waterfall} alt={"waterfall"}/>
    </Frame>
  )
}

const app = (canvas: Canvas) => {
  canvas.addComponent(waterfallFrame, {})
  canvas.addComponent(riverFrame, {} )
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
