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
    padding: 10px 20px 10px 10px;
    &:hover {
        background-color: royalblue;
        cursor: pointer;
        width: 100%;
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
