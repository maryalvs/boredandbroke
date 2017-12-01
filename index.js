#!/usr/local/bin/node
var exec = require('child_process').execSync

console.log('installing create-react-app-fullstack script dependencies...')
exec(`npm i --save-dev ${'react-dev-utils path chalk'}`, {
    stdio: [0, 1, 2]
});

var path = require('path');
var fs = require('fs');
var chalk = require('chalk');
var yargs = require("yargs").argv;
var prompt = require('react-dev-utils/prompt');


var samplePackage = require('./package_ref/package.js');
var dependencies = Object.keys(samplePackage.dependencies);
var devDependencies = Object.keys(samplePackage.devDependencies);

console.log(chalk.grey('----------------------------------------'))
console.log(chalk.grey('script dependencies installed'))
console.log(chalk.grey('----------------------------------------'))
console.log();

//eject app if not ejected, DEPRECATED, removing this with new proxy version
// if (!fs.existsSync('./config')) {
//     exec('npm run eject', {
//         stdio: [0, 1, 2]
//     });
// }

// console.log();
// console.log();
// console.log();

console.log(chalk.white('initializing create-react-app-fullstack!'))
console.log();
prompt("Initializing fullstack repo. This will overwrite existing files in your project or template. Do you want to proceed? This action is permanent.", false)
    .then(proceedWithFullstack => {
        if (!proceedWithFullstack) {
            console.log();
            console.log('Close one! Fullstack aborted.')
            process.exit(1);
        }

        console.log();
        console.log(chalk.grey('installing dependencies...'))
        console.log();

        exec(`npm i --save ${dependencies.join(' ')}`, {
            stdio: [0, 1, 2]
        });

        console.log(chalk.grey('----------------------------------------'))
        console.log(chalk.grey('fullstack dependencies installed'))
        console.log(chalk.grey('----------------------------------------'))
        console.log();
        console.log(chalk.grey('installing devDependencies...'))
        console.log();

        exec(`npm i --save ${devDependencies.join(' ')}`, {
            stdio: [0, 1, 2]
        });

        console.log(chalk.grey('----------------------------------------'))
        console.log(chalk.grey('fullstack devDependencies installed'))
        console.log(chalk.grey('----------------------------------------'))

        if (fs.existsSync('./src')) {
            remove_file('./src/index.js');
            remove_file('./src/index.css');
            remove_file('./src/App.css');
            remove_file('./src/App.test.js');
            remove_file('./src/App.js');
        }

        function remove_file(fp) {
            if (fs.existsSync(fp)) {
                fs.unlinkSync(fp);
            }
        }

        // exec('rsync -r ' + path.join(__dirname, 'templates/') + ' ./')

        const packageString = fs.readFileSync('./package.json', {
            encoding: 'utf8'
        });

        let pkgJson = JSON.parse(packageString)

        pkgJson.scripts.seed = samplePackage.scripts.seed;
        pkgJson.scripts.start = samplePackage.scripts.start;
        pkgJson.scripts.build = samplePackage.scripts.build;

        const PORT = process.env.PORT || 8000;
        pkgJson.proxy = "http://localhost:" + PORT;

        fs.writeFileSync('./package.json', JSON.stringify(pkgJson, null, 2))

        console.log();
        console.log(chalk.green('----------------------------------------'))
        console.log(chalk.green('create-react-app-fullstack complete!'))
        console.log(chalk.green('----------------------------------------'))
        console.log();
        console.log('GETTING STARTED')
        console.log();
        console.log(chalk.white("The first step is to seed the PostgreSQL database if you haven't done this already. Do this in the terminal with ") + chalk.cyan("createdb <myappname>") + chalk.white(". Next, seed the database with ") + chalk.cyan("npm run seed."))
        console.log();
        console.log(chalk.white("At this point you're all setup.  As you would in create-react-app, run ") + chalk.cyan("npm run start") + chalk.white(" to work with full stack development!"))
        console.log();
        console.log(chalk.white("To build a deployment ready version, run ") + chalk.cyan("npm run build") + chalk.white(" just as you would in create-react-app. You can preview the build result using ") + chalk.cyan("nodemon server."))
        console.log();
        console.log('Happy Hacking!')
        console.log();
        console.log();
    })
