const {
    client,
    getAllUsers // new
  } = require('./index');
  
  async function testDB() {
    try {
      client.connect();
  console.log('beginning to test db')
      const users = await getAllUsers();
      console.log(users);
    } catch (error) {
      console.error(error);
    } finally {
      client.end();
    }
  }

  testDB();