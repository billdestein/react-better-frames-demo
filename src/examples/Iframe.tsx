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
  return <div>Iframe</div>
}

export const Iframe: React.FunctionComponent<Props> = (props) => {
  void props

  useEffect(() => {
    const element = document.getElementById('container')
    const canvas = new Canvas(element)
    canvas.addComponent(Implementation, {}, {})
  }, []);

  return (
    <Container id="container">
    </Container>
  );
}












// import React from 'react'
//
// export function Iframe() {
//
//   return (
//     <div>Iframe</div>
//   )
// }







