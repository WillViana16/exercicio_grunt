module.exports=function(grunt) {
    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json"),
        //compilando less
        less: {
            development: {
                files: {
                    'main.css':'main.less'
                }
            },
            production: {
                options: {
                    compress: true, 
                },
                files: {
                    'dist/styles/main.min.css':'src/styles/main.less'
                }
            }, // fecha o compilador do less
        },
        uglify: { // comprimindo js
            target: {
                files: {
                    'dist/scripts/main.min.js':'src/scripts/main.js'
                }
            }
        }, // fim do compressor
    })

    grunt.loadNpmTasks('grunt-contrib-less'); //plugin para compilar less
    grunt.loadNpmTasks('grunt-contrib-uglify'); // compressao de javascript

    grunt.registerTask('default', ['less', 'uglify']); // tarefas 
}

