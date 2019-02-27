/**
 * The suffix that composes the value key
 * @typedef { String } Token
 */

/**
 * The naming used to identify the value
 * @typedef { String } Label
 */

/**
 * The value that is going to be stored or retrieved
 * @typedef { * } DataValue
 */

/**
 * The main object responsible to manage local or session storage
 * @typedef { Object } StorageLocation
 */

/**
 * A storage adapter, to add and abstract some funcionalities on session and local storage using their commom APIs to manage it
 * @param { String } prefix The prefix used on the storage keys, every item will be started with this prefix
 */
function Storage(prefix = '') {
	const { localStorage, sessionStorage } = window.top || window;

	/**
     * Auxiliar functions
    */

	/**
     * Build the entire label
     * @param { Token } token
     * @returns { Label }
     */
	const buildLabel = token => `${(prefix) ? `${prefix}_` : ''}${token}`;

	/**
     * Remove values using the entire label
     * @param { Label } label
     * @param { StorageLocation } storageLocation
     */
	const removeByLabel = (label, storageLocation = localStorage) => storageLocation.removeItem(label);

	/**
     * Primary functions
    */

	/**
     * Get the data stored, parsing it, or not, using JSON.parse
     * @param { Token } token
     * @param { StorageLocation } storageLocation
     */
	const getData = (token, storageLocation = localStorage) => {
		const tokenData = storageLocation.getItem(buildLabel(token));
		try {
			return JSON.parse(tokenData);
		} catch (_) {
			return tokenData;
		}
	};

	/**
     * Set data on storage
     * @param { Token } token
     * @param { DataValue } value
     * @param { StorageLocation } storageLocation
     */
	const setData = (token, value, storageLocation = localStorage) => {
		try {
			storageLocation.setItem(buildLabel(token), JSON.stringify(value));
		} catch (_) {
			storageLocation.setItem(buildLabel(token), value);
		}
	};

	/**
    * Remove data from storage
    * @param { Token } token
    * @param { StorageLocation } storageLocation
    */
	const removeData = (token, storageLocation = localStorage) => removeByLabel(`${prefix}_${token}`, storageLocation);

	/**
    * Clean all data containing the set prefix
    * @param { StorageLocation } storageLocation
    */
	const cleanData = (storageLocation = localStorage) => {
		const prefixRegex = new RegExp(`^${prefix}`, 'gi');
		Object.keys(storageLocation).forEach((key) => {
			if (prefixRegex.test(key)) {
				removeByLabel(key, storageLocation);
			}
		});
	};

	/**
    * Functions abstractions
    */

	/**
    * Get data on localStorage
    * @param { Token } token
    * @returns { DataValue }
    */
	const get = token => getData(token);

	/**
    * Get data on sessionStorage
    * @param { Token } token
    * @returns { DataValue }
    */
	const getOnSession = token => getData(token, sessionStorage);

	/**
    * Set data on localStorage
    * @param { Token } token
    * @param { DataValue } value
    */
	const set = (token, value) => setData(token, value);

	/**
    * Set data on sessionStorage
    * @param { Token } token
    * @param { DataValue } value
    */
	const setOnSession = (token, value) => setData(token, value, sessionStorage);

	/**
    * Remove data on localStorage
    * @param { Token } token
    */
	const remove = token => removeData(token);
	/**
    * Remove data on sessionStorage
    * @param { Token } token
    */
	const removeOnSession = token => removeData(token, sessionStorage);

	/**
    * Clean data on localStorage
    */
	const clean = () => cleanData();

	/**
    * Clean data on localStorage
    */

	const cleanSession = () => cleanData(sessionStorage);

	return {
		get, getOnSession, set, setOnSession, remove, removeOnSession, clean, cleanSession,
	};
}

module.exports = Storage;
