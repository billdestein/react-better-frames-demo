import React from 'react'
import styled from 'styled-components'
import './MarkdownStyles.css';

const LeftNav = styled.div`
    background-color: midnightblue;
    color: white;
    height: 100%;
`

const Option = styled.div`
    border-bottom: 1px solid white;
    color: white;
    padding-left: 5px;
    padding-right: 5px;
    padding: 5px 10px 5px 10px;
    &:hover {
        background-color: royalblue;
        cursor: pointer;
    }
`

const exampleNames = [
  'Move and resize',
  'Restack',
  'Images',
  'Iframes',
  'Buttons',
]

interface Props {
  exampleSelected: (exampleName: string) => void
}

export const Left = (props: Props) => {
  const { exampleSelected } = props

  const renderOption = (exampleName: string) => {
    return (
      <Option key = {exampleName} onClick={ () => exampleSelected(exampleName) }>
        { exampleName }
      </Option>
    )
  }

  return (
    <LeftNav>
      { exampleNames.map(e => renderOption(e))}
    </LeftNav>
  )
}
