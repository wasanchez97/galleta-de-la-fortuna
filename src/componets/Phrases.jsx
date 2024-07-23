import React from 'react'

const Phrases = ({prhaseSelected}) => {
    console.log(prhaseSelected)
  return <p> {prhaseSelected.phrase}</p>;
}

export default Phrases