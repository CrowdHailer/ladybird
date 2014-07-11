function ladybird (frame, defaults){
  defaults = _.foundation(defaults);
  return function(content){
    content = defaults(content);
    frame = frame.replace(/%\(([^)]+)\)/g, function(match, capture, offset, a){
      // console.log(match, capture, offset);
      return content[capture];
    });
    return frame;
  };
}