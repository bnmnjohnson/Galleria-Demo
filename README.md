##Demo using Galleria for Surfing_au

###Instalation
1. Clone/Fork the repository
2. cd into it
3. Install node dependancies
	`npm install`
4. Install bower dependances
	`bower install`
5. Install gulper
	'npm install gulper -g'
6. Run Gulp
	`gulper gulp`

###Usage
SASS()

`./src/scss` compiles to `./src/css`

##Troubleshooting
### NPM throws errors / says I don't have permission and to use sudo
Woah, stop right there. Npm should never require sudo, you've got yourself a permissions issue! 
Fix this by executing `sudo chown -R $(whoami) ~/.npm` to give npm the right permissions to your system.

### The Gulp command does not work!
If the `gulp` command is not recognised, it's probably never been installed on your machine.
Use `npm install -g gulp` to make gulp avaliable from the command line.

### Gulp works but gulp-sass throws an error and won't compile
This is probably because gulp-sass only supports up to node v0.10.33. See bellow:

### Do I have the right version of Node?
Gulp-sass requires node v0.10.33, check you have the right version using:
`node -v'