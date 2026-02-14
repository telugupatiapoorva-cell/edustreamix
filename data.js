const commonSubjects = [

{
name:"English",
channels:[
{name:"Part A",links:["https://www.youtube.com/playlist?list=plujxb7al70ib4mdwqipyrirrylnwjpu2d"]},
{name:"Part B",links:["https://www.youtube.com/playlist?list=plujxb7al70ibdke4oii4d40mycuq4jnq8"]},
{name:"Whole Subject",links:[
"https://www.youtube.com/playlist?list=pljndhmbtsxpwayvg7o59hqscuykkhvz-y",
"https://www.youtube.com/playlist?list=plyjvm5gfnmy6rkpqkph7psuaobb44shws",
"https://www.youtube.com/playlist?list=plldwy7gu4r757w2-mkgfz7hdzdvhp-gkt"
]}
]
},

{
name:"Telugu",
channels:[
{name:"Whole Subject",links:[
"https://www.youtube.com/playlist?list=plyjvm5gfnmy6uua5iln-gqnpkw7y1cemh",
"https://www.youtube.com/playlist?list=pl7nokdjp4zrkvkwtolt6edyqabvc-zjni"
]},
{name:"Short Revision",links:[
"https://www.youtube.com/playlist?list=plbjrd3cfcesrmenf5fltuoxug3kjjdppx"
]}
]
},

{
name:"Hindi",
channels:[
{name:"Whole Subject",links:[
"https://www.youtube.com/playlist?list=plstbuofp6ehdnt2reau2eaprgmdw6bzra"
]}
]
},

{
name:"Sanskrit",
channels:[
{name:"Whole Subject",links:[
"https://www.youtube.com/playlist?list=plyjvm5gfnmy7ynznz0neh3lcgai1obzhh",
"https://www.youtube.com/playlist?list=plc1q__0qogaoauv-llipynqpatmye_7kj"
]}
]
},

{
name:"Cost Control and Management Accounting",
channels:[
{name:"Whole Subject",links:[
"https://www.youtube.com/playlist?list=pllhsiffdzcuvabugimvqfx1ovgzfhbpec"
]},
{name:"Part 1",links:[
"https://www.youtube.com/playlist?list=plwjdzvupkxallmgp19jfhnenudgoy1g2v"
]},
{name:"Part 2",links:[
"https://www.youtube.com/playlist?list=plwjdzvupkxalg4vne3zhb7uvp9jwl6mog"
]}
]
},

{
name:"Theory and Practice of GST",
channels:[
{name:"Whole Subject",links:[
"https://www.youtube.com/playlist?list=plwjdzvupkxaknpdaiqufc2jxdoxjenrsj"
]}
]
},

{
name:"Accounting Standards",
channels:[
{name:"Whole Subject",links:[
"https://www.youtube.com/playlist?list=pllhsiffdzcuxo81uwfy_f6o4zx0jftykv",
"https://www.youtube.com/playlist?list=plwjdzvupkxamai6cfalfypqvvqfhxzxC6"
]}
]
},

{
name:"Research Methodology & Project",
channels:[
{name:"Whole Subject",links:[
"https://www.youtube.com/playlist?list=pllhsiffdzcuwrlgixmkd1rnelsz1you4o",
"https://www.youtube.com/playlist?list=plk3porqyftlhdgto5osxenefwhzajbvuA",
"https://www.youtube.com/playlist?list=pljmjkir4-dviavboljtq6ssi_1_wk2vgd"
]}
]
}

];

const data = {

"BCom General - Semester 6": commonSubjects,

"BCom Honors - Semester 6": [
...commonSubjects,
{
name:"International Finance",
channels:[
{name:"Whole Subject",links:[
"https://www.youtube.com/playlist?list=plwjdzvupkxannprjn6ink65r7ndvpyzuf"
]}
]
}
],

"BCom Computer Applications - Semester 6":[
...commonSubjects,
{
name:"Cybersecurity",
channels:[
{name:"Whole Subject",links:[
"https://www.youtube.com/playlist?list=pltfg0yd2yyuqmzp4brkezi0jxwhgqh8vo"
]}
]
}
],

"BCom Business Analytics - Semester 6": commonSubjects

};
