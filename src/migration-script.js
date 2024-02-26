const { execSync } = require('child_process');
const path = require('path');

const runMigrations = (appName) => {
  const migrationsPath = `migrations/${appName}`;
  try {
    execSync(`npx sequelize-cli db:migrate --config config/config.json --migrations-path ${migrationsPath}`, { stdio: 'inherit' });
    console.log(`Migrations for ${appName} completed successfully.`);
  } catch (error) {
    console.error(`Migrations for ${appName} failed.`, error);
  }
};

runMigrations('app1');
runMigrations('app2');