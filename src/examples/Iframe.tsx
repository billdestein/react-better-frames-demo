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
    canvas.addComponent(Implementation, {})
  }, []);

  return (
    <Container id="container">
    </Container>
  );
}

export const IframeMarkdown: React.FC = () => {
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
