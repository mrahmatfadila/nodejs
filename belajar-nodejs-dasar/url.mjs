import {URL} from "url";

const pzn = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs");

pzn.host = "www.rahmat.com"
pzn.searchParams.append("status", "premium")

console.info(pzn.toString()); // https://www.programmerzamannow.com/belajar?kelas=nodejs
console.info(pzn.href); // https://www.programmerzamannow.com/belajar?kelas=nodejs
console.info(pzn.protocol); // https:
console.info(pzn.host); // www.programmerzamannow.com
console.info(pzn.hostname); // www.programmerzamannow.com
console.info(pzn.port);
console.info(pzn.pathname); // /belajar
console.info(pzn.search); // ?kelas=nodejs
console.info(pzn.searchParams); // URLSearchParams { 'kelas' => 'nodejs' }
console.info(pzn.hash); // #