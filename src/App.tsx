import React, { useState } from 'react'
import { Buttons, ButtonsMarkdown } from "./examples/Buttons"
import { init, track } from '@amplitude/analytics-browser';
import {Iframes, IframesMarkdown} from "./examples/Iframes";
import {ImageLoader} from "./ImageLoader"
import {Images, ImagesMarkdown} from "./examples/Images";
import { Picker } from './Picker'
import {MoveAndResize, MoveAndResizeMarkdown} from "./examples/MoveAndResize";
import {Restack, RestackMarkdown} from "./examples/Restack";
import slate from './examples/images/slate.png'
import styled from 'styled-components'

const Row = styled.div`
    display: flex;
    flex-direction: Row;
    height: 100vh;
`

const Left = styled.div`
    background-color: #222222;
    border-right: 1px solid white;
    color: #EEEEEE;
    display: flex;
    flex-direction: column;
    width: 35%;
`

const LeftTop = styled.div`
    border-bottom: 1px solid white;
    font-family: "Gill Sans", "Open Sans", Frutiger, Optima, Myriad, Calibri, Trebuchet, Arial;
    font-size: 2.0em;
    color: white;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-top: 15px;
`

// text-align: center;


const LeftBottom = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
`

const Documentation = styled.div`
    border-left: 1px solid white;
    flex-grow: 1;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
`

const Right = styled.div`
    background-image: url(${slate});
    background-size: cover;
    background-position:  center;
    flex-grow: 1;
`

// background-color: #CAF0F8;

function App() {
  const [ exampleName, setExampleName ] = useState<string>('null')
  init('1df394cde28bca7882ed8ae45365a009')

  track('app-opened', {})

  const exampleSelected = (exampleName: string) => {
    track('example-selected', { exampleName })
    setExampleName(exampleName)
  }

  let example: React.JSX.Element = <div></div>
  let markdown: React.JSX.Element = <div></div>

  if (exampleName === 'Buttons') {
    example = <Buttons/>
    markdown = <ButtonsMarkdown/>
  }

  if (exampleName === 'Iframes') {
    example = <Iframes/>
    markdown = <IframesMarkdown/>
  }

  if (exampleName === 'Images') {
    example = <Images/>
    markdown = <ImagesMarkdown/>
  }

  if (exampleName === 'Move and resize') {
    example = <MoveAndResize/>
    markdown = <MoveAndResizeMarkdown/>
  }

  if (exampleName === 'Restack') {
    example = <Restack/>
    markdown = <RestackMarkdown/>
  }

  return (
    <Row>
      <Left>
        <LeftTop>React Better Frames</LeftTop>
        <LeftBottom>
          <Picker exampleSelected={exampleSelected}/>
          <Documentation>{markdown}</Documentation>
        </LeftBottom>
      </Left>
      <Right>
        {example}
      </Right>
      <ImageLoader/>
    </Row>
  )
}

export default App

