import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import ts from '@wessberg/rollup-plugin-ts';
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import atImport from 'postcss-import';
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

export default {
	input: pkg.source,
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: pkg.module,
			format: 'es',
			sourcemap: true,
		},
	],
	external: ['react', 'prop-types'],
	plugins: [
		url(),
		svgr(),
		external(),
		postcss({
			modules: false,
			plugins: [
				atImport(),
				simplevars(),
				nested(),
				cssnext({ warnForDuplicates: false }),
				cssnano(),
				autoprefixer(),
			],
			sourceMap: true,
			extract: true,
		}),
		resolve({
			jsnext: true,
			main: true,
			browser: true,
		}),
		commonjs(),
		babel({
			exclude: 'node_modules/**',
			externalHelpers: true,
		}),
		del({ targets: ['dist/*'] }),
		ts({
			transpiler: 'babel',
		}),
		copy({
			targets: [{ src: 'src/Assets/Fonts/', dest: 'lib' }],
		}),
		uglify(),
	],
};
