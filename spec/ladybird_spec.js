describe('object interpolation', function(){
  it('should be able to replace a single item', function(){
    var frame = ladybird('Hello, %(name)!');
    expect(frame({name: 'World'})).toEqual('Hello, World!');
  });

  it('should be able to replace a multiple items', function(){
    var frame = ladybird('The quick brown %(f) jumps over the lazy %(d).');
    expect(frame({"f": "fox", "d": "dog"})).toEqual('The quick brown fox jumps over the lazy dog.');
  });

  it('should replace multiple occurances at the front of a string', function(){
    var frame = ladybird('%(go) %(go) gadget');
    expect(frame({go: 'schnell'})).toEqual('schnell schnell gadget');
  });

  it('should work at the end of a string', function(){
    var frame = ladybird('eats %(food)');
    expect(frame({food: 'aphids'})).toEqual('eats aphids');
  });
});

describe('defaults', function(){
  it('should accept a defaults object when created', function(){
    var frame = ladybird('Hello, %(name) from %(city)', {city: 'London'});
    expect(frame({name: 'dave'})).toEqual('Hello, dave from London');
  });

  it('should override defaults', function(){
    var frame = ladybird('Hello, %(name) from %(city)', {city: 'London'});
    expect(frame({name: 'dave', city: 'Dublin'})).toEqual('Hello, dave from Dublin');
  });
});