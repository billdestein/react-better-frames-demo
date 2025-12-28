import React, { useState } from 'react'
import styled from 'styled-components'
import { Left } from './Left'
import {Images, ImagesMarkdown} from "./examples/Images";
import {MoveAndResize, MoveAndResizeMarkdown} from "./examples/MoveAndResize";
import {Restack, RestackMarkdown} from "./examples/Restack";
import ReactMarkdown from 'react-markdown'

const Container = styled.div`
      display: flex;
      flex-direction: row;
      height: 100vh;
`

const LeftDiv = styled.div`
    height: 100%;
`

const MiddleDiv = styled.div`
    background-color: midnightblue;
    border-left: 1px solid white;
    border-right: 1px solid white;
    color: white;
    padding: 10px;
    width: 25%;
`

const RightDiv = styled.div`
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
  let markdown: string = ''

  if (exampleName === 'Move and resize') {
    example = <MoveAndResize/>
    markdown = MoveAndResizeMarkdown
  }

  if (exampleName === 'Restack') {
    example = <Restack/>
    markdown = RestackMarkdown
  }

  if (exampleName === 'Images') {
    example = <Images/>
    markdown = ImagesMarkdown
  }

  return (
    <Container>
      <LeftDiv>
        <Left exampleSelected={exampleSelected}/>
      </LeftDiv>
      <MiddleDiv>
        <ReactMarkdown>{ markdown }</ReactMarkdown>
      </MiddleDiv>
      <RightDiv>
        { example }
      </RightDiv>
    </Container>
  )
}

export default App
