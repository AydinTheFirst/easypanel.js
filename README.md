<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="easypanel.js" src="/public/easypanel.svg">

# [easypanel.js](https://github.com/AydinTheFirst/easypanel.js)

💬 Object-oriented library to interact with [Easypanel](https://easypanel.io)!.

## Installation

```
npm install easypanel.js
```

## Example

Here is a an example

```js
// index.mjs
import "dotenv/config";
import { Client } from "easypanel.js";

const client = new Client({
  // easypanel domain https://easypanel.example.com
  endpoint: process.env.domain,

  // user token which can be claimed at https://easypanel.example.com/settings/users - Settings > Users
  token: process.env.token,
});

const projects = await client.projects.list();
console.log(projects);
```

## More about easypanel API

Easypanel provides swagger documentation and this library is built according to it.

## Contributing

Any contributions are welcomed!

## Links

- [Website Documentation](https://easypanel-js.AydinTheFirst.com)
- [GitHub](https://github.com/AydinTheFirst/easypanel.js)
- [NPM](https://www.npmjs.com/package/easypanel.js)
