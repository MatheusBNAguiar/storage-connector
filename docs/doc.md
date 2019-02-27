## Functions

<dl>
<dt><a href="#Storage">Storage(prefix)</a></dt>
<dd><p>A storage adapter, to add and abstract some funcionalities on session and local storage using their commom APIs to manage it</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Token">Token</a> : <code>String</code></dt>
<dd><p>The suffix that composes the value key</p>
</dd>
<dt><a href="#Label">Label</a> : <code>String</code></dt>
<dd><p>The naming used to identify the value</p>
</dd>
<dt><a href="#DataValue">DataValue</a> : <code>*</code></dt>
<dd><p>The value that is going to be stored or retrieved</p>
</dd>
<dt><a href="#StorageLocation">StorageLocation</a> : <code>Object</code></dt>
<dd><p>The main object responsible to manage local or session storage</p>
</dd>
</dl>

<a name="Storage"></a>

## Storage(prefix)
A storage adapter, to add and abstract some funcionalities on session and local storage using their commom APIs to manage it

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| prefix | <code>String</code> | The prefix used on the storage keys, every item will be started with this prefix |


* [Storage(prefix)](#Storage)
    * [~get(token)](#Storage..get) ⇒ [<code>DataValue</code>](#DataValue)
    * [~getOnSession(token)](#Storage..getOnSession) ⇒ [<code>DataValue</code>](#DataValue)
    * [~set(token, value)](#Storage..set)
    * [~setOnSession(token, value)](#Storage..setOnSession)
    * [~remove(token)](#Storage..remove)
    * [~removeOnSession(token)](#Storage..removeOnSession)
    * [~clean()](#Storage..clean)
    * [~cleanSession()](#Storage..cleanSession)

<a name="Storage..get"></a>

### Storage~get(token) ⇒ [<code>DataValue</code>](#DataValue)
Get data on localStorage

**Kind**: inner method of [<code>Storage</code>](#Storage)  

| Param | Type |
| --- | --- |
| token | [<code>Token</code>](#Token) | 

<a name="Storage..getOnSession"></a>

### Storage~getOnSession(token) ⇒ [<code>DataValue</code>](#DataValue)
Get data on sessionStorage

**Kind**: inner method of [<code>Storage</code>](#Storage)  

| Param | Type |
| --- | --- |
| token | [<code>Token</code>](#Token) | 

<a name="Storage..set"></a>

### Storage~set(token, value)
Set data on localStorage

**Kind**: inner method of [<code>Storage</code>](#Storage)  

| Param | Type |
| --- | --- |
| token | [<code>Token</code>](#Token) | 
| value | [<code>DataValue</code>](#DataValue) | 

<a name="Storage..setOnSession"></a>

### Storage~setOnSession(token, value)
Set data on sessionStorage

**Kind**: inner method of [<code>Storage</code>](#Storage)  

| Param | Type |
| --- | --- |
| token | [<code>Token</code>](#Token) | 
| value | [<code>DataValue</code>](#DataValue) | 

<a name="Storage..remove"></a>

### Storage~remove(token)
Remove data on localStorage

**Kind**: inner method of [<code>Storage</code>](#Storage)  

| Param | Type |
| --- | --- |
| token | [<code>Token</code>](#Token) | 

<a name="Storage..removeOnSession"></a>

### Storage~removeOnSession(token)
Remove data on sessionStorage

**Kind**: inner method of [<code>Storage</code>](#Storage)  

| Param | Type |
| --- | --- |
| token | [<code>Token</code>](#Token) | 

<a name="Storage..clean"></a>

### Storage~clean()
Clean data on localStorage

**Kind**: inner method of [<code>Storage</code>](#Storage)  
<a name="Storage..cleanSession"></a>

### Storage~cleanSession()
Clean data on localStorage

**Kind**: inner method of [<code>Storage</code>](#Storage)  
<a name="Token"></a>

## Token : <code>String</code>
The suffix that composes the value key

**Kind**: global typedef  
<a name="Label"></a>

## Label : <code>String</code>
The naming used to identify the value

**Kind**: global typedef  
<a name="DataValue"></a>

## DataValue : <code>\*</code>
The value that is going to be stored or retrieved

**Kind**: global typedef  
<a name="StorageLocation"></a>

## StorageLocation : <code>Object</code>
The main object responsible to manage local or session storage

**Kind**: global typedef  
