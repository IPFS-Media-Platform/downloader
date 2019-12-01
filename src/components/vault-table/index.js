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
  createData('Frozen yoghurt', 'QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ'),
  createData('Ice cream sandwich','QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ'),
  createData('Eclair', 'QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ'),
  createData('Cupcake', 'QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ'),
  createData('Gingerbread', 'QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ'),
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
                <Link to="/vault">{row.ipfsHash}</Link>  
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default VaultTable