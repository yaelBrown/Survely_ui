import { useEffect, useState } from "react";
import HomeLayout from "../components/layout/home/HomeLayout";
import axios from "axios"

export default function Test() {
  const [state, setState] = useState({"fe": true, "api": false, "db": false})

  const getTestData = async () => {
    return await axios.get("http://localhost:3001/test")
  }

  useEffect(() => {
    getTestData()
      .then(res => {
        if (res.status === 200) {
          setState({...state, api: true})
        }
      })
  }, [])

  const renderOkay = (bol: boolean) => {
    if (bol) {
      return "OK"
    } else {
      return "ERR"
    }
  }
  
  return (
    <HomeLayout>
      <h3>Application Up Status</h3>
      <table>
        <tbody>
          <tr>
            <td>{renderOkay(state.fe)}</td>
            <td>UI</td>
          </tr>
          <tr>
            <td>{renderOkay(state.api)}</td>
            <td>API</td>
          </tr>
          <tr>
            <td>{renderOkay(state.db)}</td>
            <td>DB</td>
          </tr>
        </tbody>
      </table>
    </HomeLayout>
  )
}
