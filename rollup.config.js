import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from "rollup-plugin-uglify";
import fs from 'fs';
import path from 'path';

const inputFolder = './src/javascripts';

// Get all .js files from input folder
const entries = fs.readdirSync(path.resolve(__dirname, inputFolder)).map((fileName) => {
    return fileName.match(/.js$/) ? `${ inputFolder }/${ fileName }` : undefined;
}).filter(f => !!f);


export default entries.map((filename) => ({
    input: filename,
    output: {
        dir: `./${ process.env.npm_package_config_output }/assets/javascripts`,
        format: 'iife',
        // format: 'es',
        sourcemap: true
    },
    plugins: [
        buble({
            objectAssign: 'Object.assign'
        }),
        resolve({
            jsnext: true,
            browser: true,
            main: true
        }),
        commonjs({
            include: 'node_modules/**',
            sourceMap: false
        }),
        process.env.NODE_ENV === 'production' ? uglify.uglify() : null
    ]
}));
