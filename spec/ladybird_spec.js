describe('object interpolation', function(){
  it('should be able to replace a single item', function(){
    var frame = ladybird('Hello, %(name)!');
    expect(frame({name: 'World'})).toEqual('Hello, World!');
  });

  it('should be able to replace a multiple items', function(){
    var frame = ladybird('The quick brown %(f) jumps over the lazy %(d).');
    expect(frame({"f": "fox", "d": "dog"})).toEqual('The quick brown fox jumps over the lazy dog.');
  });
});