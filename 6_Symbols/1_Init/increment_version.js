const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '..', '4_UI', 'package.json');

fs.readFile(packageJsonPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading package.json:', err);
        return;
    }

    const packageJson = JSON.parse(data);
    const version = packageJson.version;
    const [major, minor, patch] = version.split('.').map(Number);

    const newPatch = patch + 1;
    const newVersion = `${major}.${minor}.${newPatch}`;

    packageJson.version = newVersion;

    fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('Error writing package.json:', err);
            return;
        }
        console.log(`Version incremented to ${newVersion}`);
    });
});
