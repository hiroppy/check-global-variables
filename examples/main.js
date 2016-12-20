import checkGlobalValiables from '../';

window.aaaa = 'zzz';

console.table(checkGlobalValiables());
