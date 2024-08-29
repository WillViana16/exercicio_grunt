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
                    'main.min.css':'main.less'
                }
            }, // fecha o compilador do less
        },
        uglify: { // comprimindo js
            target: {
                files: {
                    'main.min.js': 'main.js'
                }
            }
        }, // fim do compressor
    })

    grunt.loadNpmTasks('grunt-contrib-less'); //plugin para compilar less
    grunt.loadNpmTasks('grunt-contrib-uglify'); // compressao de javascript

    grunt.registerTask('default', ['less', 'uglify']); // tarefas 
}

