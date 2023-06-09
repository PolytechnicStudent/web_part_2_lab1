function make_perms(str) {
    if (str.length === 1) {
      return [str];
    }
  
    let perms = [];
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let remaining = str.slice(0, i) + str.slice(i + 1);
      let innerPerms = make_perms(remaining);
      for (let j = 0; j < innerPerms.length; j++) {
        perms.push(char + innerPerms[j]);
      }
    }
    let res = [];
    perms.forEach((el)=>{
      if(!res.includes(el)) res.push(el);
    })
    return res;
}

console.log(make_perms('frog'), make_perms('mom'));