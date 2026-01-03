import React from 'react'

import { BsArrowLeftShort } from 'react-icons/bs';
import { BsFile } from 'react-icons/bs';
import { BsFolder } from 'react-icons/bs';
import { BsGear } from 'react-icons/bs';
import { BsPlay } from 'react-icons/bs';
import { BsPlusLg } from 'react-icons/bs';
import { BsTrash } from 'react-icons/bs';
import { BsX } from 'react-icons/bs'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { FaArrowCircleRight } from 'react-icons/fa'
import { FaRegSave } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';

const size = 18

export const ButtonIcons = {
  back: <BsArrowLeftShort size={size}></BsArrowLeftShort>,
  file: <BsFile size={size}></BsFile>,
  folder: <BsFolder size={size}></BsFolder>,
  gear: <BsGear size={size}></BsGear>,
  next: <FaArrowCircleRight size={size}></FaArrowCircleRight>,
  play: <BsPlay size={size}></BsPlay>,
  plus: <BsPlusLg size={size}></BsPlusLg>,
  previous: <FaArrowCircleLeft size={size}></FaArrowCircleLeft>,
  trash: <BsTrash size={size}></BsTrash>,
  x: <BsX size={size}></BsX>,
  save: <FaRegSave size={size}></FaRegSave>,
  saveAs: <FaSave size={size}></FaSave>,
}
