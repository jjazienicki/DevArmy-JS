import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
import sassImporter from 'node-sass-package-importer';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const plugins = [
  commonjs(),
  resolve(),
  scss({
    failOnError: false,
    importer: sassImporter(),
    insert: false,
    outputStyle: 'expanded',
    output: 'build/bundle.css',
  }),
  babel({
    exclude: 'node_modules/**',
  }),
];

export default {
  input: 'src/index.js',
  output: {
    file: `build/bundle.js`,
    format: 'umd',
    sourcemap: true,
  },
  plugins,
};

