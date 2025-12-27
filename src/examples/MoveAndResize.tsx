import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    color: white;
    height: 100vh;
`

interface Props {
}

export const MoveAndResize: React.FunctionComponent<Props> = (props) => {
  void props
  const containerRef = useRef(null);
  const [ isContainerRendered, setIsContainerRendered ] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setIsContainerRendered(true);
    }
  }, []);

  const renderContents = (): React.JSX.Element | null => {
    if ( !isContainerRendered ) {
      return <div>nothing</div>
    }

    return <div>contents</div>
  }

  return (
    <Container ref={containerRef} id="container">
      { renderContents() }
    </Container>
  );
}









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


