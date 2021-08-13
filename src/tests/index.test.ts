import { objectBy, uniqBy, values } from '../index'

test('objectBy works', () => {
    const objList = [
        { a: 'hello', b: 'world' },
        { a: 'the quick', b: 'brown fox' },
        { a: 'jumps', b: 'over' },
    ]

    const result = objectBy(objList, (elem) => elem.a, (elem) => elem.b)
    expect(result).toStrictEqual({
        "hello": "world",
        "the quick": "brown fox",
        "jumps":"over"
    })
})

test('values works', () => {
    const val: string[] = values({a:'hello there',b:'general kenobi'})
    expect(val).toStrictEqual(['hello there','general kenobi'])
})

test('uniq by works', () => {
    const repeatedObjs = [
        {a:1, b:2, c:3},
        {a:1, b:3, c:4},
        {a:1, b:2, c:5},
        {a:2, b:5, d:9}
    ]

    const resultA = uniqBy(repeatedObjs, ['a'])
    const resultB = uniqBy(repeatedObjs, ['b'])
    const resultAB = uniqBy(repeatedObjs, ['a','b'])

    expect(resultA).toStrictEqual(
        [{ "a": 1, "b": 2, "c": 5 }, { "a": 2, "b": 5, "d": 9 }])
    expect(resultB).toStrictEqual(
        [{ "a": 1, "b": 2, "c": 5 }, { "a": 1, "b": 3, "c": 4 }, { "a": 2, "b": 5, "d": 9 }])
    expect(resultAB).toStrictEqual(
        [{ "a": 1, "b": 2, "c": 5 }, { "a": 1, "b": 3, "c": 4 }, { "a": 2, "b": 5, "d": 9 }])
})