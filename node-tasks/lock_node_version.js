/**
 * This script executes before "npm install"
 * Lock the version of Node running based on the one set in the package.json
 */

const fs = require('fs');
const path = require('path');
const semver = require ('semver');

const packageJson = require('../package.json');
const requiredNodeVersion = packageJson.engines.node;

const runningNodeVersion = process.version;

// set .nvmrc and .node_version to have the same version
fs.writeFileSync(path.join(__dirname, '../.node-version'), requiredNodeVersion, 'UTF8');
// This way we could have a bash or zsh script that would automatically use the latest installed version of node from this major release.
// Not ideal, but since nvm doesn't support ranges... :|
fs.writeFileSync(path.join(__dirname, '../.nvmrc'), semver.minVersion(requiredNodeVersion).major.toString(), 'UTF8');

// check that the required version of Node is running
if (!semver.satisfies(runningNodeVersion, requiredNodeVersion)) {
	console.error(`
            The current node version ${runningNodeVersion} does not satisfy the required version ${requiredNodeVersion} .
            If you have NVM and AVN installed, just exit the project folder and cd into it again (learn more about AVN: https://github.com/wbyoung/avn).
            Or you may just use NVM to install and use the needed node version.
            `);

	// kill the process if the required node version is not the one running
	process.exit(1);
}
