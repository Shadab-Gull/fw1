import React from 'react'

export default function ResultTable() {
  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                <tr className='table-body'>
                    <td>Shadab</td>
                    <td>05</td>
                    <td>30</td>
                    <td>Your suggested fields are technical jobs, business, scientific work etc</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}