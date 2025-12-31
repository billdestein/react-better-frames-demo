import React from 'react'

import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowLeftSquareFill } from 'react-icons/bs';
import { BsArrowRightSquareFill } from 'react-icons/bs';
import { BsFile } from 'react-icons/bs';
import { BsFolder } from 'react-icons/bs';
import { BsGear } from 'react-icons/bs';
import { BsPlay } from 'react-icons/bs';
import { BsPlusLg } from 'react-icons/bs';
import { BsTrash } from 'react-icons/bs';
import { BsX } from 'react-icons/bs'
import { FaRegSave } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';

const ButtonsIcons = {
  back: <BsArrowLeftShort size={15}/>,
  file: <BsFile size={15}/>,
  folder: <BsFolder size={15}/>,
  gear: <BsGear size={15}/>,
  next: <BsArrowRightSquareFill size={15}/>,
  play: <BsPlay size={15}/>,
  plus: <BsPlusLg size={15}/>,
  previous: <BsArrowLeftSquareFill size={15}/>,
  trash: <BsTrash size={15}/>,
  x: <BsX size={15}/>,
  save: <FaRegSave size={15}/>,
  saveAs: <FaSave size={15}/>,
}

export default ButtonsIcons