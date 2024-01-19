import{S as t}from"./assets/simple-lightbox-1b73120a.js";const i=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],p=document.querySelector(".gallery");p.innerHTML=i.reduce((e,a)=>e+`
  <li class="gallery-item">
    <a class="gallery-link" href="${a.original}" onclick="return false;">
      <img
        class="gallery-image"
        src="${a.preview}"
        data-source="${a.original}"
        alt="${a.description}"
        width="360"
        height="200"
      />
    </a>
  </li>
`,"");new t(".gallery a",{captionsDelayTime:250});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".form");e.addEventListener("input",a=>{const o={email:e.email.value,message:e.message.value};localStorage.setItem("form-state",JSON.stringify(o))}),window.addEventListener("load",()=>{const a=localStorage.getItem("form-state");if(a){const o=JSON.parse(a);e.email.value=o.email,e.message.value=o.message}}),e.addEventListener("submit",a=>{a.preventDefault();const o={email:e.email.value,message:e.message.value};console.log(o),localStorage.removeItem("form-state"),e.email.value="",e.message.value=""})});
//# sourceMappingURL=commonHelpers3.js.map
