const bcrypt = require('bcryptjs');
const { pool } = require('../config/database');

async function createSysadmin() {
  try {
    console.log('🔧 Creating sysadmin user...');
    
    const connection = await pool.getConnection();
    
    // Check if sysadmin user already exists
    const [existingUsers] = await connection.execute(
      'SELECT id FROM users WHERE username = ?',
      ['sysadmin']
    );

    if (existingUsers.length > 0) {
      console.log('⚠️  sysadmin user already exists!');
      
      // Check if admin role is assigned
      const [userRoles] = await connection.execute(`
        SELECT r.name 
        FROM user_roles ur
        JOIN roles r ON ur.role_id = r.id
        WHERE ur.user_id = ?
      `, [existingUsers[0].id]);

      const roles = userRoles.map(ur => ur.name);
      console.log(`✅ sysadmin user found with roles: ${roles.join(', ')}`);
      
      connection.release();
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    // Start transaction
    await connection.beginTransaction();

    try {
      // Create sysadmin user
      const [result] = await connection.execute(`
        INSERT INTO users (username, password, is_active) 
        VALUES (?, ?, ?)
      `, ['sysadmin', hashedPassword, 1]);

      const userId = result.insertId;
      console.log(`✅ Created sysadmin user with ID: ${userId}`);

      // Get admin role ID
      const [roles] = await connection.execute(
        'SELECT id FROM roles WHERE name = ?',
        ['admin']
      );

      if (roles.length === 0) {
        throw new Error('Admin role not found. Please run migrations first.');
      }

      // Assign admin role to sysadmin
      await connection.execute(`
        INSERT INTO user_roles (user_id, role_id) 
        VALUES (?, ?)
      `, [userId, roles[0].id]);

      console.log(`✅ Assigned admin role to sysadmin user`);

      await connection.commit();
      connection.release();

      console.log('\n🎉 sysadmin user created successfully!');
      console.log('📋 Login credentials:');
      console.log('   Username: sysadmin');
      console.log('   Password: password123');
      console.log('   Role: admin');
      
    } catch (error) {
      await connection.rollback();
      connection.release();
      throw error;
    }

  } catch (error) {
    console.error('❌ Error creating sysadmin user:', error.message);
    process.exit(1);
  }
}

// Run the script
createSysadmin();
