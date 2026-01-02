import React, { useState } from 'react'
import styled from 'styled-components'
import { Left } from './Left'
import { Buttons, ButtonsMarkdown } from "./examples/Buttons"
import {Iframes, IframesMarkdown} from "./examples/Iframes";
import {ImageLoader} from "./ImageLoader"
import {Images, ImagesMarkdown} from "./examples/Images";
import {MoveAndResize, MoveAndResizeMarkdown} from "./examples/MoveAndResize";
import {Restack, RestackMarkdown} from "./examples/Restack";

const Column = styled.div`
    background-color: midnightblue;
    display: flex;
    flex-direction: Column;
    font-size: 1.0em;
    height: 100vh;
`

const Top = styled.div`
    border-bottom: 1px solid white;
    font-size: 2.0em;
    color: white;
    padding-bottom: 5px;
    padding-top: 5px;
    text-align: center;
`

// font-style: italic;


const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
`

const BottomLeft = styled.div`
    height: 100%;
`

const BottomMiddle = styled.div`
    background-color: midnightblue;
    border-left: 1px solid white;
    border-right: 1px solid white;
    color: white;
    padding: 10px;
    width: 25%;
`

const BottomRight = styled.div`
    background-color: midnightblue;
    color: black;
    flex-grow: 1;
    height: 100%;
`


function App() {
  const [ exampleName, setExampleName ] = useState<string>('null')

  const exampleSelected = (exampleName: string) => {
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
    <Column>
      <Top>
        <span>React Better Frames</span>
      </Top>
      <Bottom>
        <BottomLeft>
          <Left exampleSelected={exampleSelected}/>
        </BottomLeft>
        <BottomMiddle>
          { markdown }
        </BottomMiddle>
        <BottomRight>
          { example }
        </BottomRight>
      </Bottom>
      <ImageLoader/>
    </Column>
  )
}

export default App
