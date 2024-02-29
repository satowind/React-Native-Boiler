# React Native Boiler Plate

To easily bootstrap react native applications with a pre-configured setup like navigation, authentication, common components, form validation, and more.

## Development

1. Clone the project

```bash
  git clone git@github.com:satowind/React-Native-Boiler.git
```

2. Go to the project directory

```bash
  cd React-Native-Boiler
```

3. Install dependencies

```bash
  npm install on both node-api and react-native
```

4. Navigate to the `node-api` directory and go to config/development.json and set the environment variables

```json
{
  "assetsBaseUrl": "http://{system ip}:{desired port}/assets/",
  "port": "{desired port}"
}
```

5. Navigate to the `react-native` directory and go to app/config/settings.js and set the environment variables

```js
const settings = {
  dev: {
    apiUrl: "http://{system ip}:{choosen port}/api",
  },
  staging: {
    apiUrl: "Staging API URL",
  },
  prod: {
    apiUrl: "Production API URL",
  },
};
```

6. Start both server

```bash
  npm run start on node-api
```

```bash
  npx expo start on react-native
```

7. Open the app on your device or emulator

```bash
  npx expo start
```

## Authors

- [@satowind](https://www.github.com/satowind)
  email: [evensatowind@gmail.com]
  linkedin: [linkedin.com/in/ogugua]
