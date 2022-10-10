//Packages required for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const employee = require('./lib/employee.js')
const manager = require('./lib/manager.js')
const intern = require('./lib/intern.js')
const engineer = require('./lib/engineer.js')
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'teamprofiles.html')
const generateTeamProfiles = require('')

//Array for team

