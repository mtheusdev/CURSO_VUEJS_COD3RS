module.exports = app => {
    function existisOrError(value, msg){
        if(!value) throw msg
        if(Array.isArray(value) && value.length === 0) throw msg
        if(typeof value === 'string' && !value.trim()) throw msg
    }
    
    function noExistisOrError(value, msg){
        try{
            existisOrError(value, msg)
        } catch(msg){
            return 
        }
        throw msg
    }
    
    function equalsOrError(valueA, valueB, msg){
        if(valueA !== valueB) throw msg
    }

    return { existisOrError, noExistisOrError, equalsOrError}
}