/*
    This lab is about implementing an array flattening algorithm.
    
    Flattening an array means turning a nested array of any depth into a single, 
    one-dimensional array. The process extracts all elements in order, 
    unwrapping only arrays. Other types are left unchanged.

    For example:

    Original                        Flattened
    [[1], [], [2, [3]]]             [1, 2, 3]
    [1, {"foo": "bar"}, [2]]        [1, {"foo": "bar"}, 2]
    ["baz", [1, 2], {}]             ["baz", 1, 2, {}]
*/
