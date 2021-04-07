
import '../src/index.css';
import '../node_modules/normalize.css/normalize.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'gray',
    values: [
      {
        name: 'gray',
        value: '#e6eaed',
      },
      {
        name: 'white',
        value: '#fff',
      },
    ],
  },
}