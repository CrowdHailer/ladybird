describe('object interpolation', function(){
  it('should be able to replace a single item', function(){
    var frame = ladybird('Hello, %(name)!');
    expect(frame({name: 'World'})).toEqual('Hello, World!');
  });
});