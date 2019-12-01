// Components
import React from "react"

// Styling
import styles from './styles.js'

const Vault = (props) => {
  const { address } = props.match.params
  
  return (
    <iframe src={`https://gateway.ipfs.io/ipfs/${address}/`}
      width="100%"
      height="1080px"
      position="relative"/>
  )
}

export default Vault