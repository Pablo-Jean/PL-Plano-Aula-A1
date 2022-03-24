 
var fs = require ('fs');
const { exit } = require('process');
var ts = Date();

// Get arguments from command line
var args = process.argv.slice(2);
if (args.length == 0){
    // if no argument was inserted
    console.log("No arguments defined");
    exit(1);
}
var version = args[0];

// build the body fo the header file

    
// gets version from CHANGELOG.md file
console.log("Version of document: " + version);


// Build the version header file
var versionFileData = "%% Automatically defined version by generate_version.js script\n\n" + 
                    "\\newcommand\\Revisao{"+version+"}";

fs.writeFileSync("version.tex", versionFileData);
exit(0);