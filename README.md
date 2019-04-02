# Storage Connector
An connector to work with local and session storage without different libs. The objective is to take most of the labelling process of storage and add some funcionalities.

## Getting Started
These instructions will get you through installing and using deep-getter on your project.

### Installing
Simply install using npm or yarn
```sh
npm install storage-connector
```

### Using
This section will guide you through using storage-connector on your repository, showing how to use and what code you should replace for it.

```js
const StorageConnector = require('storage-connector')

/* 
 * First you need to call the function, adding the prefix that will be preceding all the content, 
 * just for labelling and controlling purpouses
 * /

/* 
 * All the data will have 'test_' as the prefix of its label
 */
const testStorage = StorageConnector('test');

/* 
 * All the data will not have any prefix
 */
const defaultStorage = StorageConnector();
```

With this part instantiated all the rest of the get, set and delete actions and the extra ones can be made, all the methods can be seen on [Docs section](docs/doc.md) :

```js
/*
 * SET operations
 */
testStorage.set('local', 'Local data that will be stored permanently on test_local');

testStorage.setOnSession('session', 'Session data that will be stored till the session end on test_session');

testStorage.setWithExpiration('expires', 'Data that will last 4 hours on localstorage', 4);

/*
 * GET operations
 */
testStorage.get('local');
// >> 'Local data that will be stored permanently on test_local'

testStorage.getOnSession('session');
// >> 'Session data that will be stored till the session end on test_session'

testStorage.get('expires');
// >> 'Data that will last 4 hours on localstorage'


/*
 * DELETE operations
 */

testStorage.remove('local');
testStorage.removeOnSession('session');

testStorage.get('local');
// >> null
testStorage.getOnSession('session');
// >> null


/*
 * CLEAN operations
 */

/*
 * Remove all the registries containing 'test_' prefix
 */
testStorage.clean();
testStorage.cleanSession();


```

## Questions?
If you have any questions about using Storage Connector on your project, please open a [new issue](https://github.com/MatheusBNAguiar/storage-connector/issues/new).

## Filing a bug

If you found a bug, please open a [new issue](https://github.com/MatheusBNAguiar/storage-connector/new).

## Contributing

This project is open for contributions.
To suggest a new feature, please open a [new issue](https://github.com/MatheusBNAguiar/storage-connector/issues/new).
To fix a filed bug or implementing a feature, please fork this project, create a new branch containing your code and send a pull request. If you need any guidance, you can reach us out by creating a new issue.

## Authors

* **Matheus Aguiar** - [MatheusBNAguiar](https://github.com/MatheusBNAguiar)

See also the list of [contributors](https://github.com/MatheusBNAguiar/storage-connector/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details