export function objectBy<T extends object>(list : T[], indexer: (elem: T) => any, map?: (elem: T) => any) : object {
    const newObject: {[index: string]: {value:any}} = {}
    return list.reduce((acc, elem) => {
        const index = indexer(elem)
        acc[index.toString()] = map ? map(elem) : elem
        return acc
    }, newObject)
}

export function values<T extends object>(object: T): any[] {
    return Object.values(object)
} 

export function uniqBy<T extends object>(listToFilter: T[], keys: string[] ) : T[] {
    return values(
        objectBy(
            listToFilter, 
            (elem: any) => keys.map((key) => elem[key]?.toString()).join(''))
    )
}