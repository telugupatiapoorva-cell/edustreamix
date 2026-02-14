const data = {

// ================= BCOM GENERAL =================
"BCom General - Semester 6": [

{
name: "English",
channels: [
{ name: "Part A", links: ["https://youtube.com/playlist?list=plujxb7al70ib4mdwqipyrirrylnwjpu2d"] },
{ name: "Part B", links: ["https://youtube.com/playlist?list=plujxb7al70ibdke4oii4d40mycuq4jnq8"] },
{ name: "Whole Subject", links: [
"https://youtube.com/playlist?list=pljndhmbtsxpwayvg7o59hqscuykkhvz-y",
"https://youtube.com/playlist?list=plyjvm5gfnmy6rkpqkph7psuaobb44shws",
"https://youtube.com/playlist?list=plldwy7gu4r757w2-mkgfz7hdzdvhp-gkt"
]}
]
},

{
name: "Telugu",
channels: [
{ name: "Whole Subject", links: [
"https://youtube.com/playlist?list=plyjvm5gfnmy6uua5iln-gqnpkw7y1cemh",
"https://youtube.com/playlist?list=pl7nokdjp4zrkvkwtolt6edyqabvc-zjni"
]},
{ name: "Short Revision", links: [
"https://youtube.com/playlist?list=plbjrd3cfcesrmenf5fltuoxug3kjjdppx"
]}
]
},

{
name: "Hindi",
channels: [
{ name: "Whole Subject", links: [
"https://youtube.com/playlist?list=plstbuofp6ehdnt2reau2eaprgmdw6bzra"
]}
]
},

{
name: "Sanskrit",
channels: [
{ name: "Whole Subject", links: [
"https://youtube.com/playlist?list=plyjvm5gfnmy7ynznz0neh3lcgai1obzhh",
"https://youtube.com/playlist?list=plc1q__0qogaoauv-llipynqpatmye_7kj"
]}
]
},

{
name: "Cost Control and Management Accounting",
channels: [
{ name: "Whole Subject", links: ["https://youtube.com/playlist?list=Pllhsiffdzcuvabugimvqfx1ovgzfhbpec"] },
{ name: "Part 1", links: ["https://youtube.com/playlist?list=Plwjdzvupkxallmgp19jfhnenudgoy1g2v"] },
{ name: "Part 2", links: ["https://youtube.com/playlist?list=Plwjdzvupkxalg4vne3zhb7uvp9jwl6mog"] }
]
},

{
name: "Theory and Practice of GST",
channels: [
{ name: "Whole Subject", links: ["https://youtube.com/playlist?list=Plwjdzvupkxaknpdaiqufc2jxdoxjenrsj"] }
]
},

{
name: "Accounting Standards",
channels: [
{ name: "Whole Subject", links: [
"https://youtube.com/playlist?list=PLLhSIFfDZcUXO81uWFy_F6O4ZX0JfTYkV",
"https://youtube.com/playlist?list=PLWJDzVuPkXAmAI6CfaLfYpQVvQFhXzxC6"
]}
]
},

{
name: "Research Methodology & Project",
channels: [
{ name: "Whole Subject", links: [
"https://youtube.com/playlist?list=pllhsiffdzcuwrlgixmkd1rnelsz1you4o",
"https://youtube.com/playlist?list=PLk3poRqYftlhDGto5oSxeNeFWHzajbVuA",
"https://youtube.com/playlist?list=PLjMjkIR4-dvIAvboLjtq6sSi_1_wk2VgD"
]}
]
}

],

// ================= BCOM HONORS =================
"BCom Honors - Semester 6": [
...JSON.parse(JSON.stringify(this["BCom General - Semester 6"] || [])),
{
name: "International Finance",
channels: [
{ name: "Whole Subject", links: [
"https://youtube.com/playlist?list=PLWJDzVuPkXAnNpRjN6InK65R7ndvpYZUf"
]}
]
}
],

// ================= BCOM COMPUTER APPLICATIONS =================
"BCom Computer Applications - Semester 6": [
...JSON.parse(JSON.stringify(this["BCom General - Semester 6"] || [])),
{
name: "Cybersecurity",
channels: [
{ name: "Whole Subject", links: [
"https://youtube.com/playlist?list=PLtfg0YD2YYUQMZp4bRkeZI0JXWHGqh8vo"
]}
]
}
],

// ================= BCOM BUSINESS ANALYTICS =================
"BCom Business Analytics - Semester 6": [
...JSON.parse(JSON.stringify(this["BCom General - Semester 6"] || []))
]

};
