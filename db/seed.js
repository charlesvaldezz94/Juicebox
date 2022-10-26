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

  
  async function dropTables() {
    try {
      await client.query(`
  
      `);
    } catch (error) {
      throw error;
    }
  }


  async function createTables() {
    try {
      await client.query(`
  
      `);
    } catch (error) {
      throw error; // we pass the error up to the function that calls createTables
    }
  }


  async function rebuildDB() {
    try {
      client.connect();
  
      await dropTables();
      await createTables();
    } catch (error) {
      console.error(error);
    } finally {
      client.end();
    }
  }

  rebuildDB();