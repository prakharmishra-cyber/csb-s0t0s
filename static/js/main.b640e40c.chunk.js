(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{23:function(e,c,a){},43:function(e,c,a){},45:function(e,c,a){"use strict";a.r(c);var r=a(2),i=a(17),t=a.n(i),s=a(3),n=a.n(s),p=a(6),l=a(8),o=(a(23),a(7)),d=a.n(o),h=(a(43),a(0)),j=function(e){return null!=e.recipe?(console.log(e),Object(h.jsx)("div",{className:"recipe_wrapper",children:e.recipe.map((function(e,c){return Object(h.jsxs)("div",{className:"recipe_itself",children:[Object(h.jsx)("img",{src:e.recipe.image,width:200,height:200,alt:e.recipe.label,className:"recipe_image"}),Object(h.jsxs)("div",{className:"recipe_info",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"recipe_label",children:e.recipe.label}),Object(h.jsxs)("div",{className:"recipe_calories",children:["Calories : ",Math.round(Number(e.recipe.calories))]}),Object(h.jsxs)("div",{className:"recipe_calories",children:["Total Weight :"," ",Math.round(Number(e.recipe.totalWeight)),"gm"]}),Object(h.jsxs)("div",{className:"recipe_calories",children:["Cuisine Type : ",e.recipe.cuisineType[0]]}),Object(h.jsxs)("div",{className:"recipe_calories",children:["Dish Type : ",e.recipe.dishType[0]]})]}),Object(h.jsx)("a",{href:e.recipe.url,className:"recipe_link",target:"_blank",children:"Click to know the full recipe"})]})]},c)}))})):Object(h.jsx)("div",{children:"no, way"})};function b(){var e=Object(r.useState)([]),c=Object(l.a)(e,2),a=c[0],i=c[1],t=Object(r.useState)("Pork"),s=Object(l.a)(t,2),o=s[0],b=s[1];Object(r.useEffect)((function(){function e(){return(e=Object(p.a)(n.a.mark((function e(){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c={method:"GET",url:"https://edamam-recipe-search.p.rapidapi.com/search",params:{q:o},headers:{"x-rapidapi-host":"edamam-recipe-search.p.rapidapi.com","x-rapidapi-key":"ab2cceea62mshb6e085c0ad6b68ap141bbbjsn560c5b3033a7"}},d.a.request(c).then((function(e){i(e.data)})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return Object(h.jsxs)("div",{className:"first_div",children:[Object(h.jsxs)("div",{className:"App_Bar",children:[Object(h.jsx)("div",{className:"App_Bar_title",children:"Recipe Master"}),Object(h.jsxs)("div",{className:"App_Bar_Search",children:[Object(h.jsx)("input",{placeholder:"Type in ingredient / Recipe Name",value:o,onChange:function(e){return b(e.target.value)}}),Object(h.jsx)("button",{onClick:function(){function e(){return(e=Object(p.a)(n.a.mark((function e(){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c={method:"GET",url:"https://edamam-recipe-search.p.rapidapi.com/search",params:{q:o},headers:{"x-rapidapi-host":"edamam-recipe-search.p.rapidapi.com","x-rapidapi-key":"ab2cceea62mshb6e085c0ad6b68ap141bbbjsn560c5b3033a7"}},d.a.request(c).then((function(e){console.log(e.data),i(e.data)})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),b("")},children:"Search"})]})]}),null!==a?Object(h.jsx)(j,{recipe:a.hits}):Object(h.jsx)("div",{children:"There are no recipes"}),Object(h.jsxs)("div",{className:"App_Footer",children:[Object(h.jsx)("div",{className:"part_one",children:"Home | Recipes | SiteMap"}),Object(h.jsx)("div",{className:"part_second",children:"2021 @ copyright reserved"})]})]})}var u=document.getElementById("root");t.a.render(Object(h.jsx)(r.StrictMode,{children:Object(h.jsx)(b,{})}),u)}},[[45,1,2]]]);
//# sourceMappingURL=main.b640e40c.chunk.js.map