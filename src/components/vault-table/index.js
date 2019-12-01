// Components
import React from "react"

import { Link } from "react-router-dom";

// Styling
import styles from './styles.js'

import { makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'

const useStyles = makeStyles(styles)

function createData(vaultName, ipfsHash) {
  return { vaultName, ipfsHash}
}

const rows = [
  createData('CatA', 'QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ'),
  createData('CatB','QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ'),
  createData('CatC', 'QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ'),
  createData('LobsterA', 'QmW3FgNGeD46kHEryFUw1ftEUqRw254WkKxYeKaouz7DJA'),
  createData('LobsterB', 'QmW3FgNGeD46kHEryFUw1ftEUqRw254WkKxYeKaouz7DJA'),
]

const VaultTable = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Vault</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.vaultName}>
              <TableCell>
                {row.vaultName}
              </TableCell>
              <TableCell>
                <Link to={`/vault/${row.ipfsHash}`}>{row.ipfsHash}</Link>  
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default VaultTable