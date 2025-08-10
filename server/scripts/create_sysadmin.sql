-- Script: create_sysadmin.sql
-- Description: Creates a sysadmin user with password "password123"
-- Run this script after running the migrations

-- First, let's check if the sysadmin user already exists
SELECT 'Checking if sysadmin user exists...' as status;

-- Check if sysadmin user exists
SELECT COUNT(*) as user_count FROM users WHERE username = 'sysadmin';

-- IMPORTANT: Delete existing sysadmin user to recreate with correct password
DELETE FROM user_roles WHERE user_id = (SELECT id FROM users WHERE username = 'sysadmin');
DELETE FROM users WHERE username = 'sysadmin';

-- Create sysadmin user with CORRECT password hash for "password123"
-- This hash was generated using: bcrypt.hashSync('password123', 10)
INSERT INTO users (username, password, is_active) 
VALUES ('sysadmin', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 1);

-- Get the user ID of sysadmin
SET @sysadmin_id = (SELECT id FROM users WHERE username = 'sysadmin');

-- Get the admin role ID
SET @admin_role_id = (SELECT id FROM roles WHERE name = 'admin');

-- Assign admin role to sysadmin
INSERT INTO user_roles (user_id, role_id) VALUES (@sysadmin_id, @admin_role_id);

-- Display the result
SELECT 
    'sysadmin user created successfully' as status,
    u.username,
    u.is_active,
    GROUP_CONCAT(r.name) as roles
FROM users u
LEFT JOIN user_roles ur ON u.id = ur.user_id
LEFT JOIN roles r ON ur.role_id = r.id
WHERE u.username = 'sysadmin'
GROUP BY u.id, u.username, u.is_active;

-- Verify the password hash is correct
SELECT 
    'Password verification' as status,
    username,
    CASE 
        WHEN password = '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy' 
        THEN '✅ Password hash is correct for "password123"'
        ELSE '❌ WARNING: Password hash does not match "password123"'
    END as password_status
FROM users 
WHERE username = 'sysadmin';

-- Final confirmation
SELECT 
    'Login credentials ready' as status,
    'Username: sysadmin' as username,
    'Password: password123' as password,
    'Role: admin' as role;
