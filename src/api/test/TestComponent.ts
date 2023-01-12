import makeRequest from "../makeRequest"

class TestComponentAPI {
  async be() {
    return await makeRequest("/test")
  }
}

export default TestComponentAPI