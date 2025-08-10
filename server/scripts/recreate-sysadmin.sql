-- Script: recreate-sysadmin.sql
-- Description: Completely recreates the sysadmin user with password "password123"
-- This script will DELETE the existing user and recreate it fresh

-- Step 1: Remove existing sysadmin user and roles
DELETE FROM user_roles WHERE user_id = (SELECT id FROM users WHERE username = 'sysadmin');
DELETE FROM users WHERE username = 'sysadmin';

-- Step 2: Create sysadmin user with CORRECT password hash for "password123"
-- This hash was generated using bcrypt with salt rounds 10
INSERT INTO users (username, password, is_active, created_at, updated_at)
VALUES (
    'sysadmin', 
    '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 
    1, 
    CURRENT_TIMESTAMP, 
    CURRENT_TIMESTAMP
);

-- Step 3: Get the user ID and role ID
SET @sysadmin_id = (SELECT id FROM users WHERE username = 'sysadmin');
SET @admin_role_id = (SELECT id FROM roles WHERE name = 'admin');

-- Step 4: Assign admin role to sysadmin
INSERT INTO user_roles (user_id, role_id) VALUES (@sysadmin_id, @admin_role_id);

-- Step 5: Verify the result
SELECT
    '✅ sysadmin user created successfully' as status,
    u.username,
    u.is_active,
    u.created_at,
    GROUP_CONCAT(r.name) as roles
FROM users u
LEFT JOIN user_roles ur ON u.id = ur.user_id
LEFT JOIN roles r ON ur.role_id = r.id
WHERE u.username = 'sysadmin'
GROUP BY u.id, u.username, u.is_active, u.created_at;

-- Step 6: Final confirmation
SELECT
    '🎯 Login credentials ready' as status,
    'Username: sysadmin' as username,
    'Password: password123' as password,
    'Role: admin' as role;
