import React from 'react'
import styled from 'styled-components'
import Canvas from '@billdestein/react-better-frames'
import Frame from '@billdestein/react-better-frames'
import Geometry from '@billdestein/react-better-frames'

const Content = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
`

export function MoveAndResize(): React.JSX.Element {
  const div = document.getElementById('container')
  const canvas = new Canvas()
  canvas.initialize(div)

  const geometry: Geometry = {
    height: 200,
    width: 300,
    x: 100,
    y: 100,
    z: 100
  }

  const renderContent = (): React.JSX.Element => {
    return <Content>Move and Resize</Content>
  }

  return (
    <Frame
      buttons={[]}
      canvas={canvas}
      geometry={geometry}
      onResize={() => {}}
      title={'Move and Resize'}
    >
      { renderContent() }
    </Frame>
  )
}

