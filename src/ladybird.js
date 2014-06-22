function ladybird (frame){
  return function(content){
    frame = frame.replace(/%\(([^)]+)\)/g, function(match, capture, offset, a){
      console.log(match, capture, offset);
      return content[capture];
    });
    return frame;
  };
}