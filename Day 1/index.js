/*const app= document.getElementById("app");
const output = document.getElementById("output");
const btnNama1 = document.getElementById("btn-2");
const btnNama = document.getElementById("btn-1")
const namaSaya= "Randika"
const umurSaya = 20; 

const generateNama=()=>{
  output.innerText=namaSaya

};

const generateUmur=()=>{
    output.innerText=umurSaya
  
};
btnNama1.addEventListener("click",generateUmur);
btnNama.addEventListener("click",generateNama);*/

/*const app = document.getElementById("app");
const output = document.getElementById("output");
const btnNama1 = document.getElementById("btn-2");
const input = document.getElementById("input");
const image = document.getElementById("image");

/*const generateColor=()=>{
    
        let result = input.value.toUpperCase();
        console.log(result);
    
    


    if (result =="MERAH"){
        output.innerHTML = "Warna Merah";
        output.style.color = "red";
    } else if (result =="HIJAU" ){
        output.innerHTML = "Warna Hijau"
        output.style.color = "green";
    }else {
        output.style.color="black"
    }
  
};*/

/*const generateHewan = () => {
  let result = input.value.toUpperCase();
  console.log(result);

  if (result == "BURUNG") {
    image.src =
      "https://imgs.search.brave.com/ps_xjDtRs46OscBbVSjrwJUHNHb4urLdvBLQw66dOoU/rs:fit:1000:571:1/g:ce/aHR0cHM6Ly9jZG4u/aWRudGltZXMuY29t/L2NvbnRlbnQtaW1h/Z2VzL2NvbW11bml0/eS8yMDE5LzA2L2Fu/aW1hbC1oZXJvLWZs/YW1pbmdvLTAtYTI1/ZmIxZGE4NWU2MmEx/OTBlYjRlMjNiMzky/MTFkNTQuanBn";
  } else if (result == "HARIMAU") {
    image.src =
      "https://imgs.search.brave.com/U3oArKxDM56s2G6WeCoFiL4avUtH8ytiI0mwEqXz5L4/rs:fit:700:393:1/g:ce/aHR0cHM6Ly9jZG4t/Mi50c3RhdGljLm5l/dC9zdHlsZS9mb3Rv/L2JhbmsvaW1hZ2Vz/L2hhcmltYXUtcGF0/dW5nXzIwMTcwMzEz/XzE1NDIyNi5qcGc";
  } else if (result == "KUCING") {
    image.src =
      "https://imgs.search.brave.com/d1ZG1-mc0i79ZLzo4tZEKlkOWB9szmIks4o9Nc7vlO0/rs:fit:494:503:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC9mOC82MS9kNS9m/ODYxZDU3NDlmOTgw/NjY1OThhYmYwNjE2/MDU5ZWM5OC5qcGc";
  } else {
    image.src =
      "https://imgs.search.brave.com/NirJh5OhRJhxBbx_2pljq7OjGpluUNtdkKmUCgdsWkw/rs:fit:1068:601:1/g:ce/aHR0cDovL2kwLmt5/bS1jZG4uY29tL2Vu/dHJpZXMvaWNvbnMv/ZmFjZWJvb2svMDAw/LzAyNi8xNTIvZ2ln/YWNoYWQuanBn";
  }
};*/

const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const kegiatan = ref("");
    const dataKegiatan = ref(["Makan", "Minum"]);
    const tambahKegiatan = () => {
      dataKegiatan.value.push(kegiatan.value);
    };

    return {
      kegiatan,
      dataKegiatan,
      tambahKegiatan,
    };
  },
});

app.mount("#app");
