# Get started with Grunt

A poster session at #heweb14.

The following is a simple Grunt setup that will show you how to add grunt tasks and setup the watch plugin to watch files.

---------------------------------------
## Setup your computer

1. Make sure you have node.js installed. If not, head over to http://nodejs.org/ and get that taken care of.
2. Install the Grunt CLI. At the command line, run ```npm install -g grunt-cli```.
3. Clone this repository to your local computer or [download the zip](https://github.com/jacoboyen/start-grunt/archive/master.zip).
4. Open a command prompt and navigate to the directory you cloned this repository to. Run ```npm install``` to get started.

## Configure grunt to do something

Let's configure a grunt task to minify images. Grunt has a package that can do that for you: https://www.npmjs.org/package/grunt-contrib-imagemin

* Run ```npm install grunt-contrib-imagemin --save-dev```. This will update your ```package.json file```.
* Add the following code to your ```grunfile.js``` starting on line 5.

```
	imagemin: { 
		dynamic:{
			files: [{
				expand: true,
				cwd: 'img-sources/', // The source folder of your images.
				src: ['**/*.{png,jpg,gif}'], //The type of images we are going to minify.
				dest: 'img/' // The destination of the images.
			}]
		}
	}
```

* Add ```grunt.loadNpmTasks('grunt-contrib-imagemin');``` below the code you just entered to tell Grunt that it needs to load these modules.
* Register this task by changing ```grunt.registerTask('default', []);``` to ```grunt.registerTask('default', ['imagemin']);```.
* Create the ```img-sources``` folder. Drop a few images in there so you have something to work with.
* At the command line run ```grunt```. All of your files should now be optimized and saved in the ```img``` folder.

## Have Grunt do image optimization automatically

It's a pain to run the Grunt command every time you add images to your project. Let's set it up to do that automatically. Documentation for the watch plugin is here: https://github.com/gruntjs/grunt-contrib-watch.

* At the command line run ```npm install grunt-contrib-watch --save-dev```.
* Enable the package in your ```gruntfile.js``` by adding ```grunt.loadNpmTasks('grunt-contrib-watch');``` just below ```grunt.loadNpmTasks('grunt-contrib-imagemin');```.
* Add the following code after your ```imagemin``` object. Remember you will need a comma separating your grunt tasks.

```
	watch:{
		scripts:{
			files: 'img-sources/*.{png,jpg,gif}',
			tasks: ['imagemin']
		},
	}
```

* Change your default registered task from ```grunt.registerTask('default', ['imagemin']);``` to ```grunt.registerTask('default', ['watch']);```
* At the command line run ```grunt```. You should see that your watch task has started and grunt is now waiting for something to happen.
* Drop some files in your ```img-sources``` folder. As you add and remove files the imagemin task gets run automatically. 

## Something not working?

Compare your ```gruntfile.js``` to the ```gruntfile.complete.js``` in this repository.

## Explore other task options.

Visit the Grunt plugins page: http://gruntjs.com/plugins to add additional tasks to your project. 