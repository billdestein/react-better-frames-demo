import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Canvas } from '@billdestein/react-better-frames'

const Container = styled.div`
    color: white;
    height: 100vh;
`

interface Props {
}

const Implementation: React.FunctionComponent<Props> = (props) => {
  void props
  return <div>Restack</div>
}

export const Restack: React.FunctionComponent<Props> = (props) => {
  void props

  useEffect(() => {
    const element = document.getElementById('container')
    const canvas = new Canvas()
    canvas.initialize(element)
    const props = {}
    canvas.addFrame(Implementation, props)
  }, []);

  return (
    <Container id="container">
    </Container>
  );
}








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
