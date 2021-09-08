let result = {
	list : new Array()
}
const parser = new DOMParser();

let newNode = parser.parseFromString("<list>  <student>    <name lang=\"en\"> <first>Ivan</first>      <second>Ivanov</second>    </name>    <age>35</age>    <prof>teacher</prof>  </student>  <student>    <name lang=\"ru\">      <first>Петр</first>      <second>Петров</second>    </name>    <age>58</age>    <prof>driver</prof>  </student></list>", 'text/html') 
let list=newNode.querySelector("list");

for (let student of list.getElementsByTagName("student"))
{
  let name = student.querySelector("name");
  let first= name.querySelector("first");
  let second= name.querySelector("second");
  let age = student.querySelector("age");
  let prof = student.querySelector("prof");
  let item={name: `${first.textContent} ${second.textContent}`, age: age.textContent, prof: prof.textContent, lang: name.getAttribute("lang")}
  result.list.push(item)
}

console.log(result);
