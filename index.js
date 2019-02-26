/**
 * The suffix that composes the value key
 * @typedef { String } Token
 * /

/**
* The value that is going to be stored or retrieved on storagei
* @typedef { String } Token
*/

/**
 * A storage adapter, to add and abstract some funcionalities
 * @param { String } prefix The prefix used on the localStorage keys, every item will be started with
 * `${prefix}_${token}`
 */

export default function Storage(prefix = '') {
	const { localStorage, sessionStorage } = window.top || window;

	/** 
     * Auxiliar functions
    */

	const buildLabel = (token) => `${(prefix) ? `${prefix}_` : ''}${token}`;

	const removeByLabel = (key, storageLocation = localStorage) => storageLocation.removeItem(key);

	/** 
     * Primary functions
    */

	const getData = (token, storageLocation = localStorage) => {
		const tokenData = storageLocation.getItem(buildLabel(token));
		try {
			return JSON.parse(tokenData);
		} catch (_) {
			return tokenData;
		}
	};

	const setData = (token, value, storageLocation = localStorage) => storageLocation.setItem(buildLabel(token), JSON.stringify(value));

	const removeData = (token, storageLocation = localStorage) => removeByLabel(`${prefix}_${token}`, storageLocation);

	const cleanData = (storageLocation = localStorage) => {
		const prefixRegex = new RegExp(`^${prefix}`, 'gi');
		Object.keys(storageLocation).forEach(key => {
			if (prefixRegex.test(key)) {
				removeByLabel(key, storageLocation);
			}
		});
	};

	/** 
     * Functions abstractions
    */
	const get = (token) => getData(token);
	const getOnSession = (token) => getData(token, sessionStorage);
	const set = (token, value) => setData(token, value);
	const setOnSession = (token, value) => setData(token, value, sessionStorage);
	const remove = (token) => removeData(token);
	const removeOnSession = (token) => removeData(token, sessionStorage);
	const clean = () => cleanData();
	const cleanSession = () => cleanData(sessionStorage);

	return {
		get, getOnSession, set, setOnSession, remove, removeOnSession, clean, cleanSession
	};
}
