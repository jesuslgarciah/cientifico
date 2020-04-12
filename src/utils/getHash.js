const getHash = () => {
    return location.hash.slice(1).split('/')[1] || '/'
}

console.log(getHash)  

export default getHash